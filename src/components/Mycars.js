import React, { Component } from 'react' ;
import Cars from './Cars';

class Mycars extends Component {
    render(){
        return(
        <div>
        <h1>Hello React</h1>
        <Cars color="red">Ford</Cars>
        <Cars color="blue">Mercedes</Cars>
        <Cars color="grey">Volvo</Cars>
</div>
)
    }
}

export default Mycars;