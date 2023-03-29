import React from 'react'
import styles from "../styles/Mensajealreazliarpago.module.css";
import { useRouter } from 'next/router';

const Mensajealrealizarpago = ({ display }) => {

    const Router= useRouter();
    
    const handleClick= function(){
        Router.push("/");
    }
    
    return (
        <div style={{ display: display? "flex": "none" }} className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Mensaje</h2>
                <div className={styles.paramsj}>
                    Se realizó el pago correctamente, nos pondremos en contacto a través de Whatsapp.
                </div>
                <button onClick={handleClick}>Aceptar</button>
            </div>
        </div>
    )
}

export default Mensajealrealizarpago