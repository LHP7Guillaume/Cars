import React from 'react' ;
import Wrappers from './Wrapper';

const Cars = ({children, color}) => {

let colorInfo = "";
if (color){
    colorInfo = color;
} else {
    colorInfo = "Néant";
}

return children && (

    <Wrappers>
    <p>Marque : { children }</p>
    <p>Couleur : { colorInfo }</p>
    </Wrappers>
)
    
}

export default Cars;