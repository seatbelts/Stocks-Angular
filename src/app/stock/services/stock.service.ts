import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockInterface } from '../../interfaces.stock/interfaces/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private initialTestCase: number[] = [25, 36, 78, 14, 64, 27, 80];

  private testCase: number[] = [];

  private maxProfit: number = 0;

  private buyDay: number = 0;

  private sellDay: number = 0;

  constructor() { }

  public stockAlgorithm(stocks?: number[]): void {
    this.testCase = stocks?.length ? stocks : this.initialTestCase;
    let minPrice = this.testCase[0];
    this.maxProfit = 0;
    this.sellDay = 0;
    this.buyDay = 0;
    for (let i = 0; i < this.testCase.length; i++) {
      if ((this.testCase[i] < minPrice) && (i < this.testCase.length - 1)) {
        minPrice = this.testCase[i];
        this.buyDay = i;
      } else if ((this.testCase[i] - minPrice) > this.maxProfit) {
        this.maxProfit = this.testCase[i] - minPrice;
        this.sellDay = i;
      }
    }
  }

  public stockInformation(): Observable<StockInterface> {
    if (!this.testCase.length) {
      this.stockAlgorithm();
    }

    return of({
      stocksValues: this.testCase,
      maxProfit: this.maxProfit || 'None',
      buyDay: this.maxProfit ? this.buyDay : 'None',
      sellDay: this.maxProfit ? this.sellDay : 'None',
    });
  }
}
