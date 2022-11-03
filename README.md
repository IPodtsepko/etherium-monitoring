# Мониторы для Etherium Mainnet

Реализовано 2 монитора:

1. Монитор последних блоков (`last-blocks`)
2. Монитор цен (параметризованный; `price:base/quote`):
    1. `price:ETH/USD`
    2. `price:LINK/ETH`
    3. `price:USDT/ETH`

Чтобы запустить мониторинг используйте команду `node index.js [monitor [monitor [...]]]`. Например:

```
$ node index.js last-blocks
🛈  11/3/2022, 11:44:11 PM - Subscribed to 'last-blocks' monitor
🛈  11/3/2022, 11:44:14 PM - The latest block number is 15891952 (Ethereum/Mainnet)
🛈  11/3/2022, 11:44:25 PM - The latest block number is 15891953 (Ethereum/Mainnet)
```
Данная команда запускает мониторинг последних блоков в сети Etherium/Mainnet.

```
$ node index.js price:ETH/USD price:LINK/ETH price:USDT/ETH
🛈  11/3/2022, 11:45:05 PM - Subscribed to 'price' monitor for ETH / USD
🛈  11/3/2022, 11:45:05 PM - Subscribed to 'price' monitor for LINK / ETH
🛈  11/3/2022, 11:45:05 PM - Subscribed to 'price' monitor for USDT / ETH
🛈  11/3/2022, 11:45:06 PM - LINK / ETH monitor connected: 0x3060e0894d85d2235f6fe4da198d2593
🛈  11/3/2022, 11:45:06 PM - USDT / ETH monitor connected: 0x02570c8ff284945c22f6000e32585ac7
🛈  11/3/2022, 11:45:06 PM - ETH / USD monitor connected: 0x4689cfa737c63799d9f9032f638116a5
```
Здесь осуществляется подписка на любые изменения курсов соответствующих активов.

_Замечание_: Возможно совместное использование `last-blocks` и любого количества `price:.*` мониторов.
