'use strict';

const lastBlocksMonitor = require('./scripts/last-blocks-monitor')
const priceMonitor = require('./scripts/price-monitor')
const logger = require('./scripts/logger')
const fs = require('fs')

const settings = JSON.parse(fs.readFileSync('./settings.json'))

const argv = process.argv.slice(2)
if (argv.length == 0) {
    logger.show(`Usage: node index.js monitor [monitor [...]]
Where:
  - monitor is 'last-blocks' or 'price:<aggregator-name>'`)
}

const priceMonitorRegex = new RegExp('price:*')
for (let monitor of argv) {
    if (monitor == "last-blocks") {
        lastBlocksMonitor.subscribe(settings.alchemySettings);
        logger.info('Subscribed to \'last-blocks\' monitor');
    } else if (priceMonitorRegex.test(monitor)) {
        const aggregatorSettings = settings.aggregators[monitor.substring(6)];
        priceMonitor.subscribe(settings.alchemySettings.apiKey, aggregatorSettings);
        logger.info('Subscribed to \'price\' monitor for', aggregatorSettings.name);
    } else {
        logger.error("Unknown monitor", monitor)
    }
}
