import { Injectable } from '@angular/core';
import { Plant } from './plant-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantDataService {

  private mockPlants: Plant[] = [
    {
      id: '1',
      name: 'Rose',
      latinName: 'Rosa',
      imageUrl: 'https://example.com/rose.jpg',
      description: 'A beautiful flower with thorns.'
    },
    {
      id: '2',
      name: 'Tulip',
      latinName: 'Tulipa',
      imageUrl: 'https://example.com/tulip.jpg',
      description: 'A spring-blooming perennial herb.'
    }
  ];
  constructor() { }

  public getPlants$(): Observable<Plant[]> {

    return of(this.mockPlants);
  }
}
