import { iWardenAbi } from './src/generated.ts';
import { createPublicClient, createWalletClient, getContract, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

const chain = {
    id: 1337,
    name: 'Local',
    rpcUrls: {
        default: {
            http: ['http://localhost:8545'],
        },
    },
    nativeCurrency: {
        name: "WARD",
        symbol: "WARD",
        decimals: 18,
    }
}

const transport = http('http://localhost:8545')

// load account directly from private key
const account = privateKeyToAccount('0xba4ce04e9390b2011960bf2ac71977861145ff9bb90137a3f3c56bc722e972f5')

const client = createWalletClient({
    account,
    chain,
    transport,
})

const contract = getContract({
    address: '0x0000000000000000000000000000000000000900',
    abi: iWardenAbi,
    client,
})

const publicClient = createPublicClient({
    chain,
    transport,
})

async function main() {
    const height = await publicClient.getBlockNumber()
    console.log("height", height)

    const res = await contract.read.spaces([{
        key: "0x0",
        limit: BigInt(10),
        offset: BigInt(0),
        reverse: false,
        countTotal: false,
    }]);
    console.log(res)
}

main()

