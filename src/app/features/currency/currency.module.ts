import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CurrencyRoutingModule } from './currency.routing.module';
import { CurrencyApiService } from './api/currency-api.service';
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [CommonModule, NgOptimizedImage, FormsModule,CurrencyRoutingModule],
  providers: [CurrencyApiService],
})
export class CurrencyModule {}
