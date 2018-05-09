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

  shapeSelected: Geometric;
  shapeNames: Array<string>;
  shapes: Array<Geometric> = new Array<Geometric>();

  constructor (
    private _geometricService: GeometricService
   ) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {

    this.shapeSelected = new Geometric('circle', 'circle', '2π * r', 'π2 * r');
    this.shapeNames = this._geometricService.getNameShapes();

  }

  getInfoShape ( shapeName ) {

    this.shapeSelected = this._geometricService.getShape( shapeName );

  }

}
