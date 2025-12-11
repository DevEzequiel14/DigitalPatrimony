import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Landing } from './landing';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: Landing }
    ])
  ]
})
export class LandingModule {}
