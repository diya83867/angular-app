import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', loadChildren: () => import('./modules/universal/universal.module').then(m => m.UniversalModule) },
];
