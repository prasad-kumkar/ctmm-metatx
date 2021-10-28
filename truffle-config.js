require("chai/register-should");
require('mocha-steps')

const HDWalletProvider = require("@truffle/hdwallet-provider")
require('dotenv').config();

module.exports = {
    networks: {
        mainnet: {
            host: "localhost",
            port: 8545,
            network_id: "1",
        },
        ropsten: {
            host: "localhost",
            port: 8545,
            network_id: "3",
        },
        kovan: {
            host: "localhost",
            port: 8545,
            network_id: "42",
        },
        rinkeby: {
            host: "localhost",
            port: 8545,
            network_id: "4",
        },
        goerli: {
            host: "localhost",
            port: 8545,
            network_id: "5",
        },
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*",
	    },
        matic: {
            provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://rpc-mumbai.maticvigil.com`),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
    },
    mocha: {
        enableTimeouts: false,
        grep: process.env.TEST_GREP,
        reporter: "eth-gas-reporter",
        reporterOptions: {
            currency: "USD",
            excludeContracts: ["Migrations"]
        }
    },
    compilers: {
        solc: {
            version: "0.5.10",
            settings: {
                optimizer: {
                    enabled: true
                }
            }
        }
    },

    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
        etherscan: process.env.ETHERSCAN_API_KEY,
        polygonscan: process.env.POLYSCAN_API_KEY
    }
}