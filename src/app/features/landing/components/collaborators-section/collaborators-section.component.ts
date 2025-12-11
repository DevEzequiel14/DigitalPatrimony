import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Collaborator {
  id: number
  name: string
  description: string
  url: string
  logo?: string
  type: 'university' | 'museum' | 'research' | 'government' | 'international'
}

@Component({
  selector: 'app-collaborators-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collaborators-section.component.html',
  styleUrls: ['./collaborators-section.component.css'],
  imports: [
    NgClass,
  ]
})
export class CollaboratorsSectionComponent {

  collaborators: Collaborator[] = [
    {
      id: 1,
      name: 'Universidad Nacional de Arqueología',
      description: 'Investigación y formación académica en arqueología precolombina',
      url: 'https://una-arqueologia.edu',
      type: 'university',
    },
    {
      id: 2,
      name: 'Instituto Nacional de Patrimonio',
      description: 'Preservación y protección del patrimonio cultural nacional',
      url: 'https://patrimonio.gob',
      type: 'government',
    },
    {
      id: 3,
      name: 'Museo de Antropología Regional',
      description: 'Exhibición y conservación de artefactos arqueológicos',
      url: 'https://museo-antropologia.org',
      type: 'museum',
    },
    {
      id: 4,
      name: 'Centro de Investigaciones Arqueológicas',
      description: 'Estudios especializados en culturas precolombinas',
      url: 'https://cia-research.org',
      type: 'research',
    },
    {
      id: 5,
      name: 'Fundación Smithsonian',
      description: 'Colaboración internacional en investigación arqueológica',
      url: 'https://smithsonian.org',
      type: 'international',
    },
    {
      id: 6,
      name: 'Laboratorio de Datación Radiocarbónica',
      description: 'Análisis científico y datación de materiales arqueológicos',
      url: 'https://radiocarbon-lab.edu',
      type: 'research',
    },
    {
      id: 7,
      name: 'Archivo Nacional de Documentos Históricos',
      description: 'Digitalización y preservación de documentos históricos',
      url: 'https://archivo-nacional.gob',
      type: 'government',
    },
    {
      id: 8,
      name: 'Red Latinoamericana de Arqueología',
      description: 'Cooperación regional en proyectos arqueológicos',
      url: 'https://red-arqueologia-latam.org',
      type: 'international',
    },
  ]

  getTypeColor(type: Collaborator['type']): string {
    switch (type) {
      case 'university':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'museum':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'research':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'government':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'international':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  getTypeName(type: Collaborator['type']): string {
    switch (type) {
      case 'university':
        return 'Universidad'
      case 'museum':
        return 'Museo'
      case 'research':
        return 'Investigación'
      case 'government':
        return 'Gobierno'
      case 'international':
        return 'Internacional'
      default:
        return 'Otro'
    }
  }
}
