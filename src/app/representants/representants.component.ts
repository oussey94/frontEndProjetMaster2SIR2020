import { Component, OnInit } from '@angular/core';
import {Representant} from "../model/representants.model";
import {RepresentantsService} from "../services/representants.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-representants',
  templateUrl: './representants.component.html',
  styleUrls: ['./representants.component.css']
})
export class RepresentantsComponent implements OnInit {

  representants: Representant[];
  newRepresentant = new Representant();

  constructor(private representantService: RepresentantsService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.representantService.listRepresentants().subscribe(rep => {
      console.log(rep);
      this.representants=rep;
    });
  }

  addRepresentant(){
   // console.log(this.newRepresentant);
    this.representantService.ajouterRepresentant(this.newRepresentant).subscribe(rep =>{
      console.log(rep);
    });
    this.router.navigate(["representant"]).then(() =>{
      window.location.reload();
    });
}

deleteRepresentant(rep: Representant){
  //console.log(p);
  let conf = confirm("Etes-vous sur ?");
  if(conf)
    this.representantService.supprimerRepresentant(rep.idRepresentant).subscribe(() => {
      console.log("representant supprimé");
      this.SupprimerRepDuTableau(rep);
    });
}

SupprimerRepDuTableau(rep: Representant){
  this.representants.forEach((cur,index) => {
    if(rep.idRepresentant === cur.idRepresentant){
      this.representants.splice(index,1);
    }
  });
}

}
