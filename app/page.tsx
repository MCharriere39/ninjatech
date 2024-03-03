import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./style/globals.css";



export default function Home() {

  const btnCommencer = {
    marginTop : '35vh'
  };

  return (
    <div>
      <div style={{backgroundImage:'url("images/WallPaperNinjatech.webp")',backgroundSize:'cover',backgroundRepeat:'no-repeat', height:'100vh'}} className="d-flex justify-content-center">
        <div className="flex-column">
          <div className="row">
            <div className="col mt-3 text-white "><h1>Bienvenue dans la Ninjatech</h1></div>
          </div>
          <div className="row">
            <div style={{textAlign:"center"}} className="col">
              <button style={btnCommencer} type="button" className="btn btn-primary">Commencer a cuisiner !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
