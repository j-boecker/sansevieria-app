import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import translationDE from '../assets/i18n/de.json';
import translationEN from '../assets/i18n/en.json';
import { NavbarComponent } from './presentation/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sansevieria-pf';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setTranslation('en', translationEN);
    this.translate.setTranslation('de', translationDE);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
