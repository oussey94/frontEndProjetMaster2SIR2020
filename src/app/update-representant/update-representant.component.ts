import { Component, OnInit } from '@angular/core';
import {Representant} from "../model/representants.model"
import {RepresentantsService} from "../services/representants.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-representant',
  templateUrl: './update-representant.component.html',
  styleUrls: ['./update-representant.component.css']
})
export class UpdateRepresentantComponent implements OnInit {

  currentRepresentant = new Representant();

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private representantService: RepresentantsService) { }

  ngOnInit(): void {
    this.representantService.consulterRepresentant(this.activatedRoute.snapshot.params.id).subscribe(rep => {
      this.currentRepresentant=rep;
    });
  }

  updateRepresentant(){
    //console.log(this.currentRepresentant);
    
    this.representantService.updateRepresentant(this.activatedRoute.snapshot.params.id,this.currentRepresentant).subscribe(rep => {
      this.router.navigate(["representant"]);
    },
    (error) => {alert("Probléme lors de la modification"); });
  }

  

}
