import Web3 from 'web3'

const web3 = new Web3(window.web3)
var provider
if (web3.currentProvider) {
  provider = new Web3(web3.currentProvider)
} else {
  console.log('No web3? You should consider trying MetaMask!')
  provider = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

export default provider
