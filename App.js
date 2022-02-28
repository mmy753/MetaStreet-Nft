import React, { useEffect,useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import './App.css'
import {Navbar, Container, Nav,Button} from 'react-bootstrap'
function App() {
  const [walletAddress, setwalletAddress] = useState(null)
  const [nfts, setNfts] = useState([])
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setwalletAddress(accounts[0])

    }
  }
  const getNFTdata = async () => {
    if(!walletAddress) return;
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`);
    const data = await response.json();
    
    setNfts(data.items)

  }
  useEffect(() => {
    getNFTdata()
  
 
  }, [walletAddress])
  return (
    <>

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav>
      <Button variant="outline-secondary" className='justify-content-center' onClick={connectWallet}>Connect Wallet</Button>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

    <h3 className='text-center mt-3'>Public Key : {walletAddress}</h3>
    <Home nfts={nfts}/>
    </>
  );
}

export default App;
