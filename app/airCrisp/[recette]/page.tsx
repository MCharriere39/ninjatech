'use client';
import { usePathname } from 'next/navigation';
import "../../style/globals.css";
import { airCrispAliments } from "../../data/airCrispData";
import { AirCrispAliment } from "../../data/alimentType";
import { useState } from 'react';

export default function recette() {
  const ingredient = decodeURIComponent(usePathname().split('/')[usePathname().split('/').length - 1]);

  const[aliment,setAliment] = useState(getAliment());

  function getAliment(){
    for (let i = 0; i < airCrispAliments.length; i ++) {
      if(airCrispAliments[i].ingredient == ingredient){
        return airCrispAliments[i];
      }
    }
  }

  return (
    <div>
        <div className='container-md ninjaContainer'>
          <h2  className='mb-5' style={{textAlign:"center",color: "#689f38"}}>{aliment?.ingredient}</h2>
          <div className='row alimentRow'>
            <div className='col titleCol'>
              Quantité
            </div>
            <div className='col dataCol'>
              <input style={{textAlign:"center"}} className='form-control' value={aliment?.quantite+'g'}></input>
            </div>
          </div>
          <div className='row alimentRow'>
            <div className='col titleCol'>
              Préparation
            </div>
            <div className='col dataCol'>
              {aliment?.preparation}
            </div>
          </div>
          <div className='row alimentRow'>
            <div className='col titleCol'>
              Huile
            </div>
            <div className='col dataCol'>
              {aliment?.quantitehuile+' '+aliment?.uniteHuile}
            </div>
          </div>
          <div className='row alimentRow'>
            <div className='col titleCol'>
              Température
            </div>
            <div className='col dataCol'>
              {aliment?.temperature}°C
            </div>
          </div>
          <div className='row alimentRow'>
            <div className='col titleCol'>
              Temps
            </div>
            <div className='col dataCol'>
            {aliment?.tempsMin}-{aliment?.tempsMax} min.
            </div>
          </div>
          <div className='row alimentRow'>
            <div className='col titleCol'>
              Mélanger
            </div>
            <div className='col dataCol'>
              {aliment?.melanger}
            </div>
          </div>
        </div>
    </div>
  );
}
