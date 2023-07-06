import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from '../api/currency-api.service';
import { Cryptocurrency } from '../api/currency-api.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'digipay-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  data: Cryptocurrency[] = [];
  loading = false;
  param = {
    sort: 'market_cap',
    sort_dir: 'desc',
    start: 1,
  };
  isAsc = false;
  enabledSort = '';
  message = '';
  pagination = {
    pageIndex: 0,
    start: 0,
    limit: 100,
  };

  totalCount = 0;

  constructor(
    private api: CurrencyApiService,

  ) {}

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    this.loading = true;
    this.api
      .getDataList(this.param)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: ({ data, status }) => {
          this.data = data;
          this.totalCount = status.total_count;
        },
        error: (err) => {
          this.message = err;
        },
      });
  }


  toggleSort(sortName: string) {
    this.enabledSort = sortName;
    this.param = { ...this.param, sort: sortName };
    this.getDataList();
  }

  toggleSortDirection() {
    this.isAsc = !this.isAsc;
    this.param = { ...this.param, sort_dir: this.isAsc ? 'asc' : 'desc' };
    this.getDataList();
  }

  handlePagination(pageIndex: number) {
    this.pagination.pageIndex = pageIndex;
    this.pagination.start = pageIndex !== 0 ? (pageIndex + 1) * 100 : 1;
    this.param = { ...this.param, start: this.pagination.start };
    this.getDataList();
  }

}
