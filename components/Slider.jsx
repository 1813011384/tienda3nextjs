import Image from 'next/image';
import React, { useState } from 'react'
import styles from "../styles/Slider.module.css";

const Slider = () => {

    const images = [
        "laptopswallpaper1.jpg",
        "laptopswallpaper2.jpg",
        "laptopswallpaper3.jpg",
        "laptopswallpaper4.jpg"
    ];

    const [n, setN]= useState(0);

    const paraizq= function(){
        if(n!=0){
            setN(n+1);
        }
        
    }

    const parader= function(){
        if(n!=-3){
            setN(n-1);
        }
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.slides} style={ {left: n*100+"vw"} }>
                {images.map(function (image, index) {
                    return (
                        <div className={styles.slide} key={index}><Image src={`/img/laptopswallpaper${index + 1}.jpg`} alt='' fill /></div>
                    );
                })}
                
            </div>
            <div className={styles.left} onClick={paraizq}><ion-icon name="arrow-back-outline"></ion-icon></div>
            <div className={styles.right} onClick={parader}><ion-icon name="arrow-forward-outline"></ion-icon></div>
        </div>
    )
}

export default Slider