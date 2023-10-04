import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FicheDeProduitsComponent } from './fiche-de-produits/fiche-de-produits.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoComponent } from './photo/photo.component';
import { DescriptionComponent } from './description/description.component';
import { PrixComponent } from './prix/prix.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ProductListComponent,
    FicheDeProduitsComponent,
    FooterComponent,
    PhotoComponent,
    DescriptionComponent,
    PrixComponent,
    LienDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
