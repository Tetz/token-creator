require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider")

module.exports = {
  compilers: {
    solc: {
      version: "0.6.2"
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          process.env['RINKEBY_MNEMONIC'], 'https://rinkeby.infura.io/v3/a3e73419953548babeebc5a327f62f56'
        )
      },
      network_id: 4,
      gas: 10000000,
      gasPrice: 20000000000
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          process.env['ROPSTEN_MNEMONIC'], 'https://ropsten.infura.io/v3/a3e73419953548babeebc5a327f62f56'
        )
      },
      network_id: 3
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(
          process.env['MAINNET_MNEMONIC'], 'https://mainnet.infura.io/v3/a3e73419953548babeebc5a327f62f56'
        )
      },
      network_id: 1,
      gas: 10000000,
      gasPrice: 20000000000
    }
  }
}
