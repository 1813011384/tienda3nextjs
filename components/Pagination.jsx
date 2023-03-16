import Link from 'next/link';
import React from 'react'
import styles from "../styles/Pagination.module.css";


const Pagination = ({ ntotalitems, itemsperpage, paginate }) => {

    const pagesquantity= Math.ceil(ntotalitems/itemsperpage);
    //console.log(cantidaddepaginas);
    let pagenumbers=[];

    for(let i=1; i<=pagesquantity; i++){
        pagenumbers.push(i);
    }

  return (
    <div className={styles.container}>
        {pagenumbers.map(  function(pagenumber, key){
            return (
                <button key={key}  onClick={function(){ paginate(pagenumber) }}> {pagenumber} </button>
            );
        })}
    </div>
  )
}

export default Pagination