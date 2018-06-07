import web3 from './web3'

const address = '0x9f30b0f3809df426a43a366cc8d4cb1391b31ebe'

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
