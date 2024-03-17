'use client';
import { usePathname } from 'next/navigation';
import "../../style/globals.css";
import { airCrispAliments } from "../../data/airCrispData";
import { AirCrispAliment } from "../../data/alimentType";
import { useState } from 'react';


export default function recette() {
  const ingredient = decodeURIComponent(usePathname().split('/')[usePathname().split('/').length - 1]);
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const [aliment, setAliment] = useState(getAliment());

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
        <h2 className='mb-5' style={{ textAlign: "center", color: "#689f38" }}>{aliment?.ingredient}</h2>
        <div className='row alimentRow'>
          <div className='col titleCol'>
            Quantité
          </div>
          <div className='col dataCol'>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button onClick={handleDecrement} style={buttonStyle}>-</button>
              <input
                type="number"
                value={value}
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  width: '50%',
                  textAlign: 'right',
                  paddingRight: '20px',
                }}
              />
              <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>g</div>
              <button onClick={handleIncrement} style={buttonStyle}>+</button>
            </div>
            
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
        {aliment?.quantitehuile && aliment?.quantitehuile > 0 ? <div className='row alimentRow'>
          <div className='col titleCol'>
            Huile
          </div>
          <div className='col dataCol'>
            {aliment?.quantitehuile + ' ' + aliment?.uniteHuile}
          </div>
        </div> : ''}

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
        {aliment?.melanger ? <div className='row alimentRow'>
          <div className='col titleCol'>
            Mélanger
          </div>
          <div className='col dataCol'>
            {aliment?.melanger}
          </div>
        </div> : ''}

      </div>
    </div>
  );
}
