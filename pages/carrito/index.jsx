import React from 'react'
import styles from "../../styles/Carrito.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { agregarelementoalcarrito, vaciarelcarrito, disminuircantidaddeedcarrito, incrementarcantidaddeedcarrito, eliminarelementoalcarrito } from '../../redux/carritoSlice';
import Image from 'next/image';
import axios from 'axios';
import { apiurl } from '../../utils/apiurl';
import { useRouter } from 'next/router';

const Index = () => {

    const dispatch= useDispatch();

    const carrito= useSelector(function(state){ return state.carrito.carrito });
    const usupersoactual= useSelector(function(state){ return state.user.usuariopersonaactual });

    const handleVaciarcarrito= function(){
        dispatch(vaciarelcarrito());
    }
    
    let total=0;
    
    carrito.forEach(element => {
        total+= element.cantidad * element.precio;
    });

    const Router= useRouter();

    const realizarcompra= async function(){

        if(usupersoactual){
            /*const res= await axios.post(apiurl+"/api/pasareladepago/realizarcompra", { carrito: carrito, usupersoactual: usupersoactual  });
        //console.log(res);

        dispatch(vaciarelcarrito());*/

        Router.push("/realizarpago");
        }else{
            Router.push("/iniciarsesionycrearcuenta/Iniciarsesion");
        }
        
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <table>
            <thead>
                <tr>
                    <td>IMAGEN</td>
                    <td>PRODUCTO</td>
                    <td>CANTIDAD</td>
                    <td>PRECIO</td>
                    <td>SUBTOTAL</td>
                    <td>ACCIÓN</td>
                </tr>
            </thead>
            <tbody>
                { carrito.map( function(edc, key){
                    return (
                        <tr key={key}>
                            <td> <Image src={"/img/"+edc.imagen} alt="" width="100" height="100" /> </td>
                            <td> {edc.nombre} </td>
                            <td> <button onClick={function(){ dispatch(disminuircantidaddeedcarrito(edc._id)); }}>-</button> {edc.cantidad} <button onClick={function(){ dispatch(incrementarcantidaddeedcarrito(edc._id)); }}>+</button></td>
                            <td> {edc.precio} </td>
                            <td> {edc.cantidad * edc.precio} </td>
                            <td> <button className={styles.btneliminar} onClick={ function(){ dispatch(eliminarelementoalcarrito(edc._id)); } }>Eliminar</button> </td>
                        </tr>
                    );
                } ) }
            </tbody>
        </table>
        </div>
        <div className={styles.total}>Total: S/ {total} </div>
        <button onClick={handleVaciarcarrito} className={styles.vaciarcarrito} >Vaciar carrito</button> <br />
        <button className={styles.realizarcompra} onClick={realizarcompra}>Realizar compra</button>
    </div>
  )
}

export default Index