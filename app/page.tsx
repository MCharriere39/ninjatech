

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./style/globals.css";
import { Lobster } from "next/font/google";


const lobster = Lobster({ weight: "400",subsets:["latin"] });
export default function Home() {

  const btnCookingSelect = {
    marginTop : '8vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width : '80vw',
    height:'15vh',
    fontSize: '24px',
    fontWeight:'bold',
    textShadow: '0 0 10px black',
  };

  return (
    <div>
      <div style={{height:'100vh'}} className="d-flex justify-content-center">
        <div className="flex-column">
        <div className="row">
            <div style={{textAlign:"center"}} className="col mt-5">
              <h1 style={{fontWeight:'bold',fontSize:50}} className={lobster.className}> La Ninjatech</h1>
            </div>
          </div>
          <div className="row">
            <div style={{textAlign:"center"}} className="col">
              <button style={{...btnCookingSelect, 
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/images/AirCrisp.webp')",}}
                type="button" className="btn btn-primary">AIR CRISP</button>
            </div>
          </div>
          <div className="row">
            <div style={{textAlign:"center"}} className="col">
              <button 
              style={{...btnCookingSelect,    
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/images/Pressure.webp')",}}
              type="button" 
              className="btn btn-primary">PRESSURE COOKING</button>
            </div>
          </div>
          <div className="row">
            <div style={{textAlign:"center"}} className="col">
              <button style={{...btnCookingSelect, 
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/images/TenderCrisp.webp')",}}
                type="button" 

                className="btn btn-primary">TENDER CRISP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
