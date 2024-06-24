import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private jsonUrl = 'assets/carteira-acoes.json'; // ajuste conforme o caminho do seu JSON

  constructor(private http: HttpClient) {}

  // Método para obter o portfólio, retorna um Observable
  getPortfolio(): Observable<any> {
    // Realiza uma requisição HTTP GET para o caminho especificado e retorna os dados
    return this.http.get<any>(this.jsonUrl);
  }
}
