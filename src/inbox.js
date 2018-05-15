import web3 from './web3'

const address = '0x6e98bb44ebb1fa653a92b86dad3e4eec46251baf'

const abi = [
  {
    'constant': false,
    'inputs': [
      {
        'name': 'newMessage',
        'type': 'string'
      }
    ],
    'name': 'setMessage',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': 'initialMessage',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getMessage',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'message',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }
]

export default new web3.eth.Contract(abi, address)
