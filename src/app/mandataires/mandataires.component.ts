import { Component, OnInit } from '@angular/core';
import {Mandataire} from "../model/mandataire.model";
import {MandatairesService} from "../services/mandataires.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-mandataires',
  templateUrl: './mandataires.component.html',
  styleUrls: ['./mandataires.component.css']
})
export class MandatairesComponent implements OnInit {

  mandataires: Mandataire[];
  newMandataire= new Mandataire();

  constructor(private mandataireService: MandatairesService, private router: Router) {

   }

  ngOnInit(): void {
    this.mandataireService.listeMandataire().subscribe(man => {
      console.log(man);
      this.mandataires=man;
    });
  }

  addMandataire(){
    this.mandataireService.ajouterMandataire(this.newMandataire).subscribe(man => {
      console.log(man);
    });
    this.router.navigate(["mandataire"]).then(() =>{
      window.location.reload();
    });
  }
  deleteMandataire(man: Mandataire){
    let conf= confirm("Etes-vous sur ?")
    if (conf)
    this.mandataireService.supprimerMandataire(man.idMandataire).subscribe(() => {
      console.log("representant supprimé");
      this.SupprimerRepDuTableau(man);
    });
  }

  SupprimerRepDuTableau(man: Mandataire){
    this.mandataires.forEach((cur,index) => {
      if(man.idMandataire === cur.idMandataire){
        this.mandataires.splice(index,1);
      }
    });
  }

}
