import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
