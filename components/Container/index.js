import styles from "./container.module.css"

import api from "../../pages/api/api"
import Card from "../../components/Card"
import { useState,useEffect } from 'react';


export default function Container({  }) {
  return (
    <div className={styles.container}>
        <img src="/banner3.png" width="1200px" alt="Vercel" className={styles.logo} />
    
    </div>
    
  );
}



