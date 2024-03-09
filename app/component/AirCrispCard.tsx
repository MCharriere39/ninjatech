import { AirCrispAliment } from "../data/alimentType";
import "../style/card.css";

interface AirCrispCardProps {
    aliment: AirCrispAliment;
  }

export default function airCrispCard({aliment} : AirCrispCardProps) {
    return (

        <div className="card" style={{margin:"5px"}}>
        <h5 style={{backgroundColor:"#689f38",color:"white"}} className="card-header text-center">{aliment.ingredient}</h5>
        <div className="card-body" style={{height:"25vh",overflow:"auto"}}>
            <div className="card-text">
                <div className="row">
                    <div className="col-md titleCol">Quantité</div>
                    <div className="col-md dataCol">{aliment.quantite}</div>
                </div>
                <div className="row cardRow">
                    <div className="col-md titleCol">Préparation</div>
                    <div className="col-md dataCol">{aliment.preparation}</div>
                </div>
                <div className="row cardRow">
                    <div className="col-md titleCol">Huile</div>
                    <div className="col-md dataCol">{aliment.quantitehuile+' '+aliment.uniteHuile}</div>
                </div>
                <div className="row cardRow">
                    <div className="col-md titleCol">Température</div>
                    <div className="col-md dataCol">{aliment.temperature}°C</div>
                </div>
                <div className="row cardRow">
                    <div className="col-md titleCol">Temps</div>
                    <div className="col-md dataCol">{aliment.tempsMin}-{aliment.tempsMax} min.</div>
                </div>
                <div className="row cardRow">
                    <div className="col-md titleCol">Mélanger</div>
                    <div className="col-md dataCol">{aliment.preparation}</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  