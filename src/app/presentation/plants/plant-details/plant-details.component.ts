import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FileData, PlantDetails } from '../../../data/models/plant-model';
import { PlantDataService } from '../../../data/plant-data.service';
import { getPfennigNumber } from '../../utils/utils';

@Component({
  selector: 'app-plant-details',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './plant-details.component.html',
  styleUrl: './plant-details.component.scss',
})
export class PlantDetailsComponent {
  @Input() set id(id: string) {
    this.plant$ = this.plantDataService.getPlantById$(id);
  }

  plant$ = new Observable<PlantDetails>();

  constructor(
    private plantDataService: PlantDataService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  getPfennigNumber(pfennigNumber: number): string {
    return getPfennigNumber(pfennigNumber);
  }

  getPdfDocuments(
    fileData: FileData[],
  ): { name: string; url: SafeResourceUrl }[] {
    const pdfDocuments = fileData.filter((pf) => pf.fileType === 1);
    return pdfDocuments.map((pf) => ({
      name: pf.fileName,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(pf.publicUrl),
    }));
  }
}
