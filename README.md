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
ℹ  11/3/2022, 11:55:38 PM - [ETH / USD] Received data:
[ETH / USD] {
  address: '0x37bC7498f4FF12C19678ee8fE19d713b87F6a9e6',
  blockNumber: 15892009,
  transactionHash: '0xb6495887424a5eb2e7a0bde6ade081f606aae176c33b651a3c6e1f24f8d1c6c8',
  transactionIndex: 48,
  blockHash: '0x01b1941000a5a585d2f8f9f41c70a27f31cff57b2c8170c0b31c7590c6b370cf',
  logIndex: 97,
  removed: false,
  id: 'log_96abd29b',
  returnValues: Result {
    '0': '154133729827',
    '1': '36214',
    '2': '1667508935',
    current: '154133729827',
    roundId: '36214',
    updatedAt: '1667508935'
  },
  event: 'AnswerUpdated',
  signature: '0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f',
  raw: {
    data: '0x0000000000000000000000000000000000000000000000000000000063642ac7',
    topics: [
      '0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f',
      '0x00000000000000000000000000000000000000000000000000000023e3161223',
      '0x0000000000000000000000000000000000000000000000000000000000008d76'
    ]
  }
}
🛈  11/3/2022, 11:55:38 PM - [ETH / USD] Updated price: $1541.33729827
```
Здесь осуществляется подписка на любые изменения курсов соответствующих активов.

_Замечание_: Возможно совместное использование `last-blocks` и любого количества `price:.*` мониторов.
