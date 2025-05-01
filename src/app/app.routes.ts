import { Routes } from '@angular/router';
import { AboutComponent } from './presentation/about/about.component';
import { MaintainerComponent } from './presentation/maintainer/maintainer.component';
import { PlantDetailsComponent } from './presentation/plants/plant-details/plant-details.component';
import { PlantListComponent } from './presentation/plants/plant-list/plant-list.component';

export const routes: Routes = [
  {
    path: 'plants',
    component: PlantListComponent,
  },
  {
    path: 'plants/:id',
    component: PlantDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'maintainer',
    component: MaintainerComponent,
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
];
