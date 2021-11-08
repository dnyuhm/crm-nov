import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string = 'list orders';
  public headers: string[];
  public collection!: Order[];

  constructor(private ordersService: OrdersService) {
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.ordersService.collection$.subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.myTitle = 'My list of orders';
  }
}
