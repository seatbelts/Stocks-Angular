import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockInterface } from '../../interfaces.stock/interfaces/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private testCase: number[] = [25, 36, 78, 14, 64, 27, 80];

  private maxProfit: number = 0;

  private buyDay: number = 0;

  private sellDay: number = 0;

  constructor() { }

  public stockAlgorithm(stocks?: number[]): Observable<boolean> {
    stocks = stocks || this.testCase;
    let minPrice = Math.max(...stocks);
    this.maxProfit = 0;
    for (let i = 0; i < stocks.length; i++) {
      if (stocks[i] < minPrice) {
        minPrice = stocks[i];
        this.buyDay = i;
      } else if (stocks[i] - minPrice > this.maxProfit) {
        this.maxProfit = stocks[i] - minPrice;
        this.sellDay = i;
      }
    }

    return of(true);
  }

  public stockInformation(): Observable<StockInterface> {
    return of({
      maxProfit: this.maxProfit || 'None',
      buyDay: this.maxProfit ? this.buyDay : 'None',
      sellDay: this.maxProfit ? this.sellDay : 'None',
    });
  }
}
