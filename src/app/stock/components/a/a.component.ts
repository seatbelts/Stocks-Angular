import { Component } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss'
})
export class AComponent {

  constructor(
    private stockService: StockService,
    private router: Router
  ) {}

  navigateToB() {
    this.stockService.stockAlgorithm();
    this.router.navigate(['/stock/b']);
  }

}
