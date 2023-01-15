export const Zakat = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'zvoice',
    outputs: [
      {
        internalType: 'address',
        name: 'walletAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'zakatID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'phoneNum',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'date',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'statusPayment',
        type: 'bool',
      },
      {
        internalType: 'string',
        name: 'ipfsHash',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_zakatID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_phoneNum',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_ipfsHash',
        type: 'string',
      },
    ],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_ipfsHash',
        type: 'string',
      },
    ],
    name: 'verifyFile',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'getAll',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'walletAddress',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'zakatID',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phoneNum',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'date',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'statusPayment',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'ipfsHash',
            type: 'string',
          },
        ],
        internalType: 'struct Zakat.ZakatIVC[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_walletAddress',
        type: 'address',
      },
    ],
    name: 'getHistory',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
];
