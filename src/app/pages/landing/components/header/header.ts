import { Component, signal } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';


@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Controla el menú móvil
  isMenuOpen = signal(false);

  // Esto luego lo reemplazarás con Angular Translate
  language = signal<'es' | 'en'>('es');

  navItems = signal([
    { id: 'noticias', labelEs: 'Noticias', labelEn: 'News' },
    { id: 'historia', labelEs: 'Historia', labelEn: 'History' },
    { id: 'piezas-destacadas', labelEs: 'Piezas Destacadas', labelEn: 'Featured Pieces' },
    { id: 'catalogo', labelEs: 'Catálogo', labelEn: 'Catalog' },
    { id: 'colaboradores', labelEs: 'Colaboradores', labelEn: 'Collaborators' },
    { id: 'instituciones', labelEs: 'Instituciones', labelEn: 'Institutions' },
  ]);

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen.set(false);
  }

  // El botón está, pero no cambia el idioma (lo implementarás después)
  toggleLanguage() {
    console.log('Aquí luego llamarás a translate.use(...)');
  }
}
