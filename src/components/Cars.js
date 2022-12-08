import React from 'react' ;
import Wrappers from './Wrapper';

const Cars = ({children, color}) => {

let colorInfo = "";
if (color){
    colorInfo = color;
} else {
    colorInfo = "Néant";
}

// const colorInfo = color ? color : "Néant" ;


return children && (

    <Wrappers>
    <p>Marque : { children }</p>
    <p>Couleur : { colorInfo }</p>
    </Wrappers>
)
    
}

export default Cars;