import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState } from 'react'
import styles from "../../styles/Crearcuenta.module.css";
import { apiurl } from '../../utils/apiurl';

const Crearcuenta = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [file, setFile] = useState("");

  const Router= useRouter();

  const handleSubmit= async function(e){
    e.preventDefault();

    const data= new FormData();
    data.append("file", file);
    data.append("upload_preset", "iiusers");

    const r= await axios.post("https://api.cloudinary.com/v1_1/diwqlhqdt/image/upload", data);
    console.log(r.data.url);
    const url= r.data.url;

    const re= await axios.get(apiurl+"/api/roles");
    const roles= re.data;
    let rolcliente={};
    roles.map(function(rol, k){
      if(rol.rol=="Cliente"){
        rolcliente=rol;
      }
    });
    
    const res= await axios.post(apiurl+"/api/auth/register", {email: email, password: password, nombres: nombres, apellidos: apellidos, telefono: telefono, imagen: url, idrol: rolcliente._id});
    console.log(res.data);
    alert("El usuario se ha creado correctamente.");
    Router.push("/iniciarsesionycrearcuenta/Iniciarsesion");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.paradibujo}>
          <Image src="/img/signup.svg" alt='' fill />
        </div>
        <div className={styles.formbox}>
          <form onSubmit={handleSubmit}>
            <input type="text" required placeholder='Nombres' onChange={function (e) { setNombres(e.target.value) }} />
            <input type="text" required placeholder='Apellidos' onChange={function (e) { setApellidos(e.target.value) }} />
            <input type="text" required placeholder='Telefono' onChange={function (e) { setTelefono(e.target.value) }} />
            <input type="file" onChange={ function(e){ setFile(e.target.files[0]) } }/>
            <input type="email" required placeholder='Email' onChange={function (e) { setEmail(e.target.value) }} />
            <input type="password" required minLength="5" placeholder='Password' onChange={function (e) { setPassword(e.target.value) }} />
            <input type="submit" value="Crear cuenta" />
          </form>
          <Link href="/iniciarsesionycrearcuenta/Iniciarsesion" passHref>Iniciar sesion</Link>
        </div>
      </div>
    </div>
  )
}

export default Crearcuenta