import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useRouter } from "next/router";
import { useState,useEffect } from 'react';
import api from "../pages/api/api"

import styles from "./home.module.css";
import Container from "../components/Container";
import Card from "../components/Card";

export default function Home() {
  const [workers, setWorkers] = useState([]);
  
 
  
  useEffect(() => {
    loadWorkers();
  }, []);
  
  async function loadWorkers() {
    const listworkers = await api.get("/workers"); 
    
    setWorkers(listworkers.data);
  } 

  
  return (
    <div className={styles.container}>
      <Head>
        <title>SOS Casa</title>
        <link rel="icon" href="/simbolo.png" />
      </Head>
      
      <main>
        <div className={styles.container2}>
          <Header></Header>
          <Menu></Menu>
          <Container></Container>
          
           
        </div>
        
      </main>
      <div className={styles.container3}>
          {workers.map((worker) => (
            
            <Card key={worker.id} {...worker} />
          ))}
        
      </div>

     
      
    </div>
  );
}
