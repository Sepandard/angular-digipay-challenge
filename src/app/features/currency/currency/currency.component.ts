import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from '../api/currency-api.service';
import { Cryptocurrency } from '../api/currency-api.model';
import { finalize, map } from 'rxjs';

@Component({
  selector: 'digipay-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  public data: Cryptocurrency[] = [];
  public loading: boolean = false;
  private param = {};
  public isAsc: boolean = false;
  public enabledSort: string = '';
  public pagination = {
    pageIndex: 0,
    start: 0,
    limit: 100,
  };
  public totalCount!: number;

  constructor(private api: CurrencyApiService) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.api
      .getData(this.param)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: ({ data, status }) => {
          this.data = data;
          this.totalCount = status.total_count;
        },
        error: () => {},
      });
  }

  toggleSort(sortName: string) {
    this.enabledSort = sortName;
    Object.assign(this.param, { sort: sortName });
    this.getData();
  }

  toggleSortDirection() {
    this.isAsc = !this.isAsc;
    Object.assign(this.param, { sort_dir: this.isAsc ? 'asc' : 'desc' });
    this.getData();
  }

  handlePagination(pageIndex: number) {
    this.pagination.pageIndex = pageIndex;
    this.pagination.start =
      this.pagination.pageIndex !== 0
        ? (this.pagination.pageIndex + 1) * 100
        : 1;

    Object.assign(this.param, {
      start: this.pagination.start,
    });

    this.getData();
  }
}
