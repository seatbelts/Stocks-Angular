import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './components/b/b.component';
import { AComponent } from './components/a/a.component';
import { StockService } from './services/stock.service';



@NgModule({
  declarations: [
    BComponent,
    AComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StockService
  ]
})
export class StockModule { }