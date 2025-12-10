import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/lenguage.service';

@Component({
  selector: 'app-institutions-section',
  templateUrl: './institutions-section.component.html',
  styleUrls: ['./institutions-section.component.css'],
})
export class InstitutionsSectionComponent {

  private languageService = inject(LanguageService);
  language = this.languageService.language();

  content = {
    es: {
      title: 'Instituciones Gestantes',
      subtitle: 'Conoce las instituciones que hicieron posible este proyecto',
    },
    en: {
      title: 'Partner Institutions',
      subtitle: 'Meet the institutions that made this project possible',
    },
  };

}
