'use client';
import { usePathname } from 'next/navigation';
import "../../style/globals.css";
import { tenderCrispAliments } from "../../data/tenderCrispData";
import { useState } from 'react';
import Link from 'next/link';
import QuantityInput from '../../component/QuantityInput';


export default function recette() {
  const id = decodeURIComponent(usePathname().split('/')[usePathname().split('/').length - 1]);
  const [aliment, setAliment] = useState(getAliment());
  const [multiplicateur, setMultiplicateur] = useState(majMultiplicateur(aliment?.quantite || 0));

  function majMultiplicateur(nouvelleQuantite: number) {
    return nouvelleQuantite / aliment!.quantite;
  }

  function getAliment() {
    for (let i = 0; i < tenderCrispAliments.length; i++) {
      if (tenderCrispAliments[i].id == parseInt(id)) {
        return tenderCrispAliments[i];
      }
    }
  }
  const handleInputChange = (newValue: number) => {
    setMultiplicateur(newValue);
  };
  return (
    <div className='mainClass'>
      <div className='container-md ninjaContainer'>
        <Link style={{ textDecoration: "none" }} href={`/tenderCrisp`}>
          <button className='btn btn-outline-warning btn-md'
          ><i className="bi bi-arrow-left"> </i>Retour</button>
        </Link>
        <h2 className='mb-5 mt-5' style={{ textAlign: "center", color: "#E0A846" }}>{aliment?.ingredient}</h2>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <div className='row alimentRow'>
            <div className='col-lg titleCol'>
              Quantité
            </div>
            <div className='col-lg dataCol'>
            <QuantityInput aliment={aliment} onInputChange={handleInputChange} />
            </div>
            {aliment?.quantiteEau && aliment?.quantiteEau > 0 ? <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Eau
              </div>
              <div className='col-lg dataCol'>
                {Math.round((aliment?.quantiteEau) * multiplicateur) + ' ' + aliment?.uniteEau}
              </div>
            </div> : ''}
            {aliment?.accessoire  ? <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Accessoire
              </div>
              <div className='col-lg dataCol'>
                {aliment.accessoire}
              </div>
            </div> : ''}
            <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Pression
              </div>
              <div className='col-lg dataCol'>
                {aliment?.pression}
              </div>
            </div>
            <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Temps
              </div>
              <div className='col-lg dataCol'>
                {aliment?.tempPression} min.<br/>
               {multiplicateur >= 1.5 && multiplicateur < 2  ? <span className="text-warning">(Augmenter légèrement le temp de cuisson)</span> : ''} 
               {multiplicateur >= 2 && multiplicateur < 3  ? <span className="text-warning">(Penser à augmenter le temp de cuisson)</span> : ''} 
               {multiplicateur >= 3  ? <span className="text-warning">(Augmenter significativement le temp de cuisson)</span> : ''}
              </div>
            </div>
            <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Deuxième étape
              </div>
              <div className='col-lg dataCol'>
                {aliment?.preparation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
