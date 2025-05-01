import { Routes } from '@angular/router';
import { AboutComponent } from './presentation/about/about.component';
import { PlantListComponent } from './presentation/plant-list/plant-list.component';

export const routes: Routes = [
  {
    path: 'plants',
    component: PlantListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
];
