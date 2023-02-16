import styles from "./create.module.css"
import Link from 'next/link';
import { useState } from 'react';
import InputMask from "../../components/InputPhone";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { useRouter } from "next/router";

import axios from "axios";

/* import Maxwidthcopy from"../../components/Maxwidthcopy/maxwidth";
 */





const Create = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [abstract, setAbstract] = useState("");
  const [category, setCategory] = useState("");
  const route = useRouter();


  
  async function addWorker() {
    const { data } = await axios.post('/api/review/create-review/index');
     console.log("teste", addWorker)
     toast('Avaliação Cadastrada! ✅ ', {
      position: "top-right",
      autoClose: 9000,
    });
    route.push("/");

  }
  
 
    return (
      
    <div className={styles.registerpage}> 
       

        <div className={styles.container}>  
          
            <div className={styles.form}>
               <Link href="/" className={styles.back}>
                <img src="back.png" alt="voltar" width="38px" height="38px" />        
                </Link> 
                  <h1>Cadastro de Avaliação</h1>
                <input name="name"onChange={(item)=> setName(item.target.value)} required={true} placeholder="Nome do Prestador"/>
                <InputMask name="phone" value={contact}type="number" onChange={(item)=> setContact(item.target.value)} required="true" placeholder="(xx) xxxxx-xxxx"/>

                  <label className={styles.choice}>Escolha a categoria de Serviço</label>
                  <select name="substrato_imprime" placeholder="Selecione"value={category}onChange={(item)=> setCategory(item.target.value)} required={true}>
                  
                    <option value="Selecione"name="Selecione">Selecione</option>
                    <option value="Construcao"name="Construcao">Construção</option>
                    <option value="Eletrica"name="Eletrica">Elétrica</option>
                    <option value="Hidraulica"name="Hidraulica">Hidráulica</option>
                    <option value="Limpeza"name="Limpeza">Limpeza</option>
                  </select>
                
              <textarea cols="30" minLength="3" maxLength="100"rows="6"name="abstract"onChange={(item)=> setAbstract(item.target.value)} required={true} placeholder="Digite aqui a sua avaliação"/>
              
            </div>
            
        </div>
        <div className={styles.send}>
          <Link href="/">
            <button type="submit" onClick={addWorker} >
            
              Cadastrar
            </button>
          </Link>
        </div>
    </div> 
    
    )
  }

export default Create;