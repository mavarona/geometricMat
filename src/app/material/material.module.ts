import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
