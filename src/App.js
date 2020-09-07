import React,{Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import './App.css';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";


class App extends Component {
  render() {
    return (
      <Router exact path="/">
        
        <div className="App">

        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}


export default App;
