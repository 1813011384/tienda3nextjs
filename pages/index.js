
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider.jsx';
import Productosmasvendidos from '../components/Productosmasvendidos.jsx';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ productos }) {

  

  return (
    <div className={styles.container}>
      <Slider/>
      <Productosmasvendidos productos={productos}/>
    </div>
  )
}

export const getServerSideProps = async function(){
  const res= await axios.get("http://localhost:8800/api/productos?n=6");

  return {
      props: {
          productos: res.data,
      }
  };
}
