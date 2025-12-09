import { Component, signal, computed } from '@angular/core';
import { NgClass, NgFor, NgForOf } from '@angular/common';
import { CardComponent, CardContentComponent } from '../../../../shared/components/card/card';
import { Button } from '../../../../shared/components/button/button';
import { LanguageService } from '../../../../core/services/lenguage.service';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [
    NgClass,
    CardComponent,
    CardContentComponent,
    Button,
  ],
  templateUrl: './news-section.html',
  styleUrl: './news-section.css'
})
export class NewsAgendaSectionComponent {

  constructor(public lang: LanguageService) { }

  activeTab = signal<'news' | 'agenda'>('news');
  currentNewsIndex = signal(0);

  newsItems = [
    {
      id: 1,
      title: "Nuevo Descubrimiento Arqueológico en Sitio Ancestral",
      description: "Arqueólogos han descubierto una serie de artefactos cerámicos...",
      image: "/ancient-pottery-discovery-archaeological-site.jpg",
      date: "15 Marzo 2024",
      category: "Descubrimientos",
    },
    {
      id: 2,
      title: "Digitalización de Manuscritos Históricos Completada",
      description: "Se ha completado la digitalización...",
      image: "/ancient-manuscripts-historical-documents-digitizat.jpg",
      date: "10 Marzo 2024",
      category: "Digitalización",
    },
    {
      id: 3,
      title: "Exposición Temporal: Textiles Precolombinos",
      description: "Una nueva exposición presenta una colección única...",
      image: "/precolumbian-textiles-ancient-weaving-patterns.jpg",
      date: "5 Marzo 2024",
      category: "Exposiciones",
    },
  ];

  agendaItems = [
    { id: 1, title: "Conferencia: Métodos de Conservación Digital", date: "25 Marzo 2024", time: "14:00 - 16:00", location: "Auditorio Principal", description: "Presentación de las últimas técnicas..." },
    { id: 2, title: "Taller: Catalogación de Artefactos", date: "30 Marzo 2024", time: "09:00 - 12:00", location: "Laboratorio de Investigación", description: "Taller práctico sobre metodologías..." },
    { id: 3, title: "Seminario: Arqueología Digital", date: "5 Abril 2024", time: "10:00 - 17:00", location: "Centro de Conferencias", description: "Seminario internacional sobre aplicaciones..." },
    { id: 4, title: "Visita Guiada: Colección Permanente", date: "12 Abril 2024", time: "11:00 - 12:30", location: "Museo", description: "Recorrido especializado con expertos..." },
  ];

  content = {
    es: {
      title: "Noticias",
      subtitle:
        "Mantente informado sobre los últimos descubrimientos...",
      news: "Noticias",
      agenda: "Agenda",
      readMore: "Leer más",
      moreInfo: "Más información",
      videoTitle: "Video Destacado",
      videoSubtitle: "Técnicas de Conservación Digital",
      videoDescription:
        "Descubre cómo utilizamos tecnología de vanguardia...",
    },
    en: {
      title: "News",
      subtitle: "Stay informed about the latest discoveries...",
      news: "News",
      agenda: "Events",
      readMore: "Read more",
      moreInfo: "More information",
      videoTitle: "Featured Video",
      videoSubtitle: "Digital Conservation Techniques",
      videoDescription:
        "Discover how we use cutting-edge technology...",
    },
  };

  currentNews = computed(() => this.newsItems[this.currentNewsIndex()]);

  nextNews() {
    this.currentNewsIndex.update((i) => (i + 1) % this.newsItems.length);
  }

  prevNews() {
    this.currentNewsIndex.update((i) => (i - 1 + this.newsItems.length) % this.newsItems.length);
  }
}
