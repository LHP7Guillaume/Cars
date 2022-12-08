import React, { Component } from 'react' ;
import Cars from './Cars';
import MyHeader from './MyHeader';
import Wrappers from './Wrapper';


  

class Mycars extends Component {

    noCopy = () => {
        alert('Va te toucher ailleur tete de mort');
      }

      addStyle = (e) => {

        if(e.target.classList.contains('styled')){
        e.target.classList.remove('styled');
      }  else {
        e.target.classList.add('styled');
      }
    }

    render(){

        console.log(this);

        return(
        <div>
         {/* <Wrappers>
                <MyHeader myStyle={this.props.color}>
                    {this.props.title}
                </MyHeader>
        </Wrappers>  */}

        <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

        <p onCopy={this.noCopy}>Copie ce texte</p>

        <Cars color="red">Ford</Cars>
        <Cars color="bleu">Seat</Cars>
        <Cars color="grey">volvo</Cars>


</div>
)
    }
}

export default Mycars;