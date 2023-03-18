'use strict';

// Load required modules
const amqp = require('amqplib/callback_api');

// Load required configuration
const config = require('../config/boilerplate');
const logger = require('./log');

module.exports = class Queue {

    constructor() {
        // Constructor is empty
    }

    createConnection(rabbit_con, callback) {
        if (JSON.parse(config.unit_testing.flag)) {
            logger.debug(__file, __func, __line, 'RabbitMq connection is moked');
            callback({});
            return;
        }
        if (config.queue_driver == 'rabbitmq')
            return this.createRabbitConnection(rabbit_con, callback);
    }

    createQueue(param, callback) {
        if (config.queue_driver == 'rabbitmq')
            return this.createRabbitQueue(param, callback);
    }

    sendToQueue(param) {
        if (config.queue_driver == 'rabbitmq')
            return this.sendToRabbitQueue(param);
    }

    publish(param) {
        if (config.queue_driver == 'rabbitmq')
            return this.publishToRabbitQueue(param);

    }

    subscribe(param, callback) {
        if (config.queue_driver == 'rabbitmq')
            return this.subscribeRabbitQueue(param, callback);
    }

    createExchange(param) {
        if (config.queue_driver == 'rabbitmq')
            return this.createRabbitExchange(param);
    }

    bindQueue(param) {
        if (config.queue_driver == 'rabbitmq')
            return this.bindRabbitQueue(param);
    }

    closeConnection() {
        if (config.queue_driver == 'rabbitmq')
            this.closeRabbitConnection();
    }

    closeRabbitConnection() {
        this.connection.close();
    }

    subscribeRabbitQueue(param, callback) {
        this.queue.consume(param.queue, (msg) => {
            callback(msg);
        }, { noAck: param.ack });
    }

    sendToRabbitQueue(param) {
        return this.queue.sendToQueue(param.queue, Buffer.from(param.msg), { priority: Number(param.priority) });
    }

    publishToRabbitQueue(param) {
        return this.queue.publish(param.exchange, param.key, Buffer.from(param.msg));
    }

    createRabbitQueue(param) {
        return this.queue.assertQueue(param.queue, param.options);
    }

    createRabbitExchange(param) {
        return this.queue.assertExchange(param.exchange, param.type, { durable: param.durable });
    }

    bindRabbitQueue(param) {
        return this.queue.bindQueue(param.queue, param.exchange, param.key);
    }

    createRabbitConnection(rabbit_con, callback) {
        logger.debug(__file, __func, __line, 'Trying to connect RabbitMQ host ' + JSON.stringify(rabbit_con.hostname) + "........");
        // create connection, create channel
        amqp.connect(rabbit_con, (error0, connection) => {
            if (error0) {
                logger.error(__file, __func, __line, JSON.stringify(error0));
            }
            this.connection = connection;
            if (!connection) {
                logger.error(__file, __func, __line, 'Unable to establish RabbitMQ connection');
                setInterval(process.exit(0), config.rabbitmq.reconnect_timeout);
                return;
            }
            process.once('SIGINT', () => { this.closeConnection(); });

            //Error handling event when already existing connection breaks
            connection.on("error", (error) => {
                logger.error(__file, __func, __line, 'Rabbit Queue exception' + JSON.stringify(error));
                setInterval(process.exit(0), config.rabbitmq.reconnect_timeout);
            });
            connection.createChannel((error1, channel) => {
                if (error1) {
                    logger.error(__file, __func, __line, JSON.stringify(error1));
                }
                this.queue = channel;
                callback();
            });
        })
    }
}