import { Component, OnInit } from '@angular/core';
import { DadosAcoesService } from '../services/dados-acoes.service';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-carteira-acoes',
  templateUrl: './carteira-acoes.component.html',
  styleUrls: ['./carteira-acoes.component.css']
})
export class CarteiraAcoesComponent implements OnInit {
  //Array de açoes no portfolio
  stocks: any[] = [];
  buscarPrecoAtualTimeout: any; 
  loading: boolean = true;

  constructor(
    private dadosAcoesService: DadosAcoesService,
    private portfolioService: PortfolioService
  ) {}

  // Método para chamar o componente ao iniciar
  ngOnInit() {
    this.portfolioService.getPortfolio().subscribe(data => {
      console.log('Portfolio data:', data); // Log para verificar os dados recebidos
      this.stocks = data;
      this.stocks.forEach(stock => this.buscarPrecoAtual(stock));
      this.loading = false;
    });
  }

  //Metodo para buscar o preco atual
  buscarPrecoAtual(stock: any) {
    if (!stock.ticker) {
      stock.precoAtual = null;
      return;
    }

    clearTimeout(this.buscarPrecoAtualTimeout);

    this.buscarPrecoAtualTimeout = setTimeout(() => {
      stock.ticker = stock.ticker.toUpperCase();
      console.log('Buscando preço atual para:', stock.ticker); // Log de depuração

      this.dadosAcoesService.getStockPrice(stock.ticker).subscribe(
        (response: any) => {
          console.log('Resposta da API para', stock.ticker, ':', response); // Log de depuração
          const precoAtual = response.results[0].vw;
          stock.precoAtual = precoAtual;
        },
        (error: any) => {
          console.error('Erro a procurar o preço atual da ação:', error); // Log de erro
        }
      );
    }, 500); // Delay de 500ms
  }

  // Método para remover uma ação no portfólio
  removerAcao(index: number) {
    const confirmarRemocao = confirm("Tem certeza de que deseja remover esta ação do portfólio?");
    if (confirmarRemocao) {
      if (this.stocks.length > 1) {
        this.stocks.splice(index, 1);
      } else {
        const stock = this.stocks[0];
        stock.ticker = '';
        stock.precoMedio = null;
        stock.quantidade = null;
        stock.precoAtual = null;
      }
    }
  }

  // Método para adicionar uma nova ação ao portfólio
  adicionarAcao() {
    if (this.stocks.length >= 8) {
      console.log('Limite máximo de ações atingido.');
      return;
    }

    const hoje = new Date();
    const dd = String(hoje.getDate()).padStart(2, '0');
    const mm = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const yyyy = hoje.getFullYear();

    const dataAtual = `${yyyy}-${mm}-${dd}`;

    const novaAcao = {
      ticker: '',
      precoMedio: null,
      quantidade: null,
      precoAtual: null,
      dataCompra: dataAtual // Atribui a data atual à nova ação
    };

    this.stocks.push(novaAcao);
    console.log('Nova ação adicionada:', novaAcao); // Log de depuração
  }

  // Método para calcular o lucro em euros
  calcularLucroEuro(stock: any): number {
    if (stock.precoAtual && stock.precoMedio && stock.quantidade) {
      return (stock.precoAtual - stock.precoMedio) * stock.quantidade;
    } else {
      return 0;
    }
  }

  // Método para calcular o lucro em porcentagem
  calcularLucroPercentagem(stock: any): number {
    const lucroPercentagem = ((stock.precoAtual / stock.precoMedio) - 1) * 100;
    return Number.isFinite(lucroPercentagem) ? parseFloat(lucroPercentagem.toFixed(2)) : 0;
  }

  // Método para calcular o total investido
  calcularTotalInvestido(stock: any): number {
    return stock.quantidade * stock.precoMedio;
  }

}
