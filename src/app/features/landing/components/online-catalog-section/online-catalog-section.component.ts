import { LanguageService } from './../../../../core/services/lenguage.service';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card";
import { Button } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-online-catalog-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './online-catalog-section.component.html',
  styleUrls: ['./online-catalog-section.component.css'],
  imports: [CardComponent, Button]
})
export class OnlineCatalogSectionComponenet {

  constructor(private lang: LanguageService) { }
  content = {
    es: {
      title: "Catálogo en Línea",
      description:
        "Explora nuestra extensa colección digital con más de 5,000 artefactos arqueológicos catalogados y disponibles para investigación académica y consulta pública.",
      accessButton: "Acceder al Catálogo Digital",
      features: {
        search: {
          title: "Búsqueda Avanzada",
          description:
            "Filtra por período, material, región de origen y categoría para encontrar exactamente lo que buscas.",
        },
        visualization: {
          title: "Visualización Detallada",
          description:
            "Imágenes en alta resolución con zoom, modelos 3D interactivos y fichas técnicas completas.",
        },
        download: {
          title: "Descarga de Recursos",
          description:
            "Accede a bibliografía especializada, informes de excavación y material educativo.",
        },
      },
      stats: {
        title: "Estadísticas de la Colección",
        artifacts: "Artefactos",
        sites: "Sitios",
        cultures: "Culturas",
        years: "Años de Historia",
      },
    },
    en: {
      title: "Online Catalog",
      description:
        "Explore our extensive digital collection with over 5,000 cataloged archaeological artifacts available for academic research and public consultation.",
      accessButton: "Access Digital Catalog",
      features: {
        search: {
          title: "Advanced Search",
          description:
            "Filter by period, material, region of origin and category to find exactly what you're looking for.",
        },
        visualization: {
          title: "Detailed Visualization",
          description:
            "High-resolution images with zoom, interactive 3D models and complete technical sheets.",
        },
        download: {
          title: "Resource Download",
          description:
            "Access specialized bibliography, excavation reports and educational material.",
        },
      },
      stats: {
        title: "Collection Statistics",
        artifacts: "Artifacts",
        sites: "Sites",
        cultures: "Cultures",
        years: "Years of History",
      },
    },
  };

  t = computed(() => this.content[this.lang.language()]);
}
