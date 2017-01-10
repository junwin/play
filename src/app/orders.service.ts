import { Injectable } from '@angular/core';
import { Order} from './Order';
import { LoggerService } from './logger.service';

@Injectable()
export class OrdersService {

  private orders: Order[] = [];

  constructor(private logger: LoggerService) { }

  getOrders() {
    
    //this.orders.push(...heroes); // fill cache
    return this.orders;
  }


}
