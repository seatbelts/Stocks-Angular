import { Component } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss'
})
export class AComponent {

  public stocksValues: string = '';
  private stocksArray: number[] = [];

  constructor(
    private stockService: StockService,
    private router: Router
  ) {}

  navigateToB() {
    if (!!this.stocksValues) {
      this.stocksArray = this.stocksValues.split(',').map((num: string) => parseInt(num, 10));
      const areAllNumbers = this.stocksArray.every(element => typeof element === 'number' && !isNaN(element));
      if (!areAllNumbers) {
        this.stocksArray = [];
      }
    }
    this.stockService.stockAlgorithm(this.stocksArray);
    this.router.navigate(['/stock/b']);
  }

}
