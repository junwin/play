import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
/*
import { ComposeMessageComponent }  from './compose-message.component';
import { PageNotFoundComponent }    from './not-found.component';

import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy }   from './selective-preloading-strategy';
*/
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
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/