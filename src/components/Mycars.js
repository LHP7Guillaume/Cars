import React, { Component } from 'react' ;
import Cars from './Cars';
import MyHeader from './MyHeader';
import Wrappers from './Wrapper';


class Mycars extends Component {
    render(){

        console.log(this);

        return(
        <div>
        <Wrappers>
                <MyHeader myStyle={this.props.color}>
                    {this.props.title}
                </MyHeader>
        </Wrappers>

        <Cars color="red">Ford</Cars>
        <Cars color="bleu">Mercedes</Cars>
        <Cars color="grey">volvo</Cars>


</div>
)
    }
}

export default Mycars;