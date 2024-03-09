'use client'
import AirCrispCard from "../component/AirCrispCard";
import { airCrispAliments } from "../data/airCrispData";
import { AirCrispAliment } from "../data/alimentType";
import { ChangeEvent, useState,useEffect  } from 'react';
import "../style/globals.css";
export default function Page() {

  
  const[recherche,setRecherche] = useState("");
  const[rows,setRows] = useState(populateRows());

  function populateRows(){
    const filteredAliments = Array();
    for (let i = 0; i < airCrispAliments.length; i ++) {
      if(airCrispAliments[i].ingredient.toLocaleLowerCase().startsWith(recherche.toLocaleLowerCase()) || recherche == ""){
        filteredAliments.push(airCrispAliments[i]);
      }
    }
    const tempRows = Array();
    for (let i = 0; i < filteredAliments.length; i += 4) {
      const row = filteredAliments.slice(i, i + 4);
      tempRows.push(row);
    }
    return tempRows;
  }

  useEffect(()=>{
    setRows(populateRows());
  },[recherche])

  



  return (
    <main>
      <div  style={{ width:"70%",margin:"auto",marginTop: "40px", }}>
        <h2 style={{ color: "#689f38" }}>Air Crisp</h2>
        <h6> Pour le panier Cook & Crisp</h6>
        <div className="row">
          <div className="col-sm-7"></div>
          <div className="col-sm-5 mb-2">
            <input type="text" value={recherche} onChange={(v)=>{setRecherche(v.target.value)}} placeholder="Recherche un aliment" className="form-control"></input>
          </div>
        </div>
        {rows.map((row, index) => (
          <div key={index} className="row">
            {row.map((aliment : AirCrispAliment, subIndex:any) => (
              <div key={subIndex} className="col-sm">
                <AirCrispCard aliment={aliment} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
