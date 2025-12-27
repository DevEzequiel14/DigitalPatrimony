import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { CardComponent, CardContentComponent } from '../../../../shared/components/card/card';

interface FeaturedPiece {
  id: number;
  title: string;
  image: string;
  period: string;
  category: string;
}

@Component({
  selector: 'app-featured-items-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './featured-items-section.component.html',
  styleUrls: ['./featured-items-section.component.css'],
  imports: [
    Button,
    CardComponent,
    CardContentComponent,
    NgClass],
})
export class FeaturedItemsSectionComponent implements OnDestroy {

  featuredPieces: FeaturedPiece[] = [
    { id: 1, title: 'Vasija Ceremonial', image: 'ancient-ceremonial-pottery-vessel.jpg', period: '500-800 d.C.', category: 'Cerámica' },
    { id: 2, title: 'Máscara Ritual', image: 'ancient-ritual-mask-jade-stone.jpg', period: '200-400 d.C.', category: 'Jade' },
    { id: 3, title: 'Figurilla Antropomorfa', image: 'ancient-anthropomorphic-figurine-clay.jpg', period: '100-300 d.C.', category: 'Escultura' },
    { id: 4, title: 'Collar de Oro', image: 'ancient-gold-necklace-pre-columbian.jpg', period: '800-1000 d.C.', category: 'Orfebrería' },
    { id: 5, title: 'Hacha Ceremonial', image: 'ancient-ceremonial-axe-obsidian.jpg', period: '600-900 d.C.', category: 'Lítica' },
    { id: 6, title: 'Textil Decorado', image: 'ancient-decorated-textile-weaving-patterns.jpg', period: '400-600 d.C.', category: 'Textil' },
    { id: 7, title: 'Incensario', image: 'ancient-incense-burner-ceramic-ritual.jpg', period: '300-500 d.C.', category: 'Cerámica' },
    { id: 8, title: 'Pectoral de Concha', image: 'ancient-shell-pectoral-ornament.jpg', period: '700-900 d.C.', category: 'Malacología' },
  ];

  itemsPerSlide = 4;
  totalSlides = Math.ceil(this.featuredPieces.length / this.itemsPerSlide);
  totalSlidesArray = Array.from({ length: this.totalSlides });

  currentSlide = signal(0);
  isAutoPlaying = signal(true);

  intervalId: any;

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
    this.currentSlide.update(i => (i + 1) % this.totalSlides);
    if (!fromInterval) this.pauseAutoPlay();
  }

  prevSlide() {
    this.currentSlide.update(i => (i - 1 + this.totalSlides) % this.totalSlides);
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
}
