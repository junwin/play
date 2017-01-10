import { Component, OnInit } from '@angular/core';
import { LoggerService } from '..//logger.service';
import { OrdersService } from '..//orders.service';
import { Order } from '..//order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

   heroes: Order[];

  constructor(private service: OrdersService, private logger: LoggerService) { }

  ngOnInit() {
    this.service.getOrders();
    // this.heroes = this.service.getHeroes();
  }


  //selectHero(hero: Hero) { this.selectedHero = hero; }


}
