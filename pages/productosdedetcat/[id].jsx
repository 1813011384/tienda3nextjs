import ProductoCard from '../../components/ProductoCard.jsx';
import axios from 'axios';
import React, { useState } from 'react'
import styles from "../../styles/Productosdedetcat.module.css";
import Pagination from '../../components/Pagination.jsx';
import { apiurl } from '../../utils/apiurl.js';
import Image from 'next/image.js';

const Productosdedetcat = ({ productosdedetcat }) => {

    const [precio, setPrecio] = useState();

    const [currentpage, setCurrentpage] = useState(1);
    const [itemsperpage, setItemsperpage] = useState(6);

    const final = currentpage * itemsperpage;
    const inicial = final - itemsperpage;
    const items = productosdedetcat.slice(inicial, final);

    const paginate = function (pnumber) {
        setCurrentpage(pnumber);
    }

    return (
        <div className={styles.container}>
            <div className={styles.filtros}>
                <Image src="/img/ii2v.png" width="200" height="790" alt=''/>
            </div>
            <div className={styles.pddcyp}>
                <div className={styles.productosdedetcat}>
                    {items.map(function (p, key) {
                        return (
                            <ProductoCard key={key} producto={p} />
                        );
                    })}
                </div>
                <Pagination ntotalitems={productosdedetcat.length} itemsperpage={itemsperpage} paginate={paginate} />
            </div>
        </div>
    )
}

export default Productosdedetcat

export const getServerSideProps = async function ({ params }) {
    //console.log(params);
    const res = await axios.get(apiurl+"/api/productos/findbyidcat/" + params.id);//id es idcat

    return {
        props: {
            productosdedetcat: res.data
        }
    };
}