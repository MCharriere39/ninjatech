

import Image from "next/image";

import { Lobster } from "next/font/google";
import Link from 'next/link';


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
        <div className="flex-column" >
          <div className="row">
            <div style={{textAlign:"center"}} className="col mt-5">
              <h1 style={{fontWeight:'bold',fontSize:45}} className={lobster.className}> La Ninjatech</h1>
              <h1 style={{fontWeight:'normale',fontSize:20, fontStyle:"italic"}}>Toutes les recettes pour votre multi-cuiseur Ninja !</h1>
            </div>
          </div>
          <div className="row">
            <Link href="/airCrisp">
              <div style={{textAlign:"center"}} className="col">
                <button style={{...btnCookingSelect, 
                  marginTop:"4vh",
                  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/images/AirCrisp.webp')",
                  border:"solid #689f38 4px"
                }}
                  
                  type="button" className="btn btn-primary">AIR CRISP</button>
              </div>
            </Link>
          </div>
          <div className="row">
            <div style={{textAlign:"center"}} className="col">  
              <Link href="/pressure">
                <button 
                  style={{...btnCookingSelect,    
                  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/images/Pressure.webp')",
                  border:"solid #0072BC 4px"
                }}
                  type="button" 
                  className="btn btn-primary">PRESSURE COOKING</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <Link href="/tenderCrisp">
              <div style={{textAlign:"center"}} className="col">
                <button style={{...btnCookingSelect, 
                  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/images/TenderCrisp.webp')",
                  border:"solid #E0A846 4px"
                  }}
                  type="button" 

                  className="btn btn-primary">TENDER CRISP</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
