import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteiraAcoesComponent } from './carteira-acoes/carteira-acoes.component';
import { FormsModule } from '@angular/forms';
import { DadosAcoesService } from './services/dados-acoes.service'; 
import { PortfolioService } from './services/portfolio.service'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarteiraAcoesComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DadosAcoesService, PortfolioService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
