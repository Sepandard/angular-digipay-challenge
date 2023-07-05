import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyEndpoint } from './currency-api.endpoint';
import { Cryptocurrency } from './currency-api.model';
import { DigiHttpResponse } from '@app/core/types/response.type';

@Injectable()
export class CurrencyApiService {
  constructor(private http: HttpClient) {}

  public getData(param: any) {
    return this.http.get<DigiHttpResponse<Cryptocurrency>>(
      CurrencyEndpoint.ticker,
      {
        params: new HttpParams({
          fromObject: {
            ...param,
          },
        }),
      }
    );
  }
}
