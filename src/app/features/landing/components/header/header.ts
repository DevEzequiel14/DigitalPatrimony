import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { inject } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private viewportScroller = inject(ViewportScroller);

  isMenuOpen = signal(false);
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
    this.viewportScroller.scrollToAnchor(sectionId);
    this.isMenuOpen.set(false);
  }

  toggleLanguage() {
    //this.language.set(this.language() === 'es' ? 'en' : 'es');
  }
}
