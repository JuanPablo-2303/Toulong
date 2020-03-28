import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
