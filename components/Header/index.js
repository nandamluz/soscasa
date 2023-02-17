
import styles from './header.module.css';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect, useState } from "react";

import Router from "next/router";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import InstagramIcon from "@mui/icons-material/Instagram";
import ReactGoogleAutocomplete from "react-google-autocomplete";

export default function Header() {
  
  const router = useRouter()
  const [citySelected, setCitySelected] = useState("Uberlândia");
  


 /*  useEffect(() => {
    if (citySelected) {
      getCity();
    }
  }, []);


  async function getCity() {
    navigator.geolocation.getCurrentPosition(async function (posicao) {
      const { data } = await axios.get(
      );
      let city = "";
      data?.results[0].address_components.forEach((element) => {
        if (element.types[0] === "locality") {
          city = element.long_name;
        }
      });
      setCitySelected(city);
    }); console.log(setCitySelected,"setCitySelected")
    
  } 

  const handleCitySelected = (place) => {
    let city = "";
    place.address_components.forEach((element) => {
      if (element.types[0] === "locality") {
        city = element.long_name;
      }
    });
    setCitySelected(city);
    dispatch(userUpdate({ currentCity: city }));
  };*/
    return (
      <div className={styles.container}>
        
          <div className={styles.grid}>
            <div className={styles.containerlogo}>
              <img src="/logo.png" alt="Vercel" width="120px"className={styles.logo} />
            </div>
            <LocationOnOutlinedIcon style={{
              color: "#0070f3",
              
            }} />
            {/* <ReactGoogleAutocomplete
            apiKey="AIzaSyCDPJeULRM50iaaYmmkL2gMJCcwRMyPX64"
            onPlaceSelected={handleCitySelected}
            language="pt-BR"
            
            style={{
              fontSize: 14,
              borderRadius: 4,
              borderWidth: 0,
              borderColor: "#969696",
              padding: 5,
            }}
            onChange={(text) => setCitySelected(text.target.value)}
            options={{
              types: ["(cities)"],
              componentRestrictions: { country: "br" },
            }}
            value={citySelected}
          /> */}
            
            
              <button onClick={() => Router.push("/create")}>Avalie aqui</button>
            
            
          </div>
        
  
       
      </div>
    )
  }