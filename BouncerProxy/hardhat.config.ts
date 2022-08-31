import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';

import { HardhatUserConfig } from 'hardhat/config';

/* This loads the variables in your .env file to `process.env` */

const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.0',
  networks: {
    
    matic: {
        url: "https://polygon-mumbai.g.alchemy.com/v2/v_Z8QruJ0ttOvj4oGucfgvCtomT1lYOj",
        accounts: ["0x5df0643fb0a194644d5bf6148d3ef809e4904e22408c362a853cc4553ff40d7e"]
    }
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;