'use client';
import { usePathname } from 'next/navigation';
import "../../style/globals.css";
import { airCrispAliments } from "../../data/airCrispData";
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
    for (let i = 0; i < airCrispAliments.length; i++) {
      if (airCrispAliments[i].id == parseInt(id)) {
        return airCrispAliments[i];
      }
    }
  }
  const handleInputChange = (newValue: number) => {
    setMultiplicateur(newValue);
  };
  return (
    <div className='mainClass'>
      <div className='container-md ninjaContainer'>
        <Link style={{ textDecoration: "none" }} href={`/airCrisp`}>
          <button className='btn btn-outline-success btn-md'
          ><i className="bi bi-arrow-left"> </i>Retour</button>
        </Link>
        <h2 className='mb-5 mt-5' style={{ textAlign: "center", color: "#689f38" }}>{aliment?.ingredient}</h2>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <div className='row alimentRow'>
            <div className='col-lg titleCol'>
              Quantité
            </div>
            <div className='col-lg dataCol'>
            <QuantityInput aliment={aliment} onInputChange={handleInputChange} />
            </div>
            <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Préparation
              </div>
              <div className='col-lg dataCol'>
                {aliment?.preparation}
              </div>
            </div>
            {aliment?.quantitehuile && aliment?.quantitehuile > 0 ? <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Huile
              </div>
              <div className='col-lg dataCol'>
                {Math.round((aliment?.quantitehuile) * multiplicateur) + ' ' + aliment?.uniteHuile}
              </div>
            </div> : ''}

            <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Température
              </div>
              <div className='col-lg dataCol'>
                {aliment?.temperature}°C
              </div>
            </div>
            <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Temps
              </div>
              <div className='col-lg dataCol'>
                {aliment?.tempsMin}{aliment?.tempsMax ? '-'+ aliment.tempsMax : ''} min.<br/>
               {multiplicateur >= 1.5 && multiplicateur < 2  ? <span className="text-warning">(Augmenter légèrement le temp de cuisson)</span> : ''} 
               {multiplicateur >= 2 && multiplicateur < 3  ? <span className="text-warning">(Penser à augmenter le temp de cuisson)</span> : ''} 
               {multiplicateur >= 3  ? <span className="text-warning">(Augmenter significativement le temp de cuisson)</span> : ''}
              </div>
            </div>
            {aliment?.melanger ? <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Mélanger
              </div>
              <div className='col-lg dataCol'>
                {aliment?.melanger}
              </div>
            </div> : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
