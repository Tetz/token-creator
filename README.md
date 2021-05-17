# The Token Creator

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

### Mint tokens
```
truffle console --network rinkeby
myToken.mint("YOUR_ADDRESS", "100000000000000000000")
```
