import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private apiKey = '45f1803ea7084f679b5135a8052bfdff'; 
  private baseUrl = 'https://api.twelvedata.com';

  constructor(private http: HttpClient) { }

  getStockData(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/quote?symbol=${symbol}&apikey=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
