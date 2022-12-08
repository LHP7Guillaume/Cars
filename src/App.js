import React, { Component } from 'react' ;
import Mycars from './components/Mycars';
import Cars from './components/Cars';
import './App.css';

class App extends Component {


  state = {
    titre: 'Mon catalogue de voitures'
  }

  changeTitle = (a) => {

    this.setState({
      titre: 'mon nouveau titre'
    })
  }


  changeViaParam = (titre) => {
    this.setState({
      titre
    })
  }

  render(){

    return (
      <div className="App">
        <Mycars title={this.state.titre}/>

        <button onClick={this.changeTitle}> Changer le nom du titre </button>
        <button onClick={() => this.changeViaParam('titre via un parametre')}> titre via para </button>
      </div>
    );

  }
  
}

export default App;
