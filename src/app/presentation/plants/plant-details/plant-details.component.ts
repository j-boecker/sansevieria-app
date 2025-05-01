import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plant-details',
  imports: [],
  templateUrl: './plant-details.component.html',
  styleUrl: './plant-details.component.scss',
})
export class PlantDetailsComponent {
  @Input() set id(heroId: string) {
    console.log('id', heroId);
  }
}
