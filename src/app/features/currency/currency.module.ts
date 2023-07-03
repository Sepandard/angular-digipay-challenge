import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency.routing.module';
import { CurrencyApiService } from './api/currency-api.service';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyPaginationComponent } from './currency-pagination/currency-pagination.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyFilterComponent } from './currency-filter/currency-filter.component';

@NgModule({
  declarations: [
    CurrencyComponent,
    CurrencyPaginationComponent,
    CurrencyListComponent,
    CurrencyFilterComponent,
    
  ],
  imports: [CommonModule, CurrencyRoutingModule],
  providers: [CurrencyApiService],
})
export class CurrencyModule {}
