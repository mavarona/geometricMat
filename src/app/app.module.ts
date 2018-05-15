
// Components
import { AppComponent } from './app.component';
import { GeometricsComponent } from './geometrics/geometrics.component';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

// Services
import { GeometricService } from './services/geometric.service';
import { NameShapesPipe } from './pipes/name-shapes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GeometricsComponent,
    NameShapesPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [
    GeometricService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
