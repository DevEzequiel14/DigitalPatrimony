import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      data-slot="card"
      [ngClass]="[
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        class
      ]"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {
  @Input() class = '';
}

@Component({
  selector: 'ui-card-header',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      data-slot="card-header"
      [ngClass]="[
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        class
      ]"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardHeaderComponent {
  @Input() class = '';
}

@Component({
  selector: 'ui-card-title',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      data-slot="card-title"
      [ngClass]="['leading-none font-semibold', class]"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardTitleComponent {
  @Input() class = '';
}

@Component({
  selector: 'ui-card-description',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      data-slot="card-description"
      [ngClass]="['text-muted-foreground text-sm', class]"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardDescriptionComponent {
  @Input() class = '';
}

@Component({
  selector: 'ui-card-action',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      data-slot="card-action"
      [ngClass]="[
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        class
      ]"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardActionComponent {
  @Input() class = '';
}

@Component({
  selector: 'ui-card-content',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-slot="card-content" [ngClass]="['px-6', class]">
      <ng-content></ng-content>
    </div>
  `
})
export class CardContentComponent {
  @Input() class = '';
}

@Component({
  selector: 'ui-card-footer',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      data-slot="card-footer"
      [ngClass]="['flex items-center px-6 [.border-t]:pt-6', class]"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardFooterComponent {
  @Input() class = '';
}
