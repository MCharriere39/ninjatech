'use client';
import { usePathname } from 'next/navigation';
import "../../style/globals.css";
import { pressureCookingAliments } from "../../data/pressureCookingData";
import { useState } from 'react';
import Link from 'next/link';


export default function recette() {
  const id = decodeURIComponent(usePathname().split('/')[usePathname().split('/').length - 1]);
  const [aliment, setAliment] = useState(getAliment());
  const [quantiteAliment, setquantiteAliment] = useState(aliment?.quantite || 0);
  const [multiplicateur, setMultiplicateur] = useState(majMultiplicateur(aliment?.quantite || 0));


  function majMultiplicateur(nouvelleQuantite: number) {
    return nouvelleQuantite / aliment!.quantite;
  }
  const handleIncrement = () => {
    if(Number.isInteger(quantiteAliment)){
      if(aliment?.uniteQuantite == 'g' || aliment?.uniteQuantite == 'ml'){
        setquantiteAliment(quantiteAliment + 50);
        setMultiplicateur(majMultiplicateur(quantiteAliment + 50));
      }else{
        setquantiteAliment(quantiteAliment + 1);
        setMultiplicateur(majMultiplicateur(quantiteAliment + 1));
      }
      
    }else{
      setquantiteAliment(quantiteAliment + 0.1);
      setMultiplicateur(majMultiplicateur(quantiteAliment + 0.1));
    } 
  };

  const handleDecrement = () => {
    if(quantiteAliment != 0){
      if(Number.isInteger(quantiteAliment)){
        if(aliment?.uniteQuantite == 'g' || aliment?.uniteQuantite == 'ml'){
          setquantiteAliment(quantiteAliment - 50);
          setMultiplicateur(majMultiplicateur(quantiteAliment - 50));
        }else{
          setquantiteAliment(quantiteAliment - 1);
          setMultiplicateur(majMultiplicateur(quantiteAliment - 1));
        }
        
      }else{
        setquantiteAliment(quantiteAliment - 0.1);
        setMultiplicateur(majMultiplicateur(quantiteAliment - 0.1));
      } 
    }
    
  };

  const handleChange = (event: any) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
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

  const formatValue = (value: any) => {
    if(!Number.isInteger(quantiteAliment)){
      if (value === "") return ""; // Return empty string if value is empty
      const floatValue = parseFloat(value); // Parse the value to float
      return floatValue.toFixed(1); // Format the value to have 3 decimal places
    }else{
      return value;
    }
};

  function getAliment() {
    for (let i = 0; i < pressureCookingAliments.length; i++) {
      if (pressureCookingAliments[i].id == parseInt(id)) {
        return pressureCookingAliments[i];
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
        <Link style={{ textDecoration: "none" }} href={`/pressure`}>
          <button className='btn btn-outline-primary btn-md'
          ><i className="bi bi-arrow-left"> </i>Retour</button>
        </Link>
        <h2 className='mb-5 mt-5' style={{ textAlign: "center", color: "#0072BC" }}>{aliment?.ingredient}</h2>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <div className='row alimentRow'>
            <div className='col-lg titleCol'>
              Quantité
            </div>
            <div className='col-lg dataCol'>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={handleDecrement} style={buttonStyle}>-</button>
                <input
                  type="number"
                  value={formatValue(quantiteAliment)}
                  onChange={handleChange}
                  style={{
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      fontSize: '16px',
                      width: '200px',
                      textAlign: 'left',
                      paddingRight: '20px',
                  }}
                />

                <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>{quantiteAliment > 1 &&  aliment?.uniteQuantite != 'g' &&  aliment?.uniteQuantite != 'kg' &&  aliment?.uniteQuantite != 'l'? aliment?.uniteQuantite+'s' : aliment?.uniteQuantite} { aliment?.precisionUnite?  '('+ aliment.precisionUnite+')' : ''}</div>
                <button onClick={handleIncrement} style={buttonStyle}>+</button>
              </div>
              {quantiteAliment != aliment?.quantite ? <button className='btn btn-outline-secondary btn-sm mt-2'
                onClick={reinitialiserQuantite}
              >Réinitialiser</button> : ''}


            </div>
            {aliment?.preparation ? <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Préparation
              </div>
              <div className='col-lg dataCol'>
                {aliment?.preparation}
              </div>
            </div> : ''}
            
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
                {aliment?.tempsMin}{aliment?.tempsMax ? '-'+ aliment.tempsMax : ''} min.<br/>
               {multiplicateur >= 1.5 && multiplicateur < 2  ? <span className="text-warning">(Augmenter légèrement le temp de cuisson)</span> : ''} 
               {multiplicateur >= 2 && multiplicateur < 3  ? <span className="text-warning">(Penser à augmenter le temp de cuisson)</span> : ''} 
               {multiplicateur >= 3  ? <span className="text-warning">(Augmenter significativement le temp de cuisson)</span> : ''}
              </div>
            </div>
            <div className='row alimentRow'>
              <div className='col-lg titleCol'>
                Décompression
              </div>
              <div className='col-lg dataCol'>
                {aliment?.decompression}
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
