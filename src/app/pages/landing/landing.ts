import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { NewsAgendaSectionComponent } from "./components/news-section/news-section";
import { CollectionHistorySectionComponent } from "./components/collection-history-section/collection-history-section.component";
import { FeaturedItemsSectionComponent } from "./components/featured-items-section/featured-items-section.component";
import { OnlineCatalogSectionComponenet } from './components/online-catalog-section/online-catalog-section.component';
import { CollaboratorsSectionComponent } from "./components/collaborators-section/collaborators-section.component";
import { InstitutionsSectionComponent } from './components/institutions-section/institutions-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [
    Header,
    NewsAgendaSectionComponent,
    CollectionHistorySectionComponent,
    FeaturedItemsSectionComponent,
    OnlineCatalogSectionComponenet,
    CollaboratorsSectionComponent,
    InstitutionsSectionComponent,
    FooterComponent
],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
