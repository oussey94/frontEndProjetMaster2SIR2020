import { Component, OnInit } from '@angular/core';
import {Mandataire} from "../model/mandataire.model";
import {MandatairesService} from "../services/mandataires.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-mandataire',
  templateUrl: './update-mandataire.component.html',
  styleUrls: ['./update-mandataire.component.css']
})
export class UpdateMandataireComponent implements OnInit {

  currentMandataire= new Mandataire();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mandataireService: MandatairesService) { }

  ngOnInit(): void {
    this.mandataireService.consulterMandataire(this.activatedRoute.snapshot.params.id).subscribe(man => {
      this.currentMandataire=man;
    });
  }
  updateMandataire(){
    this.mandataireService.updateMandataire(this.activatedRoute.snapshot.params.id, this.currentMandataire).subscribe(man => {
      this.router.navigate(["mandataire"]);
    },
    (error) => {alert("Probléme lors de la modification"); });
    
  }

}
