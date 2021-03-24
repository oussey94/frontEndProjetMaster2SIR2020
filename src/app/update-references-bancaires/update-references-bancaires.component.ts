import { Component, OnInit } from '@angular/core';
import {ReferenceBancaire} from "../model/referenceBancaire.model";
import {ReferencesBancairesService} from "../services/references-bancaires.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-update-references-bancaires',
  templateUrl: './update-references-bancaires.component.html',
  styleUrls: ['./update-references-bancaires.component.css']
})
export class UpdateReferencesBancairesComponent implements OnInit {

  currentReferenceBancaire= new ReferenceBancaire();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private referenceBancaireService: ReferencesBancairesService) { }

  ngOnInit(): void {
    this.referenceBancaireService.consulterReferencesBancaire(this.activatedRoute.snapshot.params.id).subscribe(ref => {
      this.currentReferenceBancaire=ref;
    });
  }

  updateReferenceBancaire(){
    this.referenceBancaireService.updateReferencesBancaire(this.activatedRoute.snapshot.params.id, this.currentReferenceBancaire).subscribe(ref =>{
      this.router.navigate(["reference"]);

    },
    (error) => {alert("Probléme lors de la modification"); });
    
    
  }

}
