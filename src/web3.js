import Web3 from 'web3'

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  alert('Parece que no estás usando Metamask en tu navegador. Por favor considera instalarlo o usar algún navegador compatible como Brave si deseas realizar transacciones en ésta dApp.')
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/QRjWrCXcsKKVdj64UKr3')
  web3 = new Web3(provider)
}

export default web3
