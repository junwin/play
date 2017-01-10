import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoggerService } from './logger.service';
import { OrdersService } from './orders.service';
import { OrderComponent } from './order/order.component';


const appRoutes: Routes = [
  {
    path: 'orders',
    component: OrderComponent,
    outlet: 'popup'
  },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' } 
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoggerService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
