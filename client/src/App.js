import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
require('react-dom')
window.React2 = require('react')

function App() {
  console.log(window.React1 === window.react2)
  return (
    <div>
      Welcome to ImageForge
    </div>
  );
}

export default App;
