import { Injectable } from '@angular/core';
import {ReferenceBancaire} from "../model/referenceBancaire.model";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ReferencesBancairesService {

  apiURL: string='http://localhost:8080/contribuable/api4';

  referenceBancaires: ReferenceBancaire[];

  constructor(private http: HttpClient) {
    /*this.referenceBancaires=[
       {
        idReferenceBancaire: 1,
        banqueReferenceBancaire: "BIS",
        codeBanqueReferenceBancaire: "SN144",
        codeguichetReferenceBancaire: 124566,
        numCompteReferenceBancaire: 12345670987,
        cleReferenceBancaire: 123
       },
       {
        idReferenceBancaire: 2,
        banqueReferenceBancaire: "BOA",
        codeBanqueReferenceBancaire: "SN198",
        codeguichetReferenceBancaire: 12999,
        numCompteReferenceBancaire: 298765435,
        cleReferenceBancaire: 987
       }

    ];*/
   }


  /*listeReferencesBancaire(): ReferenceBancaire[] {
    return this.referenceBancaires;
  }*/
  listeReferencesBancaire(): Observable<ReferenceBancaire[]>{
    return this.http.get<ReferenceBancaire[]>(this.apiURL);
  }

  /*ajouterReferencesBancaire(man: ReferenceBancaire){
    this.referenceBancaires.push(man);
  }*/
  ajouterReferencesBancaire(man: ReferenceBancaire): Observable<ReferenceBancaire>{
    return this.http.post<ReferenceBancaire>(this.apiURL, man, httpOptions);
  }

  /*supprimerReferencesBancaire(man: ReferenceBancaire){
    const index=this.referenceBancaires.indexOf(man,0);
    if (index > -1){
      this.referenceBancaires.splice(index, 1);
    }
  }*/
  supprimerReferencesBancaire(id: number){
    const url=`${this.apiURL}/${id}`;
    return this.http.delete(url);
  }

  /*consulterReferencesBancaire(id: number): ReferenceBancaire{
    return this.referenceBancaires.find(p=>p.idReferenceBancaire==id);

  }*/
  consulterReferencesBancaire(id: number): Observable<ReferenceBancaire>{
    const url=`${this.apiURL}/${id}`;
    return this.http.get<ReferenceBancaire>(url);

  }

  /*trierReferencesBancaire(){

    this.referenceBancaires=this.referenceBancaires.sort((n1,n2)=>{
      if(n1.idReferenceBancaire > n2.idReferenceBancaire){
        return 1;
      }
      if(n1.idReferenceBancaire < n2.idReferenceBancaire){
        return -1;
      }
      return 0;
    }
    );
}*/
  

  /*updateReferencesBancaire(man: ReferenceBancaire){
    this.supprimerReferencesBancaire(man);
    this.ajouterReferencesBancaire(man);
    this.trierReferencesBancaire();
  }*/
  updateReferencesBancaire(id: number, man: ReferenceBancaire): Observable<ReferenceBancaire>{
    const url=`${this.apiURL}/${id}`;
    return this.http.put<ReferenceBancaire>(url, man, httpOptions);

  }

}
