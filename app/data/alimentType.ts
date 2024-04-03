export type AirCrispAliment = {
    id : number;
    ingredient: string;
    quantite: number;
    uniteQuantite : string;
    precisionUnite : string;
    preparation: string;
    quantitehuile: number;
    uniteHuile: string
    temperature: number;
    tempsMin: number;
    tempsMax: number;
    melanger: string;
  };

  export type pressureCookingAliment = {
    id : number;
    ingredient: string;
    quantite: number;
    uniteQuantite : string;
    precisionUnite : string;
    preparation: string;
    quantiteEau: number;
    uniteEau: string
    accessoire : string,
    pression: string;
    tempsMin: number;
    tempsMax: number;
    decompression: string;
  }

  export type tenderCrispAliment = {
    id : number;
    ingredient: string;
    quantite: number;
    uniteQuantite : string;
    precisionUnite : string;
    preparation: string;
    quantiteEau: number;
    uniteEau: string
    accessoire : string,
    pression: string;
    tempPression:number;
  }