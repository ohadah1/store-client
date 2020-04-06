import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OrdersService {
  public orders: any = [];
  constructor(private http: HttpClient) {
  }

  public getAllOrders() {
    return this.http.get('http://strore-lb-439c1c049323e3b1.elb.us-east-1.amazonaws.com:3000/order', {responseType: 'json'})
  }

  public newOrder(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json',
      })
    };
    this.http.post('http://strore-lb-439c1c049323e3b1.elb.us-east-1.amazonaws.com:3000/order', {responseType: 'json'}, httpOptions).subscribe(orders => {
      this.orders = orders;
    });
  }
}
