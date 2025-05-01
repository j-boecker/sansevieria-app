import { Routes } from '@angular/router';
import { PlantListComponent } from './plants/plant-list/plant-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: 'plants',
        component: PlantListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    }
];
