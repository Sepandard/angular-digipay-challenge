import { Component } from '@angular/core';
import { CurrencyApiService } from '../api/currency-api.service';

@Component({
  selector: 'digipay-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  constructor(private api: CurrencyApiService) {
    this.api.getData().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
