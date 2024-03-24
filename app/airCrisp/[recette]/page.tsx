'use client';
import { usePathname } from 'next/navigation';
import "../../style/globals.css";
import { airCrispAliments } from "../../data/airCrispData";
import { useState } from 'react';
import Link from 'next/link';


export default function recette() {
  const ingredient = decodeURIComponent(usePathname().split('/')[usePathname().split('/').length - 1]);
  const [aliment, setAliment] = useState(getAliment());
  const [quantiteAliment, setquantiteAliment] = useState(aliment?.quantite || 0);
  const [multiplicateur, setMultiplicateur] = useState(majMultiplicateur(aliment?.quantite || 0));


  function majMultiplicateur(nouvelleQuantite: number) {
    return nouvelleQuantite / aliment!.quantite;
  }
  const handleIncrement = () => {
    setquantiteAliment(quantiteAliment + 1);
    setMultiplicateur(majMultiplicateur(quantiteAliment + 1));
  };

  const handleDecrement = () => {
    if (quantiteAliment > 0) {
      setquantiteAliment(quantiteAliment - 1);
      setMultiplicateur(majMultiplicateur(quantiteAliment - 1));
    }
  };

  const handleChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      console.log(newValue);
      setquantiteAliment(newValue);
      setMultiplicateur(majMultiplicateur(newValue));
    } else {
      setquantiteAliment(0);
      setMultiplicateur(majMultiplicateur(0));
    }
  };

  function reinitialiserQuantite() {
    setquantiteAliment(aliment?.quantite || 0);
    setMultiplicateur(1);
  }



  function getAliment() {
    for (let i = 0; i < airCrispAliments.length; i++) {
      if (airCrispAliments[i].ingredient == ingredient) {
        return airCrispAliments[i];
      }
    }
  }
  const buttonStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    background: '#f0f0f0',
    fontSize: '16px',
    cursor: 'pointer',
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
            <div className='col-md titleCol'>
              Quantité
            </div>
            <div className='col-md dataCol'>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={handleDecrement} style={buttonStyle}>-</button>
                <input
                  type="tel" pattern="[0-9]*"
                  value={quantiteAliment}
                  onChange={handleChange}
                  style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    width: '150px',
                    textAlign: 'right',
                    paddingRight: '20px',
                  }}
                />
                <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}> g</div>
                <button onClick={handleIncrement} style={buttonStyle}>+</button>
              </div>
              {quantiteAliment != aliment?.quantite ? <button className='btn btn-outline-secondary btn-sm mt-2'
                onClick={reinitialiserQuantite}
              >Réinitialiser</button> : ''}


            </div>
            <div className='row alimentRow'>
              <div className='col-md titleCol'>
                Préparation
              </div>
              <div className='col-md dataCol'>
                {aliment?.preparation}
              </div>
            </div>
            {aliment?.quantitehuile && aliment?.quantitehuile > 0 ? <div className='row alimentRow'>
              <div className='col-md titleCol'>
                Huile
              </div>
              <div className='col-md dataCol'>
                {Math.round((aliment?.quantitehuile) * multiplicateur) + ' ' + aliment?.uniteHuile}
              </div>
            </div> : ''}

            <div className='row alimentRow'>
              <div className='col-md titleCol'>
                Température
              </div>
              <div className='col-md dataCol'>
                {aliment?.temperature}°C
              </div>
            </div>
            <div className='row alimentRow'>
              <div className='col-md titleCol'>
                Temps
              </div>
              <div className='col-md dataCol'>
                {aliment?.tempsMin}-{aliment?.tempsMax} min.
              </div>
            </div>
            {aliment?.melanger ? <div className='row alimentRow'>
              <div className='col-md titleCol'>
                Mélanger
              </div>
              <div className='col-md dataCol'>
                {aliment?.melanger}
              </div>
            </div> : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
