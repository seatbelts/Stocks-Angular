import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Observable } from 'rxjs';
import { StockInterface } from '../../../interfaces.stock/interfaces/stock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss'
})
export class BComponent implements OnInit {

  public stockInformation$: Observable<StockInterface> | undefined;

  constructor(
    private router: Router,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.stockInformation$ = this.stockService.stockInformation();
  }

  navigateToA() {
    this.router.navigate(['/stock/a']);
  }

}
