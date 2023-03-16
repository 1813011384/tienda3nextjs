import ProductoCard from '../../components/ProductoCard.jsx';
import axios from 'axios';
import React, { useState } from 'react'
import styles from "../../styles/Productosdedetcat.module.css";
import Pagination from '../../components/Pagination.jsx';

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
                <h2>Filtros</h2>
                <div className={styles.filtro}>
                    <span>Rango de precios</span> <br />
                </div>
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
    const res = await axios.get("http://localhost:8800/api/productos/findbyidcat/" + params.id);//id es idcat

    return {
        props: {
            productosdedetcat: res.data
        }
    };
}