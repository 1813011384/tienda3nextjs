import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from "../styles/Navbar.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { agregarelementoalcarrito, vaciarelcarrito } from '../redux/carritoSlice.js';
import { addusuariopersonaactual, vaciarusuariopersonaactual } from '@/redux/userSlice';
import axios from 'axios';
import { useRouter } from 'next/router';
import Categorias from './Categorias';
import { apiurl } from '@/utils/apiurl';


const Navbar = () => {

  const dispatch= useDispatch();
  const router= useRouter();

  const carrito = useSelector(function (state) { return state.carrito.carrito });

  const usuariopersonaactual = useSelector(function (state) { return state.user.usuariopersonaactual });

  const handleCerrarsesion= async function(){
    const res= await axios.post(apiurl+"/api/auth/logout");
    dispatch(vaciarusuariopersonaactual());
    router.push("/");
  }
  
  const [display, setDisplay]= useState(false);

  return (
    <div className={styles.container}>
      <div style={ {display: display? "block": "none"} } className={styles.dropdowncategorias}>
        <Categorias/>
      </div>
      
      <div className={styles.items}>
      <div className={styles.item}>
        <ion-icon name="logo-whatsapp"></ion-icon>
        <div className={styles.wspnumber}>987987125</div>
      </div>
      <div className={styles.item}>
        <Link href="/" passHref><Image src="/img/impacto.png" alt='' width="180" height="70" /> </Link>
        <Link href="/" passHref>Inicio</Link>
        
        <div className={styles.btndropdowncategorias} onClick={ function(){ setDisplay( function(prevdisplay){ return !prevdisplay } ); } }>
          Categorias
        </div>
        
        
        
        {usuariopersonaactual ? (
          <div className={styles.d}>
            <div id='btnparadropdown' className={styles.btnparadropdown}>
              {usuariopersonaactual.imagen? (<Image src={usuariopersonaactual.imagen} width="40" height="40" style={ {objectFit: "cover", borderRadius: "50%"} }/>):(<ion-icon name="person-outline"></ion-icon>)}
              
              <div id="dropdown" className={styles.dropdown}>
              <div> {usuariopersonaactual.nombres + " " +usuariopersonaactual.apellidos} </div>
              <div> {usuariopersonaactual.email} </div>
              <div>Telefono: {usuariopersonaactual.telefono} </div>
              <div> <button onClick={handleCerrarsesion}>Cerrar sesion</button> </div>
              </div>
            </div>

            
            
          </div>

        ) : (
          <>
          <Link href="/iniciarsesionycrearcuenta/Iniciarsesion" passHref>Iniciar sesion</Link>
          <Link href="/iniciarsesionycrearcuenta/Crearcuenta" passHref>Crear cuenta</Link>
          </>
        )}

      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/carrito" passHref><ion-icon name="cart-outline"></ion-icon></Link>

          <div className={styles.number}> {carrito.length} </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar