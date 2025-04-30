import { PlantDataService } from './../plant-data.service';
import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { Plant } from '../plant-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-list',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {

  plants$ = new Observable<Plant[]>();

  constructor(private plantDataService: PlantDataService) {
    this.plants$ = this.plantDataService.getPlants$();
  }

}
