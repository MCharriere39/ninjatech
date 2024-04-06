'use client'
import SteamCard from "../component/SteamCard";
import { steamAliment } from "../data/alimentType";
import { useState,useEffect  } from 'react';
import "../style/globals.css";
import Link from "next/link";
import { steamAliments } from "../data/steamData";
export default function Page() {

  
  const[recherche,setRecherche] = useState("");
  const[rows,setRows] = useState(populateRows());

  function populateRows(){
    const filteredAliments = Array();
    for (let i = 0; i < steamAliments.length; i ++) {
      if(steamAliments[i].ingredient.toLocaleLowerCase().includes(recherche.toLocaleLowerCase()) || recherche == ""){
        filteredAliments.push(steamAliments[i]);
      }
    }
    const tempRows = Array();
    for (let i = 0; i < filteredAliments.length; i += 4) {
      const row = filteredAliments.slice(i, i + 4);
      if(row.length <4){
        for(let b = 0;b < 4-row.length+1; b++){
          row.push({});
        }
      }
      tempRows.push(row);
    }
    return tempRows;
  }

  useEffect(()=>{
    setRows(populateRows());
  },[recherche])


  return (
    <main className="mainClass">
      <div className="container-md ninjaContainer" >
        <Link style={{ textDecoration: "none" }} href={`/`}>
          <button style={{marginTop:"-50px"}} className='btn btn-outline-primary btn-md '
          ><i className="bi bi-arrow-left"> </i>Retour</button>
        </Link>
        <h2 style={{ color: "#0093bc" }}>Cuisson vapeur</h2>
        <h6>Pour la grille réversible</h6>
        <div className="row">
          <div className="col-sm-7"></div>
          <div className="col-sm-5 mb-2">
            <input type="text" value={recherche} onChange={(v)=>{setRecherche(v.target.value)}} placeholder="Recherche un aliment" className="form-control"></input>
          </div>
        </div>
        {rows.map((row, index) => (
          <div key={index} className="row">
            {row.map((aliment : steamAliment, subIndex:any) => (
              <div key={subIndex} className="col-sm">
                {aliment.ingredient ? <Link style={{textDecoration:"none"}} href={`/steam/${aliment.id}`}>
                  <SteamCard aliment={aliment} />
                </Link> : ''}
                
                
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
