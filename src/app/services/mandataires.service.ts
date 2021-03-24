import { Injectable } from '@angular/core';
import { Mandataire} from "../model/mandataire.model";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class MandatairesService {

  apiURL: string='http://localhost:8080/contribuable/api3';

  mandataires: Mandataire[];

  constructor(private http: HttpClient) { 
   /* this.mandataires=[
      {idMandataire : 1,
    civiliteMandataire : "Mme",
    denominationMandataire : "Mbodji",
    fonctionMandataire : "Comptable",
    entrepriseMandataire : "ExpertCC",
    adresseMandataire : "Somone",
    compteDeMandataire : "ExpertCC",
    typeMandatMandataire : "Télédéclaration"},
    {idMandataire : 2,
      civiliteMandataire : "M.",
      denominationMandataire : "Dieng",
      fonctionMandataire : "Chimistee",
      entrepriseMandataire : "ExpertOrganique",
      adresseMandataire : "Somone",
      compteDeMandataire : "ExpertOrganique",
      typeMandatMandataire : "Télédépaiement"}
    ];*/
  }

  /*listeMandataire(): Mandataire[] {
    return this.mandataires;
  }*/
  listeMandataire(): Observable<Mandataire[]>{
    return this.http.get<Mandataire[]>(this.apiURL)

  }

 /* ajouterMandataire(man: Mandataire){
    this.mandataires.push(man);
  }*/
  ajouterMandataire(man: Mandataire): Observable<Mandataire>{
    return this.http.post<Mandataire>(this.apiURL, man, httpOptions);
  }

  /*supprimerMandataire(man: Mandataire){
    const index=this.mandataires.indexOf(man,0);
    if (index > -1){
      this.mandataires.splice(index, 1);
    }
  }*/
  supprimerMandataire(id: number){
    const url=`${this.apiURL}/${id}`;
    return this.http.delete(url,  httpOptions);
  }

  /*consulterMandataire(id: number): Mandataire{
    return this.mandataires.find(p=>p.idMandataire==id);

  }*/
  consulterMandataire(id: number): Observable<Mandataire>{
    const url=`${this.apiURL}/${id}`;
    return this.http.get<Mandataire>(url);
    

  }

  /*trierMandataire(){

    this.mandataires=this.mandataires.sort((n1,n2)=>{
      if(n1.idMandataire > n2.idMandataire){
        return 1;
      }
      if(n1.idMandataire < n2.idMandataire){
        return -1;
      }
      return 0;
    }
    );
}*/
  

  /*updateMandataire(man: Mandataire){
    this.supprimerMandataire(man);
    this.ajouterMandataire(man);
    this.trierMandataire();
  }*/
  updateMandataire(id: number, man: Mandataire): Observable<Mandataire>{
    const url=`${this.apiURL}/${id}`;
    return this.http.put<Mandataire>(url, man, httpOptions);

  }

}
