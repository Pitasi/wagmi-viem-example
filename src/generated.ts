//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAct
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iActAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'author',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'actionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'previousStatus',
        internalType: 'enum ActionStatus',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'newStatus',
        internalType: 'enum ActionStatus',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'ActionStateChange',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'participant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'actionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'voteType',
        internalType: 'enum VoteType',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'ActionVoted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'actionId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'CreateAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'templateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'CreateTemplate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'author',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'templateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'UpdateTemplate',
  },
  {
    type: 'function',
    inputs: [{ name: 'actionId', internalType: 'uint64', type: 'uint64' }],
    name: 'actionById',
    outputs: [
      {
        name: 'response',
        internalType: 'struct ActionByIdResponse',
        type: 'tuple',
        components: [
          {
            name: 'action',
            internalType: 'struct Action',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              {
                name: 'status',
                internalType: 'enum ActionStatus',
                type: 'uint8',
              },
              {
                name: 'msg',
                internalType: 'struct Types.AnyType',
                type: 'tuple',
                components: [
                  { name: 'typeUrl', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'bytes', type: 'bytes' },
                ],
              },
              {
                name: 'result',
                internalType: 'struct Types.AnyType',
                type: 'tuple',
                components: [
                  { name: 'typeUrl', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'bytes', type: 'bytes' },
                ],
              },
              { name: 'creator', internalType: 'address', type: 'address' },
              { name: 'timeoutHeight', internalType: 'uint64', type: 'uint64' },
              {
                name: 'createdAt',
                internalType: 'struct Types.Timestamp',
                type: 'tuple',
                components: [
                  { name: 'secs', internalType: 'uint64', type: 'uint64' },
                  { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                ],
              },
              {
                name: 'updatedAt',
                internalType: 'struct Types.Timestamp',
                type: 'tuple',
                components: [
                  { name: 'secs', internalType: 'uint64', type: 'uint64' },
                  { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                ],
              },
              {
                name: 'approveExpression',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'rejectExpression',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'mentions',
                internalType: 'address[]',
                type: 'address[]',
              },
              {
                name: 'votes',
                internalType: 'struct ActionVote[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'participant',
                    internalType: 'address',
                    type: 'address',
                  },
                  {
                    name: 'votedAt',
                    internalType: 'struct Types.Timestamp',
                    type: 'tuple',
                    components: [
                      { name: 'secs', internalType: 'uint64', type: 'uint64' },
                      { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                    ],
                  },
                  {
                    name: 'voteType',
                    internalType: 'enum VoteType',
                    type: 'uint8',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pagination',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'actions',
    outputs: [
      {
        name: 'response',
        internalType: 'struct ActionsResponse',
        type: 'tuple',
        components: [
          {
            name: 'pagination',
            internalType: 'struct Types.PageResponse',
            type: 'tuple',
            components: [
              { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
              { name: 'total', internalType: 'uint64', type: 'uint64' },
            ],
          },
          {
            name: 'actions',
            internalType: 'struct Action[]',
            type: 'tuple[]',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              {
                name: 'status',
                internalType: 'enum ActionStatus',
                type: 'uint8',
              },
              {
                name: 'msg',
                internalType: 'struct Types.AnyType',
                type: 'tuple',
                components: [
                  { name: 'typeUrl', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'bytes', type: 'bytes' },
                ],
              },
              {
                name: 'result',
                internalType: 'struct Types.AnyType',
                type: 'tuple',
                components: [
                  { name: 'typeUrl', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'bytes', type: 'bytes' },
                ],
              },
              { name: 'creator', internalType: 'address', type: 'address' },
              { name: 'timeoutHeight', internalType: 'uint64', type: 'uint64' },
              {
                name: 'createdAt',
                internalType: 'struct Types.Timestamp',
                type: 'tuple',
                components: [
                  { name: 'secs', internalType: 'uint64', type: 'uint64' },
                  { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                ],
              },
              {
                name: 'updatedAt',
                internalType: 'struct Types.Timestamp',
                type: 'tuple',
                components: [
                  { name: 'secs', internalType: 'uint64', type: 'uint64' },
                  { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                ],
              },
              {
                name: 'approveExpression',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'rejectExpression',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'mentions',
                internalType: 'address[]',
                type: 'address[]',
              },
              {
                name: 'votes',
                internalType: 'struct ActionVote[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'participant',
                    internalType: 'address',
                    type: 'address',
                  },
                  {
                    name: 'votedAt',
                    internalType: 'struct Types.Timestamp',
                    type: 'tuple',
                    components: [
                      { name: 'secs', internalType: 'uint64', type: 'uint64' },
                      { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                    ],
                  },
                  {
                    name: 'voteType',
                    internalType: 'enum VoteType',
                    type: 'uint8',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pagination',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'status', internalType: 'enum ActionStatus', type: 'uint8' },
    ],
    name: 'actionsByAddress',
    outputs: [
      {
        name: 'response',
        internalType: 'struct ActionsByAddressResponse',
        type: 'tuple',
        components: [
          {
            name: 'pagination',
            internalType: 'struct Types.PageResponse',
            type: 'tuple',
            components: [
              { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
              { name: 'total', internalType: 'uint64', type: 'uint64' },
            ],
          },
          {
            name: 'actions',
            internalType: 'struct Action[]',
            type: 'tuple[]',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              {
                name: 'status',
                internalType: 'enum ActionStatus',
                type: 'uint8',
              },
              {
                name: 'msg',
                internalType: 'struct Types.AnyType',
                type: 'tuple',
                components: [
                  { name: 'typeUrl', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'bytes', type: 'bytes' },
                ],
              },
              {
                name: 'result',
                internalType: 'struct Types.AnyType',
                type: 'tuple',
                components: [
                  { name: 'typeUrl', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'bytes', type: 'bytes' },
                ],
              },
              { name: 'creator', internalType: 'address', type: 'address' },
              { name: 'timeoutHeight', internalType: 'uint64', type: 'uint64' },
              {
                name: 'createdAt',
                internalType: 'struct Types.Timestamp',
                type: 'tuple',
                components: [
                  { name: 'secs', internalType: 'uint64', type: 'uint64' },
                  { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                ],
              },
              {
                name: 'updatedAt',
                internalType: 'struct Types.Timestamp',
                type: 'tuple',
                components: [
                  { name: 'secs', internalType: 'uint64', type: 'uint64' },
                  { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                ],
              },
              {
                name: 'approveExpression',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'rejectExpression',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'mentions',
                internalType: 'address[]',
                type: 'address[]',
              },
              {
                name: 'votes',
                internalType: 'struct ActionVote[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'participant',
                    internalType: 'address',
                    type: 'address',
                  },
                  {
                    name: 'votedAt',
                    internalType: 'struct Types.Timestamp',
                    type: 'tuple',
                    components: [
                      { name: 'secs', internalType: 'uint64', type: 'uint64' },
                      { name: 'nanos', internalType: 'uint64', type: 'uint64' },
                    ],
                  },
                  {
                    name: 'voteType',
                    internalType: 'enum VoteType',
                    type: 'uint8',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'actionId', internalType: 'uint64', type: 'uint64' }],
    name: 'checkAction',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'definition', internalType: 'string', type: 'string' },
    ],
    name: 'newTemplate',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'actionId', internalType: 'uint64', type: 'uint64' }],
    name: 'revokeAction',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'templateId', internalType: 'uint64', type: 'uint64' }],
    name: 'templateById',
    outputs: [
      {
        name: 'response',
        internalType: 'struct TemplateByIdResponse',
        type: 'tuple',
        components: [
          {
            name: 'template',
            internalType: 'struct Template',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              { name: 'creator', internalType: 'address', type: 'address' },
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'expression', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pagination',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'creator', internalType: 'address', type: 'address' },
    ],
    name: 'templates',
    outputs: [
      {
        name: 'response',
        internalType: 'struct TemplatesResponse',
        type: 'tuple',
        components: [
          {
            name: 'pagination',
            internalType: 'struct Types.PageResponse',
            type: 'tuple',
            components: [
              { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
              { name: 'total', internalType: 'uint64', type: 'uint64' },
            ],
          },
          {
            name: 'templates',
            internalType: 'struct Template[]',
            type: 'tuple[]',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              { name: 'creator', internalType: 'address', type: 'address' },
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'expression', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'templateId', internalType: 'uint64', type: 'uint64' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'definition', internalType: 'string', type: 'string' },
    ],
    name: 'updateTemplate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'actionId', internalType: 'uint64', type: 'uint64' },
      { name: 'voteType', internalType: 'enum VoteType', type: 'uint8' },
    ],
    name: 'voteForAction',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IWarden
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iWardenAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'adminsCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'AddKeychainAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newWriter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'writersCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'AddKeychainWriter',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'spaceId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddSpaceOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
    ],
    name: 'FulfilSignRequest',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      { name: 'keyType', internalType: 'int32', type: 'int32', indexed: false },
      {
        name: 'spaceId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'keychainId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'approveTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'rejectTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'NewKey',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'spaceId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'keychainId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'approveTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'rejectTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      { name: 'keyType', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewKeyRequest',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewKeychain',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      { name: 'keyId', internalType: 'uint64', type: 'uint64', indexed: false },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewSignRequest',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'ownersCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'approveAdminTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'rejectAdminTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'approveSignTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'rejectSignTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'NewSpace',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
    ],
    name: 'RejectKeyRequest',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
    ],
    name: 'RejectSignRequest',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'keychainId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'admin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'adminsCount',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'RemoveKeychainAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'spaceId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'removedOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RemoveSpaceOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'approveTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'rejectTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'UpdateKey',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'keychainFees',
        internalType: 'struct KeychainFees',
        type: 'tuple',
        components: [
          {
            name: 'keyReq',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'sigReq',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'UpdateKeychain',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'space_id',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'approveAdminTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'rejectAdminTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'approveSignTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'rejectSignTemplateId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'UpdateSpace',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
      { name: 'newAdmin', internalType: 'address', type: 'address' },
    ],
    name: 'addKeychainAdmin',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
      { name: 'newWriter', internalType: 'address', type: 'address' },
    ],
    name: 'addKeychainWriter',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint64', type: 'uint64' },
      { name: 'actionTimeoutHeight', internalType: 'uint64', type: 'uint64' },
      {
        name: 'expectedApproveExpression',
        internalType: 'string',
        type: 'string',
      },
      {
        name: 'expectedRejectExpression',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'addSpaceOwner',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'deriveAddresses', internalType: 'int32[]', type: 'int32[]' },
    ],
    name: 'allKeys',
    outputs: [
      {
        name: 'keys',
        internalType: 'struct KeyResponse[]',
        type: 'tuple[]',
        components: [
          {
            name: 'key',
            internalType: 'struct Key',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
              { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
              { name: 'keyType', internalType: 'int32', type: 'int32' },
              { name: 'publicKey', internalType: 'bytes', type: 'bytes' },
              {
                name: 'approveTemplateId',
                internalType: 'uint64',
                type: 'uint64',
              },
              {
                name: 'rejectTemplateId',
                internalType: 'uint64',
                type: 'uint64',
              },
            ],
          },
          {
            name: 'addresses',
            internalType: 'struct AddressesResponse[]',
            type: 'tuple[]',
            components: [
              {
                name: 'addressValue',
                internalType: 'address',
                type: 'address',
              },
              { name: 'addressType', internalType: 'int32', type: 'int32' },
            ],
          },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct Types.PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint64', type: 'uint64' },
      { name: 'pubKey', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'fulfilKeyRequest',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint64', type: 'uint64' },
      { name: 'signedData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'fulfilSignRequest',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint64', type: 'uint64' },
      { name: 'deriveAddresses', internalType: 'int32[]', type: 'int32[]' },
    ],
    name: 'keyById',
    outputs: [
      {
        name: 'key',
        internalType: 'struct KeyResponse',
        type: 'tuple',
        components: [
          {
            name: 'key',
            internalType: 'struct Key',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
              { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
              { name: 'keyType', internalType: 'int32', type: 'int32' },
              { name: 'publicKey', internalType: 'bytes', type: 'bytes' },
              {
                name: 'approveTemplateId',
                internalType: 'uint64',
                type: 'uint64',
              },
              {
                name: 'rejectTemplateId',
                internalType: 'uint64',
                type: 'uint64',
              },
            ],
          },
          {
            name: 'addresses',
            internalType: 'struct AddressesResponse[]',
            type: 'tuple[]',
            components: [
              {
                name: 'addressValue',
                internalType: 'address',
                type: 'address',
              },
              { name: 'addressType', internalType: 'int32', type: 'int32' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint64', type: 'uint64' }],
    name: 'keyRequestById',
    outputs: [
      {
        name: 'keyRequest',
        internalType: 'struct KeyRequest',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
          { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
          { name: 'keyType', internalType: 'int32', type: 'int32' },
          { name: 'status', internalType: 'int32', type: 'int32' },
          { name: 'rejectReason', internalType: 'string', type: 'string' },
          { name: 'approveTemplateId', internalType: 'uint64', type: 'uint64' },
          { name: 'rejectTemplateId', internalType: 'uint64', type: 'uint64' },
          {
            name: 'deductedKeychainFees',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
      { name: 'status', internalType: 'int32', type: 'int32' },
      { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'keyRequests',
    outputs: [
      {
        name: 'keyRequests',
        internalType: 'struct KeyRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
          { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
          { name: 'keyType', internalType: 'int32', type: 'int32' },
          { name: 'status', internalType: 'int32', type: 'int32' },
          { name: 'rejectReason', internalType: 'string', type: 'string' },
          { name: 'approveTemplateId', internalType: 'uint64', type: 'uint64' },
          { name: 'rejectTemplateId', internalType: 'uint64', type: 'uint64' },
          {
            name: 'deductedKeychainFees',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct Types.PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint64', type: 'uint64' }],
    name: 'keychainById',
    outputs: [
      {
        name: 'keychain',
        internalType: 'struct Keychain',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'writers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'fees',
            internalType: 'struct KeychainFees',
            type: 'tuple',
            components: [
              {
                name: 'keyReq',
                internalType: 'struct Types.Coin[]',
                type: 'tuple[]',
                components: [
                  { name: 'denom', internalType: 'string', type: 'string' },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
              {
                name: 'sigReq',
                internalType: 'struct Types.Coin[]',
                type: 'tuple[]',
                components: [
                  { name: 'denom', internalType: 'string', type: 'string' },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
          { name: 'keybaseId', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'keychains',
    outputs: [
      {
        name: 'keychains',
        internalType: 'struct Keychain[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'writers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'fees',
            internalType: 'struct KeychainFees',
            type: 'tuple',
            components: [
              {
                name: 'keyReq',
                internalType: 'struct Types.Coin[]',
                type: 'tuple[]',
                components: [
                  { name: 'denom', internalType: 'string', type: 'string' },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
              {
                name: 'sigReq',
                internalType: 'struct Types.Coin[]',
                type: 'tuple[]',
                components: [
                  { name: 'denom', internalType: 'string', type: 'string' },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
          { name: 'keybaseId', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct Types.PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
      { name: 'deriveAddresses', internalType: 'int32[]', type: 'int32[]' },
    ],
    name: 'keysBySpaceId',
    outputs: [
      {
        name: 'keys',
        internalType: 'struct KeyResponse[]',
        type: 'tuple[]',
        components: [
          {
            name: 'key',
            internalType: 'struct Key',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
              { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
              { name: 'keyType', internalType: 'int32', type: 'int32' },
              { name: 'publicKey', internalType: 'bytes', type: 'bytes' },
              {
                name: 'approveTemplateId',
                internalType: 'uint64',
                type: 'uint64',
              },
              {
                name: 'rejectTemplateId',
                internalType: 'uint64',
                type: 'uint64',
              },
            ],
          },
          {
            name: 'addresses',
            internalType: 'struct AddressesResponse[]',
            type: 'tuple[]',
            components: [
              {
                name: 'addressValue',
                internalType: 'address',
                type: 'address',
              },
              { name: 'addressType', internalType: 'int32', type: 'int32' },
            ],
          },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct Types.PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
      { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
      { name: 'keyType', internalType: 'enum KeyType', type: 'uint8' },
      { name: 'approveTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'rejectTemplateId', internalType: 'uint64', type: 'uint64' },
      {
        name: 'maxKeychainFees',
        internalType: 'struct Types.Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'nonce', internalType: 'uint64', type: 'uint64' },
      { name: 'actionTimeoutHeight', internalType: 'uint64', type: 'uint64' },
      {
        name: 'expectedApproveExpression',
        internalType: 'string',
        type: 'string',
      },
      {
        name: 'expectedRejectExpression',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'newKeyRequest',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'keychainFees',
        internalType: 'struct KeychainFees',
        type: 'tuple',
        components: [
          {
            name: 'keyReq',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'sigReq',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'url', internalType: 'string', type: 'string' },
      { name: 'keybaseId', internalType: 'string', type: 'string' },
    ],
    name: 'newKeychain',
    outputs: [{ name: 'id', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keyId', internalType: 'uint64', type: 'uint64' },
      { name: 'input', internalType: 'bytes', type: 'bytes' },
      { name: 'analyzers', internalType: 'address[]', type: 'address[]' },
      { name: 'encryptionKey', internalType: 'bytes', type: 'bytes' },
      {
        name: 'maxKeychainFees',
        internalType: 'struct Types.Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'nonce', internalType: 'uint64', type: 'uint64' },
      { name: 'actionTimeoutHeight', internalType: 'uint64', type: 'uint64' },
      {
        name: 'expectedApproveExpression',
        internalType: 'string',
        type: 'string',
      },
      {
        name: 'expectedRejectExpression',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'newSignRequest',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'approveAdminTemplateId',
        internalType: 'uint64',
        type: 'uint64',
      },
      { name: 'rejectAdminTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'approveSignTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'rejectSignTemplateId', internalType: 'uint64', type: 'uint64' },
      {
        name: 'additionalOwners',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: 'newSpace',
    outputs: [{ name: 'id', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint64', type: 'uint64' },
      { name: 'rejectReason', internalType: 'string', type: 'string' },
    ],
    name: 'rejectKeyRequest',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint64', type: 'uint64' },
      { name: 'rejectReason', internalType: 'string', type: 'string' },
    ],
    name: 'rejectSignRequest',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'removeKeychainAdmin',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint64', type: 'uint64' },
      { name: 'actionTimeoutHeight', internalType: 'uint64', type: 'uint64' },
      {
        name: 'expectedApproveExpression',
        internalType: 'string',
        type: 'string',
      },
      {
        name: 'expectedRejectExpression',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'removeSpaceOwner',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint64', type: 'uint64' }],
    name: 'signRequestById',
    outputs: [
      {
        name: 'signRequest',
        internalType: 'struct SignRequest',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'keyId', internalType: 'uint64', type: 'uint64' },
          { name: 'dataForSigning', internalType: 'bytes', type: 'bytes' },
          { name: 'status', internalType: 'int32', type: 'int32' },
          { name: 'result', internalType: 'bytes', type: 'bytes' },
          { name: 'encryptionKey', internalType: 'bytes', type: 'bytes' },
          {
            name: 'deductedKeychainFees',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
      { name: 'status', internalType: 'int32', type: 'int32' },
    ],
    name: 'signRequests',
    outputs: [
      {
        name: 'signRequests',
        internalType: 'struct SignRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'keyId', internalType: 'uint64', type: 'uint64' },
          { name: 'dataForSigning', internalType: 'bytes', type: 'bytes' },
          { name: 'status', internalType: 'int32', type: 'int32' },
          { name: 'result', internalType: 'bytes', type: 'bytes' },
          { name: 'encryptionKey', internalType: 'bytes', type: 'bytes' },
          {
            name: 'deductedKeychainFees',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct Types.PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint64', type: 'uint64' }],
    name: 'spaceById',
    outputs: [
      {
        name: 'space',
        internalType: 'struct Space',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
          {
            name: 'approveAdminTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'rejectAdminTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'approveSignTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'rejectSignTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'spaces',
    outputs: [
      {
        name: 'spaces',
        internalType: 'struct Space[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
          {
            name: 'approveAdminTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'rejectAdminTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'approveSignTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'rejectSignTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct Types.PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct Types.PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'spacesByOwner',
    outputs: [
      {
        name: 'spaces',
        internalType: 'struct Space[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
          {
            name: 'approveAdminTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'rejectAdminTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'approveSignTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
          {
            name: 'rejectSignTemplateId',
            internalType: 'uint64',
            type: 'uint64',
          },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct Types.PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keyId', internalType: 'uint64', type: 'uint64' },
      { name: 'approveTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'rejectTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'actionTimeoutHeight', internalType: 'uint64', type: 'uint64' },
      {
        name: 'expectedApproveExpression',
        internalType: 'string',
        type: 'string',
      },
      {
        name: 'expectedRejectExpression',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'updateKey',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keychainId', internalType: 'uint64', type: 'uint64' },
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'keychainFees',
        internalType: 'struct KeychainFees',
        type: 'tuple',
        components: [
          {
            name: 'keyReq',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'sigReq',
            internalType: 'struct Types.Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'url', internalType: 'string', type: 'string' },
      { name: 'keybaseId', internalType: 'string', type: 'string' },
    ],
    name: 'updateKeychain',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spaceId', internalType: 'uint64', type: 'uint64' },
      { name: 'nonce', internalType: 'uint64', type: 'uint64' },
      {
        name: 'approveAdminTemplateId',
        internalType: 'uint64',
        type: 'uint64',
      },
      { name: 'rejectAdminTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'approveSignTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'rejectSignTemplateId', internalType: 'uint64', type: 'uint64' },
      { name: 'actionTimeoutHeight', internalType: 'uint64', type: 'uint64' },
      {
        name: 'expectedApproveExpression',
        internalType: 'string',
        type: 'string',
      },
      {
        name: 'expectedRejectExpression',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'updateSpace',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const
