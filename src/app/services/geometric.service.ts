import { Injectable } from '@angular/core';

// Models
import { Geometric } from '../models/geometric';

@Injectable({
  providedIn: 'root'
})
export class GeometricService {

  private _shapes: Array<Geometric> = new Array<Geometric>(
    new Geometric('circle', 'circle', '2π * r', 'π2 * r'),
    new Geometric('square', 'square', '4l', 'l2'),
    new Geometric('triangle', 'triangle', '2b + b', 'b * √a2 - (b2 / 4) / 2 ')
  );

  private _shapesGeometricName: Array<string> = ['circle', 'square', 'triangle'];

  constructor() { }

  public getShape ( name: string ): Geometric {

    switch ( name ) {
      case 'circle':
        return this._shapes[0];
      case 'square':
        return this._shapes[1];
      case 'triangle':
        return this._shapes[2];
      default:
        return this._shapes[0];
    }

  }

  public getNameShapes (): Array<string> {

    return this._shapesGeometricName;

  }

}
