import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './components/b/b.component';
import { AComponent } from './components/a/a.component';
import { StockService } from './services/stock.service';
import { StockRoutingModule } from './stock-routing.module';



@NgModule({
  declarations: [
    BComponent,
    AComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule
  ],
  providers: [
    StockService
  ]
})
export class StockModule { }
