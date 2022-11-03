import React from 'react' ;

const Cars = ({children, color}) => {



    return(
        <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
    <p>Marque : { children } </p>
    <p>Couleurs : { color } </p>
        </div>  
  )
}

export default Cars;