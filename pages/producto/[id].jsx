import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import styles from "../../styles/Producto.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { agregarelementoalcarrito, vaciarelcarrito } from '../../redux/carritoSlice';

const Producto = ({ prod }) => {

    const [cant, setCant]= useState(1);
    const dispatch= useDispatch();
    const handleagregaralc= function(){
        console.log(cant);
        console.log(cant*prod.precio);
        dispatch(agregarelementoalcarrito( { ...prod, cantidad: cant } ));
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.imagen}> <Image src={"/img/"+prod.imagen} alt="" width="500" height="380"/> </div>
        <div className={styles.info}>
            <div className={styles.nombre}> {prod.nombre} </div>
            <div className={styles.desc}>
                <div>Descripción:</div> <br />
                 {prod.desc.split("-").map(function(d, key){
                    return (<div key={key}> {d} </div>);
                })} 
            </div>
            <div className={styles.precio}>Precio: S/{prod.precio} </div>
            
            <div className={styles.boxcantidad}>
                Cantidad: <input type="number" defaultValue="1" min="1" onChange={ function(e){ setCant(e.target.value) } }/>
            </div>
            <button onClick={handleagregaralc} className={styles.btnagregaralc}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default Producto

export const getServerSideProps = async function({ params }){
    //console.log(params);
    const res= await axios.get("http://localhost:8800/api/productos/find/"+params.id);
  
    return {
        props: {
            prod: res.data
        }
    };
  }