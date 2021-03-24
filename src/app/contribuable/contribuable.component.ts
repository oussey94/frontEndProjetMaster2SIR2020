import { Component, OnInit } from '@angular/core';
import {Contribuable} from "../model/contribuable.model";
import {ContribuableService} from "../services/contribuable.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-contribuable',
  templateUrl: './contribuable.component.html',
  styleUrls: ['./contribuable.component.css']
})
export class ContribuableComponent implements OnInit {

  newContribuable= new Contribuable();  //tableau de contribuable

  constructor(private contribuableService: ContribuableService ,private router: Router) { }

  ngOnInit(): void {
  }
  addContribuable(){
   // console.log(this.newContribuable);
   this.contribuableService.ajouterContribuable(this.newContribuable).subscribe(cont =>{
     console.log(cont);
    
   });
   this.router.navigate(["contribuable"]).then(() =>{
     window.location.reload();
   });
}

}
