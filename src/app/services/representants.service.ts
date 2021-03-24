import { Injectable } from '@angular/core';
import {Representant} from "../model/representants.model";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class RepresentantsService {
  apiURL: string='http://localhost:8080/contribuable/api2';

  representants : Representant[];
 // representant : Representant;

  constructor(private http: HttpClient) { 
    /*this.representants=[
      {idRepresentant: 1,
      prenomRepresentant: "oussey",
      nomRepresentant: "mbodj",
      civiliteRepresentant: "M.",
      fonctionRepresentant: "informaticien",
      emailRepresentant: "mbodji@gamil.com",
      telephoneFixeRepresentant: 338290087,
      posteRepresentant: 23000,
      telephoneMobileRepresentant: 778196578,
      habilitationRepresentant: "habilitation"},
      {idRepresentant: 2,
        prenomRepresentant: "fallou",
        nomRepresentant: "diouf",
        civiliteRepresentant: "M.",
        fonctionRepresentant: "informaticien",
        emailRepresentant: "fallou@gamil.com",
        telephoneFixeRepresentant: 338292287,
        posteRepresentant: 25000,
        telephoneMobileRepresentant: 775196578,
        habilitationRepresentant: "oui oui"}
    ];*/
  }

  /*listRepresentants():Representant[] {
    return this.representants;
  }*/
  listRepresentants(): Observable <Representant[]>{
    return this.http.get<Representant[]>(this.apiURL);
  }

  /*ajouterRepresentant( rep: Representant){
    this.representants.push(rep);
}*/
ajouterRepresentant(rep: Representant): Observable<Representant>{
  return this.http.post<Representant>(this.apiURL, rep, httpOptions);
}
 
  /*supprimerRepresentant(rep: Representant){
    const index = this.representants.indexOf(rep,0);
    if (index > -1){
      this.representants.splice(index, 1);
    }
  }*/
  supprimerRepresentant(id: number) {
    const url=`${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  /*consulterRepresentant(id:number): Representant{
    this.representant = this.representants.find(p => p.idRepresentant == id);
    return this.representant;
    }*/
    consulterRepresentant(id:number): Observable<Representant>{
      const url=`${this.apiURL}/${id}`;
      return this.http.get<Representant>(url);
    }

    /*trierRepresentant(){
      this.representants = this.representants.sort((n1,n2) => {
        if (n1.idRepresentant > n2.idRepresentant) {
            return 1;
        }
       if (n1.idRepresentant < n2.idRepresentant) {
         return -1; 
        }
        
        return 0; }
        );
}*/

    /*updateRepresentant(rep: Representant) {
      this.supprimerRepresentant(rep);
      this.ajouterRepresentant(rep);
      this.trierRepresentant();
    }*/
    updateRepresentant(id:number, rep: Representant): Observable<Representant>{
      const url=`${this.apiURL}/${id}`;

      return this.http.put<Representant>(url, rep, httpOptions);
    }
}
