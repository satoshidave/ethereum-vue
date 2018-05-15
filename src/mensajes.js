import web3 from './web3'

const address = '0xd792b0f9c854c7eca7fc3c8b8e6f5f7a62bf921a'

const abi = [
  {
    'constant': false,
    'inputs': [
      {
        'name': 'mensaje',
        'type': 'string'
      }
    ],
    'name': 'escribirMensaje',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'contadorMensajes',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'creador',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'mensajes',
    'outputs': [
      {
        'name': 'emisor',
        'type': 'address'
      },
      {
        'name': 'mensaje',
        'type': 'string'
      },
      {
        'name': 'fechaPublicacion',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }
]

export default new web3.eth.Contract(abi, address)
