'use strict';

// load required modules
require('dotenv').config();
const path = require('path');
const seperator = path.sep;

// Default settings
const root_dir = __dirname + seperator + '..' + seperator;

// Export configurations
module.exports = {
    /*
    |--------------------------------------------------------------------------
    | service settings
    |--------------------------------------------------------------------------
    */
    service: {
        name                : process.env.APP_NAME          || 'boilerplate service',
        port                : process.env.APP_PORT          || 3001,
    },

    /*
    |--------------------------------------------------------------------------
    |  Environment reference
    |--------------------------------------------------------------------------
    */
    core : {
        environment : process.env.BOILER_PLATE   || 'local',
    },

    /*
    |--------------------------------------------------------------------------
    | storage directory configuration
    |--------------------------------------------------------------------------
    */
    main_dir    : process.env.MAIN_DIR || 'storage',
    logo_dir    : process.env.LOGO_DIR || 'logo',

    /*
    |--------------------------------------------------------------------------
    |  RabbitMq configuration
    |--------------------------------------------------------------------------
    */
    queue_driver    : "rabbitmq",
    rabbitmq: {
        protocol            : "amqp",
        hostname            : process.env.RABBIT_HOST       || '127.0.0.1',
        port                : process.env.RABBIT_PORT       || '5672',
        username            : process.env.RABBIT_USERNAME   || 'admin',
        password            : process.env.RABBIT_PASSWORD   || 'admin',
        heartbeat           : process.env.RABBIT_HEARTBEAT  || '10',
        prefetch_value      : parseInt(process.env.RABBIT_PREFETCH) || 1,
        queue_priority      : 5,
        keepalive           : 0,
        read_write_timeout  : 20,
        reconnect_timeout   : 5,
    },

    register_api: {
        host    : process.env.REGISTER_API_HOST     || '127.0.0.1',
        port    : process.env.REGISTER_API_PORT     || '3001',
        version : process.env.REGISTER_API_VERSION  || 'v1'
    },

    /*
   |--------------------------------------------------------------------------
   | cache driver
   |--------------------------------------------------------------------------
   */
    cache_driver: process.env.BOILER_PLATE_CACHE_DRIVER || 'redis',

    /*
    |--------------------------------------------------------------------------
    | Memory cache
    |--------------------------------------------------------------------------
    */
    memory: {
        max: 100,
    },

    /*
    |--------------------------------------------------------------------------
    | Logger cache
    |--------------------------------------------------------------------------
    */
    logger: {
        level: 'info',
    },

    /*
    |--------------------------------------------------------------------------
    | Redis cache
    |--------------------------------------------------------------------------
    */
    redis: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || 6379
    },

    /*
    |--------------------------------------------------------------------------
    | Time to live(ttl) for cache
    |--------------------------------------------------------------------------
    */
    ttl: process.env.CACHE_TTL || 120,

    /*
    |--------------------------------------------------------------------------
    | Unit testing configurations
    |--------------------------------------------------------------------------
    */
    unit_testing: {
        flag: JSON.parse(process.env.UNIT_TESTING) || false,
        timeOut: JSON.parse(process.env.UNIT_TESTING_TIMEOUT) || 3000,
        domain: process.env.UNIT_TESTING_DOMAIN || 'http://localhost:3001',
        apiKey: process.env.API_KEY || 'dummy',
        api: {
            health: "/health",
            createQueue: "/api/v1/queue/create",
        }
    },

    /*
    |--------------------------------------------------------------------------
    | Swagger configurations
    |--------------------------------------------------------------------------
    */
    swagger: {
        host: process.env.SWAGGER_HOST || 'localhost:3001',
    },

    /*
    |--------------------------------------------------------------------------
    | Status for DB
    |--------------------------------------------------------------------------
    */
    db_status : {
        "DELETE" : 9,
        "ACTIVE" : 1,
        "DEACTIVE" : 0
    },

    /*
    |--------------------------------------------------------------------------
    | Retry Configuration
    |--------------------------------------------------------------------------
    */
    retry : {
        maxAttempts : Number(process.env.REQUEST_MAX_ATTEMPT) || 2,
        retryDelay : Number(process.env.REQUEST_RETRY_DELAY) || 100,
        timeOut : Number(process.env.REQUEST_TIMEOUT) || 1000,
        type : process.env.ERROR_TYPE || 'request-timeout',
    }

}