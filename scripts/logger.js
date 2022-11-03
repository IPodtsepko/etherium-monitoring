'use strict';

const log = require('log-beautify');

function timestamp() {
    return (new Date()).toLocaleString();
}

function logImpl(logger, ...data) {
    logger.call(log, ' ' + timestamp(), '-', ...data)
}

module.exports = {
    show: function (...data) {
        log.show(...data);
    },

    debug: function (...data) {
        logImpl(log.debug, ...data);
    },

    info: function (...data) {
        logImpl(log.info, ...data);
    },

    warning: function (...data) {
        logImpl(log.warning, ...data);
    },

    error: function (...data) {
        logImpl(log.error, ...data);
    }
}
