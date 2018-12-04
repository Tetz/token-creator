# ERC20 Tokens Example

### Install node modules
```
npm install
```

### Set environment variables
vim .env
```
MAINNET_MNEMONIC="aquaman superman batman shazam flash wonderwoman ..."
RINKEBY_MNEMONIC="aquaman superman batman shazam flash wonderwoman ..."
ROPSTEN_MNEMONIC="aquaman superman batman shazam flash wonderwoman ..."
```

### Build and Deploy to TestNet
```
truffle compile
truffle deploy --network rinkeby
```
Or just run
```
./bin/gen_token
```
