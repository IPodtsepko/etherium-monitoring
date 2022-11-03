'use strict';

const fs = require('fs');
const Web3 = require('web3')
const logger = require('./logger')

module.exports = {
    subscribe: async function (apiKey, settings) {
        const web3 = new Web3('wss://eth-mainnet.ws.alchemyapi.io/ws/' + apiKey);
        const contractABI = JSON.parse(fs.readFileSync(settings.contractABI));
        let contract = new web3.eth.Contract(contractABI, settings.address);

        let options = {
            filter: {
                value: [],
            },
            fromBlock: 'latest',
        };
        contract.events.AnswerUpdated(options)
            .on('connected', address => {
                logger.info(settings.name, 'monitor connected:', address);
            })
            .on('data', event => {
                logger.debug(`[${settings.name}] Received data:`);
                logger.show(`[${settings.name}]`, event);
                const newPrice = event.returnValues.current * settings.modifier;
                logger.info(`[${settings.name}] Updated price: ${settings.currency}${newPrice}`);
            })
            .on('error', errorMessage => {
                logger.error(`[${settings.name} Received error:`);
                logger.show(`[${settings.name}]`, errorMessage);
            });
    }
};
