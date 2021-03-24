import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {ContribuableComponent} from "./contribuable/contribuable.component";
import {DispositionGeneralesComponent} from "./disposition-generales/disposition-generales.component";
import {RepresentantsComponent } from "./representants/representants.component";
import {UpdateRepresentantComponent} from "./update-representant/update-representant.component";
import {MandatairesComponent} from "./mandataires/mandataires.component";
import {UpdateMandataireComponent} from "./update-mandataire/update-mandataire.component";
import {ReferencesBancairesComponent} from "./references-bancaires/references-bancaires.component";
import {UpdateReferencesBancairesComponent} from "./update-references-bancaires/update-references-bancaires.component";

const routes: Routes = [
  
  {path: "contribuable", component : ContribuableComponent},
  {path: "disposition", component : DispositionGeneralesComponent},
  {path: "representant", component : RepresentantsComponent},
  {path: "mandataire", component : MandatairesComponent},
  {path: "reference", component : ReferencesBancairesComponent},

  {path: "updatemandataire/:id",  component: UpdateMandataireComponent},
  {path: "updatereference/:id",  component: UpdateReferencesBancairesComponent},
  {path: "updaterepresentant/:id",  component: UpdateRepresentantComponent},
  { path: "", redirectTo: "disposition", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
