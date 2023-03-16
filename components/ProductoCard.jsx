import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import styles from "../styles/ProductoCard.module.css";

const ProductoCard = ({producto}) => {

  return (
    <div className={styles.card}>
        <div className={styles.imagen}> <Link href={"/producto/"+producto._id}> <Image src={"/img/"+producto.imagen} alt="" fill/> </Link> </div>
        <div className={styles.title}>{producto.nombre}</div>
        <div className={styles.precio}>Precio: S/{producto.precio}</div>
        <Link className={styles.verdetalle} href={"/producto/"+producto._id} passHref> Ver detalle </Link> 
    </div>
  )
}

export default ProductoCard