import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "../styles/Categorias.module.css";
import CategoriaCard from './CategoriaCard';

const Categorias = () => {

    const [categorias, setCategorias]= useState([]);

    useEffect(function(){
        const getcategorias= async function(){
            const res= await axios.get("http://localhost:8800/api/categorias");
            setCategorias(res.data);
        }
        getcategorias();
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {categorias.map(function(cat, key){
                return (
                    
                    <CategoriaCard key={key} categoria={cat}/>
                    
                );
            })}
        </div>
    </div>
  )
}

export default Categorias

