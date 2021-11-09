import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi = environment.urlApi;
  public collection$: Observable<Order[]>;

  constructor(private httpClient: HttpClient) {
    console.log('service orders instanced');
    this.collection$ = this.httpClient
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      );
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  public add(item: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, item);
  }
}
