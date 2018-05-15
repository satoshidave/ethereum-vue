import Web3 from 'web3'

var web3
const web3Instance = new Web3(window.web3)
if (web3Instance.currentProvider !== null) {
  web3 = new Web3(window.web3.currentProvider)
} else {
  console.log('web3 no está instalado.')
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

export default web3
