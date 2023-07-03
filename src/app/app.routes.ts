import { Route } from '@angular/router';
import { LayoutComponent } from '@app/core/components';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'currency',
        loadChildren: () =>
          import('./features/currency/currency.module').then(
            (m) => m.CurrencyModule
          ),
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ],
  },
];
