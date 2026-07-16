import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Button } from '../../../../shared/components/button/button';
import { LanguageService } from '../../../../core/services/lenguage.service';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly viewportScroller = inject(ViewportScroller);
  private readonly languageService = inject(LanguageService);
  private readonly translationService = inject(TranslationService);

  readonly isMenuOpen = signal(false);
  readonly language = this.languageService.language;
  readonly t = this.translationService.t;

  readonly navItems = [
    { id: 'noticias', labelKey: 'header.nav.news' },
    { id: 'historia', labelKey: 'header.nav.history' },
    { id: 'piezas-destacadas', labelKey: 'header.nav.featured' },
    { id: 'catalogo', labelKey: 'header.nav.catalog' },
    { id: 'colaboradores', labelKey: 'header.nav.collaborators' },
    { id: 'instituciones', labelKey: 'header.nav.institutions' },
  ];

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.isMenuOpen.set(false);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
