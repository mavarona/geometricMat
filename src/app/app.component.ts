import { Component } from '@angular/core';

// Components
import { Geometric } from './models/geometric';

// Environment
import { environment as config } from '../environments/environment';

// Services
import { GeometricService } from './services/geometric.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  shapeSelect: Geometric;
  shapes: Array<Geometric> = new Array<Geometric>();

  constructor (
    private _geometricService: GeometricService
   ) {

    this.shapes = this._geometricService.getShapes();
    this.shapeSelect = this._geometricService.getShape(config.SHAPE_CIRCLE_NAME);

  }

  getInfoShape ( shapeName ) {

    this.shapeSelect =  this._geometricService.getShape( shapeName );

  }

  addNewShape () {

    this._geometricService
        .containsShape(config.NEW_SHAPE)
        .then( exist => {
          if ( !exist ) {
            const newShape: Geometric = new Geometric( config.SHAPE_RECTANGLE_NAME,
                                                       config.SHAPE_RECTANGLE_NAME,
                                                       config.SHAPE_RECTANGLE_PERIMETER,
                                                       config.SHAPE_RECTANGLE_AREA);
            this._geometricService.addNewShape( newShape );
            // this.shapes = this._geometricService.getShapes();
            this.shapes = [...this.shapes];
          }
        });

  }

}
