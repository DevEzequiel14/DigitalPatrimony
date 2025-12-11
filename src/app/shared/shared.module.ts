import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/button/button';
import {
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardDescriptionComponent,
  CardActionComponent,
  CardContentComponent,
  CardFooterComponent
} from './components/card/card';

/**
 * SharedModule exports reusable UI components.
 * Import this module in feature modules to access shared components.
 */
@NgModule({
  imports: [
    CommonModule,
    Button,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardActionComponent,
    CardContentComponent,
    CardFooterComponent
  ],
  exports: [
    Button,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardActionComponent,
    CardContentComponent,
    CardFooterComponent
  ]
})
export class SharedModule {}
