import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useRouter } from "next/router";
import { useState,useEffect } from 'react';
/* import api from "../pages/api/reviews/find"
 */import styles from "./home.module.css";
import Container from "../components/Container";
import Card from "../components/Card";

import api from "../pages/api/reviews/find"
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getStaticProps = async () => {
  const reviews = await prisma.review.findMany()
  console.log("reviews",reviews)
  return {
    props: {
      reviews
    },
    revalidate: 30,
  };
};
export default function Home(workers) {
  
  
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
