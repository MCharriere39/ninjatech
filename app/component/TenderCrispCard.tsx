import { tenderCrispAliment } from "../data/alimentType";
import "../style/card.css";

interface TenderCrispCardProps {
    aliment: tenderCrispAliment;
  }

export default function TenderCrispCard({aliment} : TenderCrispCardProps) {
    return (

        <div className="card tenderCrispCard" style={{margin:"5px", width:"260px"}}>
        <h5 style={{backgroundColor:"#E0A846",color:"white"}} className="card-header text-center">{aliment.ingredient}</h5>
        <div className="card-body tenderCrispCardBody" style={{height:"25vh",overflow:"auto"}}>
            <div className="card-text">
                <div className="row">
                    <div className="col-md titleCol">Quantité</div>
                    <div className="col-md dataCol">{aliment.quantite} {aliment.quantite > 1 &&  aliment?.uniteQuantite != 'g' &&  aliment?.uniteQuantite != 'kg' &&  aliment?.uniteQuantite != 'l'? aliment?.uniteQuantite+'s' : aliment?.uniteQuantite} <br/> { aliment.precisionUnite?  '('+ aliment.precisionUnite+')' : ''}</div>
                </div> 
                {aliment.quantiteEau >0 ? <div className="row cardRow">
                    <div className="col-md titleCol">Eau</div>
                    <div className="col-md dataCol">{aliment.quantiteEau+' '+aliment.uniteEau}</div>
                </div> : ''}
                {aliment?.accessoire ? <div className="row cardRow">
                    <div className="col-md titleCol">Accessoire</div>
                    <div className="col-md dataCol">{aliment?.accessoire}</div>
                </div> : '' }
                <div className="row cardRow">
                    <div className="col-md titleCol">Pression</div>
                    <div className="col-md dataCol">{aliment.pression}</div>
                </div>
                <div className="row cardRow">
                    <div className="col-md titleCol">Temps</div>
                    <div className="col-md dataCol">{aliment?.tempPression} min</div>
                </div>
                <div className="row cardRow">
                    <div className="col-md titleCol">Deuxième étape</div>
                    <div className="col-md dataCol">{aliment.preparation}</div>
                </div> 
            </div>
        </div>
      </div>
    );
  }
  