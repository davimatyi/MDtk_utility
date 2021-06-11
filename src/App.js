import logo from './assets/logo.svg';
import './style/theme.scss'
import './style/App.css';
import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';

const App = () => (
  <div className="App">
    <header className="App-header" fixed="top">
      <MenuBar />
    </header>
    <main>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Serial Port
        </Dropdown.Toggle>
        <Dropdown.Menu id="comportDropdown" onClick="updatePortsList()">
          
        </Dropdown.Menu>
      </Dropdown>
    </main>
  </div>
);


const MenuBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <img src={logo} className="App-logo" alt="logo" />
      <span className="h2">MDtk</span>
    </Navbar.Brand>
    <Navbar.Toggle id="basic-navbar-nav" />
    <Nav className="mr-auto">
      <Nav.Link href="#">Keybindings</Nav.Link>
      <Nav.Link href="#">Macro</Nav.Link>
      <Nav.Link href="#">Settings</Nav.Link>
    </Nav>
  </Navbar>
);





export default App;
