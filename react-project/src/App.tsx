import { Component } from 'react';
import './App.css';
import Contador from './components/Contador';

export default class App extends Component{
  render(){
    return(
      <div className="App">
        <Contador valorInicial={9876} />
        <Contador />
      </div>
    )
  }
}