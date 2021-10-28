require("chai/register-should");
require('mocha-steps')

const config = {
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
    ]
}

module.exports = config
