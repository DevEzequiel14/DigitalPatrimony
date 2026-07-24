import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import {
  CardComponent,
  CardContentComponent,
} from '../../../../shared/components/card/card';
import { TranslationService } from '../../../../core/services/translation.service';

interface FeaturedPiece {
  id: number;
  image: string;
  titleKey: string;
  periodKey: string;
  categoryKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-featured-items-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './featured-items-section.component.html',
  styleUrls: ['./featured-items-section.component.css'],
  imports: [Button, CardComponent, CardContentComponent, NgClass],
})
export class FeaturedItemsSectionComponent implements OnDestroy {
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;

  readonly featuredPieces: FeaturedPiece[] = [
    {
      id: 1,
      image: 'pieceOne.webp',
      titleKey: 'featured.pieces.p1.title',
      periodKey: 'featured.pieces.p1.period',
      categoryKey: 'featured.pieces.p1.category',
      descriptionKey: 'featured.pieces.p1.description',
    },
    {
      id: 2,
      image: 'pieceTwo.webp',
      titleKey: 'featured.pieces.p2.title',
      periodKey: 'featured.pieces.p2.period',
      categoryKey: 'featured.pieces.p2.category',
      descriptionKey: 'featured.pieces.p2.description',
    },
    {
      id: 3,
      image: 'pieceThree.webp',
      titleKey: 'featured.pieces.p3.title',
      periodKey: 'featured.pieces.p3.period',
      categoryKey: 'featured.pieces.p3.category',
      descriptionKey: 'featured.pieces.p3.description',
    },
    {
      id: 4,
      image: 'pieceFour.webp',
      titleKey: 'featured.pieces.p4.title',
      periodKey: 'featured.pieces.p4.period',
      categoryKey: 'featured.pieces.p4.category',
      descriptionKey: 'featured.pieces.p4.description',
    },
  ];

  readonly itemsPerSlide = 4;
  readonly totalSlides = Math.ceil(this.featuredPieces.length / this.itemsPerSlide);
  readonly totalSlidesArray = Array.from({ length: this.totalSlides });

  readonly currentSlide = signal(0);
  readonly isAutoPlaying = signal(true);

  private intervalId: ReturnType<typeof setInterval> | undefined;

  constructor() {
    effect(() => {
      if (!this.isAutoPlaying()) return;

      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.nextSlide(true);
      }, 6000);
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.pauseAutoPlay();
  }

  nextSlide(fromInterval = false) {
    this.currentSlide.update((i) => (i + 1) % this.totalSlides);
    if (!fromInterval) this.pauseAutoPlay();
  }

  prevSlide() {
    this.currentSlide.update((i) => (i - 1 + this.totalSlides) % this.totalSlides);
    this.pauseAutoPlay();
  }

  pauseAutoPlay() {
    this.isAutoPlaying.set(false);
    setTimeout(() => this.isAutoPlaying.set(true), 10000);
  }

  getSlideItems(slideIndex: number) {
    const startIndex = slideIndex * this.itemsPerSlide;
    return this.featuredPieces.slice(startIndex, startIndex + this.itemsPerSlide);
  }

  progressBarWidth() {
    return `${((this.currentSlide() + 1) / this.totalSlides) * 100}%`;
  }

  onButtonKeydown(_event: KeyboardEvent): void {}
}
