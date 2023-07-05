import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CurrencyRoutingModule } from './currency.routing.module';
import { CurrencyApiService } from './api/currency-api.service';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [CommonModule, NgOptimizedImage, CurrencyRoutingModule],
  providers: [CurrencyApiService],
})
export class CurrencyModule {}
