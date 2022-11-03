'use strict';

const {
    Alchemy
} = require('alchemy-sdk');
const logger = require('./logger')

module.exports = {
    subscribe: async function (alchemySettings,) {
        const alchemy = new Alchemy(alchemySettings);
        alchemy.ws.on('block', async (blockNumber) => {
            logger.info('The latest block number is', blockNumber, '(Ethereum/Mainnet)');
        });
    },
};
