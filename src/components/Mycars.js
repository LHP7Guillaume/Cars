import React, { Component } from 'react' ;
import Cars from './Cars';

class Mycars extends Component {
    render(){

        console.log(this);

        return(
        <div>
        <h1>{this.props.title}</h1>
        <Cars color="red">Ford</Cars>
        <Cars color="">Mercedes</Cars>
        <Cars color="grey"></Cars>
</div>
)
    }
}

export default Mycars;