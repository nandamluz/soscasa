import styles from "./construction.module.css"

import Card from "../../components/Card"
import { useState,useEffect } from 'react';
import Link from 'next/link';


export default function Construction({ workers }) {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Link href="/" className={styles.back}>
          <img src="back.png" alt="voltar" width="38px" height="38px" />        
        </Link>
        <h1> Construção </h1>
      </div>
      <div className={styles.wraper}>
        {workers.map((worker) => (
          <Card key={worker.id} {...worker} />
        ))}
      </div>
    </div>
  );
}


/* 
export const getStaticProps = async () => {
  const {data} = await api.get("/workers?category=Construcao");
  return {
    props: {
      workers:data
    },
    revalidate: 30,
  };
};
 */