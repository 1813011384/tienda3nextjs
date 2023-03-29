import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import styles from "../../styles/Iniciarsesion.module.css";
import Router from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addusuariopersonaactual } from '@/redux/userSlice';
import { apiurl } from '../../utils/apiurl';

const Iniciarsesion = () => {

    const dispatch= useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit= async function(e){
    e.preventDefault();
    const res= await axios.post(apiurl+"/api/auth/login", { email: email, password: password }, { withCredentials:true });
    console.log(res.data);
    dispatch(addusuariopersonaactual( res.data ));
    Router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.paradibujo}>
          <Image src="/img/login.svg" alt='' fill />
        </div>
        <div className={styles.formbox}>
          <form onSubmit={handleSubmit}>
            <input type="email" required placeholder='Email' onChange={function (e) { setEmail(e.target.value) }} />
            <input type="password" required minLength="5" placeholder='Password' onChange={function (e) { setPassword(e.target.value) }} />
            <input type="submit" value="Login" />
          </form>
          <Link href="#" passHref>Olvidé mi contraseña</Link>
          <Link className={styles.crearcuenta} href="/iniciarsesionycrearcuenta/Crearcuenta" passHref>Crearcuenta</Link>
        </div>
      </div>
    </div>
  )
}

export default Iniciarsesion