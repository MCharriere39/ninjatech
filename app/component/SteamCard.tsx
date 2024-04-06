import { steamAliment } from "../data/alimentType";
import "../style/card.css";

interface SteamCardProps {
    aliment: steamAliment;
  }

export default function SteamCard({aliment} : SteamCardProps) {
    return (

        <div className="card steamCard" style={{margin:"5px", width:"260px"}}>
        <h6 style={{backgroundColor:"#0093bc",color:"white"}} className="card-header text-center">{aliment.ingredient}</h6>
        <div className="card-body steamCardBody" style={{height:"25vh",overflow:"auto"}}>
            <div className="card-text">
                <div className="row">
                    <div className="col-md titleCol">Quantité</div>
                    <div className="col-md dataCol">{aliment.quantite} {aliment.quantite > 1 &&  aliment?.uniteQuantite != 'g' &&  aliment?.uniteQuantite != 'kg' &&  aliment?.uniteQuantite != 'l'? aliment?.uniteQuantite+'s' : aliment?.uniteQuantite} <br/> { aliment.precisionUnite?  '('+ aliment.precisionUnite+')' : ''}</div>
                </div>
                {aliment.preparation ? <div className="row cardRow">
                    <div className="col-md titleCol">Préparation</div>
                    <div className="col-md dataCol">{aliment.preparation}</div>
                </div> : ''}
                
                {aliment.quantiteEau >0 ? <div className="row cardRow">
                    <div className="col-md titleCol">Eau</div>
                    <div className="col-md dataCol">{aliment.quantiteEau+' '+aliment.uniteEau}</div>
                </div> : ''}
                <div className="row cardRow">
                    <div className="col-md titleCol">Temps</div>
                    <div className="col-md dataCol">{aliment?.tempsMin}{aliment?.tempsMax ? '-'+ aliment.tempsMax : ''} min</div>
                </div>   
            </div>
        </div>
      </div>
    );
  }
  