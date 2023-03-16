import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import styles from "../styles/CategoriaCard.module.css";

const CategoriaCard = ({categoria}) => {
  return (
    <Link className={styles.container} href={"/productosdedetcat/"+categoria._id} passHref>
        <div className={styles.paraimagen}> <Image src={"/img/"+categoria.imagen} alt="" fill/> </div>
        <div className={styles.categoria}>
            {categoria.categoria}
        </div>
    </Link>
  )
}

export default CategoriaCard