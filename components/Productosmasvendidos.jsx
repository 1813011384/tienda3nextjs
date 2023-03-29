
import React from 'react'
import styles from "../styles/Productosmasvendidos.module.css";
import ProductoCard from './ProductoCard.jsx';

const Productosmasvendidos = ({productos}) => {

    
    
  return (
    <div className={styles.container}>
      <h2>Algunos de nuestros productos</h2>
      <div className={styles.container2}>
        {productos.map(function(p, index){
              return (
                  <ProductoCard key={index} producto={p}/>
              );
          })}
      </div>
        
    </div>
  )
}

export default Productosmasvendidos

