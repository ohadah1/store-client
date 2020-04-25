import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductsDataService {
  public constructor(private http: HttpClient) {
  }

  public all(): Observable<any> {
    return this.http.get('web-server-lb-288062596.us-east-1.elb.amazonaws.com:3000/product', {responseType: 'json'});
  }

  public delete(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        responseType: 'json'
      }),
    };
    return this.http.post('web-server-lb-288062596.us-east-1.elb.amazonaws.com:3000/product/delete', {id}, {responseType: 'json'});
  }

  public save(product: Product): Observable<any> {
    return this.http.post('web-server-lb-288062596.us-east-1.elb.amazonaws.com:3000/product', product, {responseType: 'json'});
  }
}
