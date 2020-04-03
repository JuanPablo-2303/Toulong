import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      /*{
        path: 'register',
        children:[
          {
            path: '',
            loadChildren: () =>
              import('../../register/register.module').then(m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: 'login',
        children:[
          {
            path: '',
            loadChildren: () =>
              import('../../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },*/
      {
        path: 'home',
        children:[
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'card',
        children:[
          {
            path: '',
            loadChildren: () =>
              import('../card/card.module').then(m => m.CardPageModule)
          }
        ]
      },
      {
        path: 'map',
        children:[
          {
            path: '',
            loadChildren: () =>
              import('../map/map.module').then(m => m.MapPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
