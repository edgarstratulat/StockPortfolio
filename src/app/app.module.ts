import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './stocks.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    StocksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
