import { Component } from '@angular/core';

// Components
import { Geometric } from './models/geometric';

// Services
import { GeometricService } from './services/geometric.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  shapeSelect: Geometric;
  shapeNames: Array<string>;
  shapes: Array<Geometric> = new Array<Geometric>();

  constructor (
    private _geometricService: GeometricService
   ) {

    this.shapeSelect = new Geometric('circle', 'circle', '2π * r', 'π2 * r');
    this.shapeNames = this._geometricService.getNameShapes();

  }

  getInfoShape ( shapeName ) {

    const shapeAux: Geometric =  this._geometricService.getShape( shapeName );
    this.shapeSelect.name = shapeAux.name;
    this.shapeSelect.area = shapeAux.area;
    this.shapeSelect.css = shapeAux.css;
    this.shapeSelect.perimeter = shapeAux.perimeter;

  }

  addNewShape () {

    this._geometricService.containsShape('rectangle')
                          .then( exist => {
                            if ( !exist ) {
                              // this.shapeNames.push('rectangle');
                              this.shapeNames = [...this.shapeNames, 'rectangle'];
                              this._geometricService.addNewShape(new Geometric('rectangle', 'rectangle', '2a + 2b', 'a * b'));
                            }
                          });

  }

}
