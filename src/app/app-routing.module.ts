import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
  { path: '**', redirectTo: '/stock/a', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
