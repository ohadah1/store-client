import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsDataService {
  public constructor(private http: HttpClient) {
  }

  public all(): Observable<Product[]> {
    let products: Observable<Product[]> = new Observable<Product[]>();
    this.http.get('http://localhost:3000/order', {responseType: 'text'}).subscribe(value => {
      products = JSON.parse(value);
    });
    return products;
  }

}
//
// return of([
//   {
//     'id': '9aa113b4-1e4e-4cde-bf9d-8358fc78ea4f',
//     'price': 3.50,
//     'name': 'Greens',
//     'description': 'Looking for simple, clean and green? Four of the most nutrient dense leafy greens create the base in our low-sugar Greens 1.'
//   },
//   {
//     'id': 'bdcbe438-ac85-4acf-8949-5627fd5b57df',
//     'price': 2.75,
//     'name': 'Citrus',
//     'description': 'This enzyme rich juice is filled with phytonutrients and bromelin which helps to reduce inflammation. Drink it before a meal to get digestive juices flowing.'
//   },
//   {
//     'id': '58552daa-30f6-46fa-a808-f1a1d7667561',
//     'price': 3,
//     'name': 'Roots',
//     'description': 'Beets help your body to release stomach acid which aids digestion! Drink this juice when you want a snack that\'s both pretty and nutritious!'
//   },
//   {
//     'id': 'd4666802-fd84-476f-9eea-c8dd29cfb633',
//     'price': 1.99,
//     'name': 'Orange',
//     'description': 'Orange juice with a twist to boost you health!'
//   },
//   {
//     'id': '7ef3b9dd-5a95-4415-af37-6871d6ff0262',
//     'price': 2.50,
//     'name': 'Coconut',
//     'description': 'Cinnamon lovers - this is your blend! Two nutritional powerhouses combine in a delicious, satiating elixir. Both cinnamon and coconut have been shown to reduce blood sugar. Raw coconut meat is a great source of medium chain fatty acids, which can lower bad cholesterol. Coconut also contains significant levels of fiber and manganese, a mineral that helps you metabolize fat and protein.'
//   }
// ] as Product[]
