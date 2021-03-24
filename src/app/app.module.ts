import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContribuableComponent } from './contribuable/contribuable.component';
import { DispositionGeneralesComponent } from './disposition-generales/disposition-generales.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RepresentantsComponent } from './representants/representants.component';
import { UpdateRepresentantComponent } from './update-representant/update-representant.component';
import { MandatairesComponent } from './mandataires/mandataires.component';
import { UpdateMandataireComponent } from './update-mandataire/update-mandataire.component';
import { ReferencesBancairesComponent } from './references-bancaires/references-bancaires.component';
import { UpdateReferencesBancairesComponent } from './update-references-bancaires/update-references-bancaires.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ContribuableComponent,
    DispositionGeneralesComponent,
    RepresentantsComponent,
    UpdateRepresentantComponent,
    MandatairesComponent,
    UpdateMandataireComponent,
    ReferencesBancairesComponent,
    UpdateReferencesBancairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
