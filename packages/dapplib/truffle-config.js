require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember smile give argue obtain topple'; 
let testAccounts = [
"0x93879b9ce01dd3714f15f54091050c7e269d4869b8f11ad99c425d1d80c6b15e",
"0x0ee3794d20521d9b6e9f671c08d1d7bd2ff556133a908829fe67efc93e8e24ea",
"0x29581012a4b51270a64f27fbfc1960ab62f0140c0f84e1959dc5c5a5bb9e92f1",
"0x49a74d6526d9a566e5df29ad8dc5f0d7e1e997c99ff4d56fa4a2f830b2fa530e",
"0x32779f4d446a8eb7f4799de74028a94ae801ead6c44853196e8f18d518dba8c0",
"0x9b8932d5f81af9b0fc325bfd73852f45637c16f5f97e8954d200aceedd4568c6",
"0x4f622213fdc4a5f23f4f2a9da05a6e01180d2751ee27b03861eb7c3432809027",
"0x64a9cdd1c7692fd0f364f0f98f38edad7c49b1ff175943b074a237c0c137cf1a",
"0x4dd6c7678b98ee032d4bd8cabb700a30f424ba00decb58a2dc8e8ebb5edaa73b",
"0x6a014e0c18e4f8beedbc24472fa48989e8f530b75348b773d8480860bc963803"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

