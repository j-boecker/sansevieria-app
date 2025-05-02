import { Routes } from '@angular/router';
import { AboutComponent } from './presentation/about/about.component';
import { DisclaimerComponent } from './presentation/legal/disclaimer/disclaimer.component';
import { ImprintComponent } from './presentation/legal/imprint/imprint.component';
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
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
];
