
import { Link } from '@mui/material';
import Card from '../Card';
import styles from './menu.module.css';
import { useState,useEffect } from 'react';


export default function Header() {
  
  
    return (
      <div className={styles.container}>
       
          <div className={styles.grid}>
            
            <Link href="/construction" className={styles.card}>
            <h3>Construção</h3>
            </Link>
  
            <Link href="/eletric" className={styles.card}>
              <h3>Elétrica</h3>
            </Link>
  
            <Link href="/hydraulics" className={styles.card}>
              <h3>Hidráulica</h3>
            </Link>
  
            <Link href="/cleaning" className={styles.card}>
              <h3>Limpeza</h3>
            </Link>

          </div>
       
      
       
  
       
      </div>
    )
  }