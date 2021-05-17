# The Token Creator

### Install node modules
```
npm install
```

### Set environment variables
Create `.env` file and add your mnemonic.
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

Open console
```
truffle console --network rinkeby
```

And run
```
myToken = await MyToken.deployed()
myToken.mint("YOUR_ADDRESS", "100000000000000000000")
```
