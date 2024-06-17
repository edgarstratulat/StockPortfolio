import { Component } from '@angular/core';
import { Stock } from './stock-model';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrl: './portfolio-table.component.css'
})
export class PortfolioTableComponent {
  stocks: Stock[] = [
    { symbol: 'MSFT', name: 'Microsoft', date:' 16/06/2024' , quantity: 20, price: 150},
    { symbol: 'TSLA', name: 'Tesla', date: '16/06/2024' , quantity: 50, price: 220},
  ];
}
