import React from 'react' ;

const Cars = ({children, color}) => {

const colorInfo = color ? (<p>Couleurs : { color } </p>) : (<p>Couleurs : Néant </p>) ;

    return(
        <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
    <p>Marque : { children } </p>

    {/* <p>Couleurs : { color } </p> */}
{/* la balise <p></p> est remplacé par la constante colorInfo que je recupere avec la balise cidessous */}
    { colorInfo}

        </div>  
  )
}

export default Cars;