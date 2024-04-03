import { useState } from "react";

export default function quantityInput(props : {aliment :any, onInputChange : (newValue : number) => void}) {

    const [aliment, setAliment] = useState(props.aliment);
    const [quantiteAliment, setquantiteAliment] = useState(props.aliment.quantite || 0);
    const [multiplicateur, setMultiplicateur] = useState(props.aliment.quantite/aliment!.quantite || 0);



    function AddQuantiteAliment(v:number){
        setquantiteAliment(quantiteAliment + v);
        setMultiplicateur((quantiteAliment + v)/ aliment!.quantite);
        handleInputChange(); 
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

    const handleIncrement = () => {
        if(Number.isInteger(quantiteAliment)){
          if(aliment?.uniteQuantite == 'g' || aliment?.uniteQuantite == 'ml'){
            AddQuantiteAliment(50);
          }else{
            AddQuantiteAliment(1);
          }
          
        }else{
            AddQuantiteAliment(0.1);
        } 
      };
    
      const handleDecrement = () => {
        if(quantiteAliment != 0){
          if(Number.isInteger(quantiteAliment)){
            if(aliment?.uniteQuantite == 'g' || aliment?.uniteQuantite == 'ml'){
                AddQuantiteAliment(-50);
            }else{
                AddQuantiteAliment(-1);
            }
          }else{
            AddQuantiteAliment(-0.1);
          } 
        }
      };

      function reinitialiserQuantite() {
        setquantiteAliment(aliment?.quantite || 0);
        setMultiplicateur(1);
        handleInputChange();
      }

      function handleInputChange(){
        // Call the callback function with the new value
        props.onInputChange(multiplicateur);
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
        <div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={handleDecrement} style={buttonStyle}>-</button>
                <input
                  value={formatValue(quantiteAliment)}
                  disabled
                  style={{
                      backgroundColor: "white",
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
              
    );
  }
  