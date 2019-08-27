import {map} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from './model/products.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  constructor(private http: HttpClient) { }
  url = 'http://127.0.0.1:5000/products';

  getProducts(querryparams: string): Observable<RootObject> {
    return this
      .http
      .get(`${this.url}?${querryparams}`).pipe(
        map((data: any)  => new RootObject(
          data.data,
          data.links,
          data.meta,
          data.pager
        )),
      );
  }
}
