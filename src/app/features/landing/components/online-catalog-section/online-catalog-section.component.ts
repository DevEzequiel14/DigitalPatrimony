import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-online-catalog-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './online-catalog-section.component.html',
  styleUrls: ['./online-catalog-section.component.css'],
  imports: [CardComponent, Button],
})
export class OnlineCatalogSectionComponenet {
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;

  readonly paragraphKeys = [
    'catalog.paragraphs.p1',
    'catalog.paragraphs.p2',
    'catalog.paragraphs.p3',
    'catalog.paragraphs.p4',
    'catalog.paragraphs.p5',
  ];
}
