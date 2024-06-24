import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosAcoesService {
  private apiUrl = 'https://api.polygon.io/v2/aggs/ticker'; // api url 
  private apiKey = 'pRhRGycb9XGZcc4e3ATgycu4qDPxSnom'; // api key
  
  constructor(private http: HttpClient) {}

  getStockPrice(ticker: string): Observable<any> {
    // Obtemos a data atual no formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    //Combinamos o link para a API
    const url = `${this.apiUrl}/${ticker}/prev?apiKey=${this.apiKey}`;
    // Fazemos a requisição GET para a API
    return this.http.get<any>(url);
  }
}
