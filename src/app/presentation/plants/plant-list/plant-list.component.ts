import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Plant } from '../../../data/models/plant-model';
import { PlantDataService } from '../../../data/plant-data.service';
import { getPfennigNumber } from '../../utils/utils';

@Component({
  selector: 'app-plant-list',
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss',
})
export class PlantListComponent implements OnInit {
  plants$ = new Observable<Plant[]>();

  constructor(private plantDataService: PlantDataService) {}
  ngOnInit(): void {
    this.plants$ = this.plantDataService.getPlants$();
  }

  getPfennigNumber(pfennigNumber: number): string {
    return getPfennigNumber(pfennigNumber);
  }
}
