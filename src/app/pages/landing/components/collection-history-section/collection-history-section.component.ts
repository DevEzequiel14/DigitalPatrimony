import { NgClass, NgStyle, NgFor } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CardComponent, CardContentComponent } from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';

interface HistoryItem {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
  details: string;
}

@Component({
  selector: 'app-collection-history-section',
  templateUrl: './collection-history-section.component.html',
  styleUrls: ['./collection-history-section.component.css'],
  imports: [
    Button,
    CardComponent,
    CardContentComponent,
    NgClass,
    NgStyle,
    NgFor
  ],
})
export class CollectionHistorySectionComponent implements OnInit {

  historyItems: HistoryItem[] = [
    {
      id: 1,
      title: 'El Desarrollo de la Agricultura',
      period: '3000 - 1000 a.C.',
      description:
        'La transición hacia la agricultura marcó un cambio fundamental...',
      image: '/ancient-pottery-discovery-archaeological-site.jpg',
      details:
        'Este período neolítico se caracterizó por la aparición de asentamientos permanentes...',
    },
    {
      id: 2,
      title: 'Las Grandes Civilizaciones',
      period: '1000 a.C. - 500 d.C.',
      description:
        'Surgimiento de complejas sociedades urbanas con sistemas de escritura...',
      image: '/ancient-manuscripts-historical-documents-digitizat.jpg',
      details:
        'Las ciudades-estado desarrollaron sistemas políticos complejos...',
    },
    {
      id: 3,
      title: 'El Período Clásico',
      period: '500 - 1000 d.C.',
      description:
        'Época de máximo esplendor cultural caracterizada por avances científicos...',
      image: '/precolumbian-textiles-ancient-weaving-patterns.jpg',
      details:
        'Durante este período florecieron las artes decorativas y la metalurgia...',
    },
    {
      id: 4,
      title: 'La Llegada Europea',
      period: '1500 - 1600 d.C.',
      description:
        'El encuentro entre dos mundos transformó radicalmente las sociedades indígenas...',
      image: '/ancient-archaeological-artifacts-pottery-ceramics-.jpg',
      details:
        'Este período de contacto cultural resultó en nuevas formas artísticas híbridas...',
    },
  ];

  currentIndex = signal(0);
  isAutoPlaying = signal(true);

  intervalId: any = null;

  currentItem = computed(
    () => this.historyItems[this.currentIndex()]
  );

  constructor() {
    effect(() => {
      this.currentIndex();
      this.restartAutoPlay();
    });
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.clearAutoPlay();
  }

  private startAutoPlay() {
    this.clearAutoPlay();
    if (!this.isAutoPlaying()) return;
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private clearAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private restartAutoPlay() {
    this.isAutoPlaying.set(false);
    this.clearAutoPlay();

    setTimeout(() => {
      this.isAutoPlaying.set(true);
      this.startAutoPlay();
    }, 10000);
  }

  nextSlide() {
    this.currentIndex.update(
      i => (i + 1) % this.historyItems.length
    );
  }

  prevSlide() {
    this.currentIndex.update(
      i => (i - 1 + this.historyItems.length) % this.historyItems.length
    );
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }
}
