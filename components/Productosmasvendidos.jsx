
import React from 'react'
import styles from "../styles/Productosmasvendidos.module.css";
import ProductoCard from './ProductoCard.jsx';

const Productosmasvendidos = ({productos}) => {

    
    
  return (
    <div className={styles.container}>
        {productos.map(function(p, index){
            return (
                <ProductoCard key={index} producto={p}/>
            );
        })}
    </div>
  )
}

export default Productosmasvendidos

