import Web3 from 'web3'

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  alert(`Seems that you aren't using Metamask in your browser. Please consider install it or to use some compatible browser as Brave if you wish to do transactions in this dApp.`)
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/QRjWrCXcsKKVdj64UKr3')
  web3 = new Web3(provider)
}

export default web3
