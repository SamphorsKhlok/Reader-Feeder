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
    MatGridListModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCommonModule,
    MatGridListModule
  ]
})

export class MaterialModule {}
