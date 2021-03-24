import { Injectable } from '@angular/core';
import {Contribuable} from "../model/contribuable.model";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ContribuableService {

  apiURL: string = 'http://localhost:8080/contribuable/api1';

  contribuables: Contribuable[];

  constructor(private http: HttpClient) { }

  /*ajouterContribuable(man: Contribuable){
    this.contribuables.push(man);
  }*/
  ajouterContribuable(man: Contribuable): Observable<Contribuable>{
    return this.http.post<Contribuable>(this.apiURL, man, httpOptions);
  }


}
