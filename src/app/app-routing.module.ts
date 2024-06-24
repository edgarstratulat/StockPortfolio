import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteiraAcoesComponent } from './carteira-acoes/carteira-acoes.component'; 

const routes: Routes = [
  // Rota para o componente CarteiraAcoesComponent
  { path: 'carteira', component: CarteiraAcoesComponent }, 
  // Rota default redirecionando para /carteira
  { path: '', redirectTo: '/carteira', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
