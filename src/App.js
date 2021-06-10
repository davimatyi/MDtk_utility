import logo from './assets/logo.svg';
import './style/theme.scss'
import './style/App.css';
import {Button} from 'react-bootstrap';
import bootstrap from 'bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">MDtk Companion</h1>
      </header>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" >Action</a>
          <a className="dropdown-item" >Another action</a>
          <a className="dropdown-item" >Something else here</a>
        </div>
      </div>
      <button className="btn btn-danger">Large OOF</button>
    </div>
  );

}

export default App;
