require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan response range proof grace muscle army gentle'; 
let testAccounts = [
"0x4b0566105cee7c4e702f98ed4681297af18f06f26c88ec7d0637f9f168c60afb",
"0xf859d3392b1df7c908e2db051e4b932328dc054d1eb7fae2622841fb2cc5fb8c",
"0xb2b05f855fd86364864967c7ded3bddf4d10c167a3b4df28dab221dbbb4d3fda",
"0x1ad1703469d6d93426a63afa41aaa942e2f2017f2fc735a597faf76d4cb6bdad",
"0xf17b06b415b0fc39bebee00271cacf24a2e384ebe6310b4ddab4ad5ee0b60585",
"0xf04c7ffa0a49c611adbd4925fd490a47e6730c16033897ae61d81e81602846a4",
"0x4b1cb814d5b0b81c9016f7026bef9c74bfc3acb50d0c30003a0625f44189a745",
"0x6dde5a70b20b9e25d5acfb10236790242aa97aabbdbaab78dda665aeaee90848",
"0x240533a88be45429534c3b89a9aa4cbdf9ccba2d40821b1677b9f9675a7c2b4d",
"0xf6b1053f0811368727bf2286ad9b9be697570532626de06157b315f461735e8f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

