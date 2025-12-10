import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/lenguage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private languageService = inject(LanguageService);

  language = this.languageService.language;
  content = {
    es: {
      description:
        'Repositorio Digital Patrimonial - Preservando la historia arqueológica para las futuras generaciones',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      follow: 'Síguenos',
      rights: 'Todos los derechos reservados.',
      links: {
        home: 'Inicio',
        collection: 'Colección',
        catalog: 'Catálogo',
        about: 'Acerca de',
      },
    },
    en: {
      description:
        'Digital Heritage Repository - Preserving archaeological history for future generations',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      follow: 'Follow Us',
      rights: 'All rights reserved.',
      links: {
        home: 'Home',
        collection: 'Collection',
        catalog: 'Catalog',
        about: 'About',
      },
    },
  };

  currentContent = computed(() => this.content[this.language()]);
}
