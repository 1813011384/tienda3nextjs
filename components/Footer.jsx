import Image from 'next/image';
import React from 'react'
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ubicacion}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d104996.53111137937!2d-77.04670116779599!3d-12.046484256266087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1simportaciones%20impacto!5e0!3m2!1ses-419!2spe!4v1678240700369!5m2!1ses-419!2spe" loading="lazy"></iframe>
      </div>
      <div className={styles.info}>
        <h2>Información de contacto</h2>
        <div> Lima, Perú </div>
        <div> Whatsapp: 987987125 </div>
        <div className={styles.paraimage}>
          <Image src="/img/card_img.png" alt='' fill/>
        </div>
      </div>
    </div>
  )
}

export default Footer