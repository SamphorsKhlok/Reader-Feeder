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
import {LayoutModule} from '@angular/cdk/layout';

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
    LayoutModule,
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
    LayoutModule,
  ]
})

export class MaterialModule {}
