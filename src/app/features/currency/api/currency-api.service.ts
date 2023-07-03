import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyApiService {
  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get<any>('/api/v1/cryptocurrency/listings/latest');
  }
}
