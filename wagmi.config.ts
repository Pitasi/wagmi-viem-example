import { defineConfig } from '@wagmi/cli'
// change the path to your abi files here
import { abi as iwardenAbi } from '/Users/antonio/git/wardenprotocol/precompiles/warden/abi.json'
import { abi as iactAbi } from '/Users/antonio/git/wardenprotocol/precompiles/act/abi.json'

export default defineConfig({
    out: 'src/generated.ts',
    contracts: [
        {
            name: 'IWarden',
            abi: iwardenAbi as any,
        },
        {
            name: 'IAct',
            abi: iactAbi as any,
        },
    ],
    plugins: [],
})

