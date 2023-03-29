import React, { useState } from 'react'
import styles from '@/styles/Realizarpago.module.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { apiurl } from '@/utils/apiurl';
import { useRouter } from 'next/router';
import { vaciarelcarrito } from '@/redux/carritoSlice';
import Mensajealrealizarpago from '@/components/Mensajealrealizarpago';

const Index = () => {

    const dispatch= useDispatch();

    const carrito= useSelector(function(state){ return state.carrito.carrito });
    const usupersoactual= useSelector(function(state){ return state.user.usuariopersonaactual });


    const [ndtarjeta,setNdtarjeta]= useState("");
    const [mesdee,setMesdee]= useState();
    const [aniodee,setAniodee]= useState();
    const [cvv,setCvv]= useState();
    const [titular,setTitular]= useState("");
    const [departamento,setDepartamento]= useState("");
    const [distrito,setDistrito]= useState("");

    const Router= useRouter();

    const handleSubmit= async function(e){
        e.preventDefault();

        try {
            const res= await axios.post(apiurl+"/api/pasareladepago/realizarcompra", { carrito: carrito, usupersoactual: usupersoactual  });

            dispatch(vaciarelcarrito());

            setMostrarmodal(true);
        } catch (error) {
            console.log(error)
        }

    }

    const [mostrarmodal, setMostrarmodal]= useState(false);

  return (
    <div className={styles.container}>
        <form onSubmit={ handleSubmit }>
            <input type="number" minLength="16" className={styles.w100} placeholder='Numero de tarjeta' required onClick={ function(e){ setNdtarjeta(e.target.value) } }/>
            <input type="number" minLength="2" className={styles.w33}  placeholder='Mes de expiración' required onClick={ function(e){ setMesdee(e.target.value) } }/>
            <input type="number" minLength="2" className={styles.w33}  placeholder='Año de expiración' required onClick={ function(e){ setAniodee(e.target.value) } }/>
            <input type="number" minLength="3" className={styles.w33}  placeholder='CVV' required onClick={ function(e){ setCvv(e.target.value) } }/>
            <input type="text" minLength="2" className={styles.w100}  placeholder='Nombres y apellidos del titular de la tarjeta' required onClick={ function(e){ setTitular(e.target.value) } }/>
            <input type="text" className={styles.w50}  placeholder='Departamento' required onClick={ function(e){ setDepartamento(e.target.value) } }/>
            <input type="text" className={styles.w50}  placeholder='Distrito' required onClick={ function(e){ setDistrito(e.target.value) } }/>
            <input type="submit" className={styles.w100}  value="Pagar" />
        </form>
        <Mensajealrealizarpago display={ mostrarmodal }/>
    </div>
  )
}

export default Index