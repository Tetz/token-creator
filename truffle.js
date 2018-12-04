require('dotenv').config()
const HDWalletProvider = require("truffle-hdwallet-provider")

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          process.env['RINKEBY_MNEMONIC'], 'https://rinkeby.infura.io/xyji23ngACpAtbvoO0MZ'
        )
      },
      network_id: 4
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          process.env['ROPSTEN_MNEMONIC'], 'https://ropsten.infura.io/xyji23ngACpAtbvoO0MZ'
        )
      },
      network_id: 3
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(
          process.env['MAINNET_MNEMONIC'], 'https://mainnet.infura.io/xyji23ngACpAtbvoO0MZ'
        )
      },
      network_id: 1
    }
  }
}
