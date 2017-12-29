import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCommonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCommonModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTooltipModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCommonModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTooltipModule,
  ]
})

export class MaterialModule {}
