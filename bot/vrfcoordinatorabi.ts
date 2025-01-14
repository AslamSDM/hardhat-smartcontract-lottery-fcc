const vrfabi =[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_link",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_linkEthFeed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_coordinator",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "have",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "want",
          "type": "address"
        }
      ],
      "name": "OnlyCoordinatorCanFulfill",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "requestId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "WrapperFulfillmentFailed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "COORDINATOR",
      "outputs": [
        {
          "internalType": "contract ExtendedVRFCoordinatorV2Interface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "LINK",
      "outputs": [
        {
          "internalType": "contract LinkTokenInterface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "LINK_ETH_FEED",
      "outputs": [
        {
          "internalType": "contract AggregatorV3Interface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SUBSCRIPTION_ID",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_callbackGasLimit",
          "type": "uint32"
        }
      ],
      "name": "calculateRequestPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "disable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "enable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_callbackGasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "_requestGasPriceWei",
          "type": "uint256"
        }
      ],
      "name": "estimateRequestPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getConfig",
      "outputs": [
        {
          "internalType": "int256",
          "name": "fallbackWeiPerUnitLink",
          "type": "int256"
        },
        {
          "internalType": "uint32",
          "name": "stalenessSeconds",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "fulfillmentFlatFeeLinkPPM",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "wrapperGasOverhead",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "coordinatorGasOverhead",
          "type": "uint32"
        },
        {
          "internalType": "uint8",
          "name": "wrapperPremiumPercentage",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "keyHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "maxNumWords",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastRequestId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "onTokenTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "requestId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "randomWords",
          "type": "uint256[]"
        }
      ],
      "name": "rawFulfillRandomWords",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "s_callbacks",
      "outputs": [
        {
          "internalType": "address",
          "name": "callbackAddress",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "callbackGasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "requestGasPrice",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "requestWeiPerUnitLink",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "juelsPaid",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_configured",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_disabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_wrapperGasOverhead",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_coordinatorGasOverhead",
          "type": "uint32"
        },
        {
          "internalType": "uint8",
          "name": "_wrapperPremiumPercentage",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "_keyHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "_maxNumWords",
          "type": "uint8"
        }
      ],
      "name": "setConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "typeAndVersion",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
export default vrfabi 