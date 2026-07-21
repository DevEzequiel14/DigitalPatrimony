import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import {
  CardComponent,
  CardContentComponent,
} from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';
import { TranslationService } from '../../../../core/services/translation.service';

interface NewsSlide {
  id: number;
  image: string;
  titleKey: string;
  dateKey: string;
  categoryKey: string;
  descriptionKey: string;
  linkUrl?: string;
  linkLabelKey?: string;
}

const NEWS_IMAGES = [
  'ancient-pottery-discovery-archaeological-site.jpg',
  'ancient-manuscripts-historical-documents-digitizat.jpg',
  'precolumbian-textiles-ancient-weaving-patterns.jpg',
] as const;

const NEWS_LINKS: Record<number, string> = {
  3: 'https://revistas.unc.edu.ar/index.php/comechingonia/article/view/47951',
};

@Component({
  selector: 'app-news-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, CardComponent, CardContentComponent, Button],
  templateUrl: './news-section.html',
  styleUrl: './news-section.css',
})
export class NewsAgendaSectionComponent {
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;
  readonly currentNewsIndex = signal(0);

  readonly newsItems: NewsSlide[] = Array.from({ length: 7 }, (_, index) => {
    const id = index + 1;
    const key = `n${id}`;
    const slide: NewsSlide = {
      id,
      image: NEWS_IMAGES[index % NEWS_IMAGES.length],
      titleKey: `news.items.${key}.title`,
      dateKey: `news.items.${key}.date`,
      categoryKey: `news.items.${key}.category`,
      descriptionKey: `news.items.${key}.description`,
    };

    if (NEWS_LINKS[id]) {
      slide.linkUrl = NEWS_LINKS[id];
      slide.linkLabelKey = `news.items.${key}.linkLabel`;
    }

    return slide;
  });

  readonly currentNews = computed(
    () => this.newsItems[this.currentNewsIndex()]
  );

  nextNews() {
    this.currentNewsIndex.update((i) => (i + 1) % this.newsItems.length);
  }

  prevNews() {
    this.currentNewsIndex.update(
      (i) => (i - 1 + this.newsItems.length) % this.newsItems.length
    );
  }
}
