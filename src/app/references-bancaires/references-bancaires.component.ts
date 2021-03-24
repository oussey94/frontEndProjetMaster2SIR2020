import { Component, OnInit } from '@angular/core';
import {ReferenceBancaire} from "../model/referenceBancaire.model";
import {ReferencesBancairesService} from "../services/references-bancaires.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-references-bancaires',
  templateUrl: './references-bancaires.component.html',
  styleUrls: ['./references-bancaires.component.css']
})
export class ReferencesBancairesComponent implements OnInit {

  newReferenceBancaire= new ReferenceBancaire();
  referenceBancaires: ReferenceBancaire[];

  constructor(private referenceBancaireService: ReferencesBancairesService, private router: Router) { 
    

  }

  ngOnInit(): void {
    this.referenceBancaireService.listeReferencesBancaire().subscribe(ref => {
      console.log(ref);
      this.referenceBancaires=ref;
    });
  }

  addReferencesBancaires(){

    //console.log(this.newReferenceBancaire);
    this.referenceBancaireService.ajouterReferencesBancaire(this.newReferenceBancaire).subscribe(rep => {
      console.log(rep);
    });
    this.router.navigate(["reference"]).then(() => {
      window.location.reload();
    });
  }
  deleteReferencesBancaires(man: ReferenceBancaire){
    let conf= confirm("Etes-vous sur ?")
    if (conf)
    this.referenceBancaireService.supprimerReferencesBancaire(man.idReferenceBancaire).subscribe(ref => {
      console.log("référence bancaire supprimé");
      this.SupprimerRepDuTableau(man);
    });
  }

  SupprimerRepDuTableau(rep: ReferenceBancaire){
    this.referenceBancaires.forEach((cur,index) => {
      if(rep.idReferenceBancaire === cur.idReferenceBancaire){
        this.referenceBancaires.splice(index,1);
      }
    });
  }

}
