import React, { Component } from 'react' ;
import Mycars from './components/Mycars';
import Cars from './components/Cars';
import './App.css';

class App extends Component {



  state = {
    titre: 'Mon catalogue de voitures'
  }

  render(){

    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
        
      </div>
    );

  }
  
}

export default App;
