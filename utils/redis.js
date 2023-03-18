'use strict';

// Load required modules
let redis = require('redis');
const async = require('async');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// Load required configuration
const logger = require('./log');
const config = require('../config/boilerplate');

// Redis for the unit test-cases
if (JSON.parse(config.unit_testing.flag)) {
    logger.debug(__file, __func, __line, 'Redis connection is moked');
    redis = require('redis-mock');
}

module.exports = class cache {

    constructor() {
        // Constructor is empty
    }

    /**
     * Set key to hold the string value
     * @param  {string} key
     * @param  {string} value
     * @param  {number} ttl
     */
    set(key, value, ttl) {
        if (ttl) {
            return this.cache.set(key, value, 'EX', ttl);
        }
        else {
            return this.cache.set(key, value);
        }
    }

    /**
     * Get the value of key
     * @param  {string} key
     */
    get(key) {
        return new Promise((resolve, reject) => {
            this.cache.get(key, (err, result) => {
                if (err) {
                    reject('Some-thing wrong while getting data from cache');
                    logger.error(__file, __func, __line, 'Error while getting data from cache|' + err);
                }
                resolve(result);
            });
        });
    }

    /**
     * Adds a new member and associated score to a sorted set.
     * @param  {string} key
     * @param  {number} score
     * @param  {string} member
     */
    zadd(key, score, member) {
        return this.cache.zadd(key, score, member);
    }

    /**
     * Returns the rank of the provided member, assuming the sorted is in ascending order.
     * @param  {string} key
     * @param  {string} member
     */
    async zrank(key, member) {
        return new Promise((resolve, reject) => {
            this.cache.zrank(key, member, (err, result) => {
                if (err) {
                    reject('Some-thing wrong while getting rank from cache');
                    logger.error(__file, __func, __line, 'Error while getting rank from cache|' + err);
                }
                resolve(result);
            });
        })
    }

    /**
     * Removes the specified members from the sorted set stored at key.
     * @param  {string} key
     * @param  {string} member
     */
    zrem(key, member) {
        return this.cache.zrem(key, member);
    }

    /**
     * Returns the number of elements in the sorted set at key with a score between min and max.
     * @param  {string} key
     * @param  {number} min
     * @param  {number} max
     */
    zcount(key, min, max) {
        return new Promise((resolve, reject) => {
            this.cache.zcount(key, min, max, (err, result) => {
                if (err) {
                    reject('Some-thing wrong while getting count from cache');
                    logger.error(__file, __func, __line, 'Error while getting count from cache|' + err);
                }
                resolve(result);
            });
        });
    }

    /**
     * @param  {object} options=''
     */
    createConnection(options = '') {
        options = options ? options : config.redis;
        //connecting to redis server
        this.cache = redis.createClient(options);
        logger.debug(__file, __func, __line, 'Trying to connect redis........');
        this.cache.on('connect', () => {
            //executed on successfull connection
            logger.info(__file, __func, __line, 'Redis client connected');
        });
        this.cache.on('error', (err) => {
            //executed when there is an error in connection
            logger.error(__file, __func, __line, err);
            setInterval(process.exit(0), config.reconnect_timeout);
        });

        process.once('SIGINT', () => { this.closeConnection(); });

    }

    closeConnection() {
        this.cache.quit();
    }
}