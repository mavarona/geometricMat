import { Injectable } from '@angular/core';

// Environment
import { environment as config } from '../../environments/environment';

// Models
import { Geometric } from '../models/geometric';

@Injectable({
  providedIn: 'root'
})
export class GeometricService {

  private _shapes: Array<Geometric> = new Array<Geometric>(
    new Geometric(config.SHAPE_CIRCLE_NAME, config.SHAPE_CIRCLE_NAME,
                  config.SHAPE_CIRCLE_PERIMETER, config.SHAPE_CIRCLE_AREA),
    new Geometric(config.SHAPE_SQUARE_NAME, config.SHAPE_SQUARE_NAME,
                  config.SHAPE_SQUARE_PERIMETER, config.SHAPE_SQUARE_AREA),
    new Geometric(config.SHAPE_TRIANGLE_NAME, config.SHAPE_TRIANGLE_NAME,
                  config.SHAPE_TRIANGLE_PERIMETER, config.SHAPE_TRIANGLE_AREA)
  );

  constructor() { }

  public getShape ( name: string ): Geometric {

    switch ( name ) {
      case 'circle':
        return this._shapes[0];
      case 'square':
        return this._shapes[1];
      case 'triangle':
        return this._shapes[2];
      case 'rectangle':
        return this._shapes[3];
      default:
        return this._shapes[0];
    }

  }

  public getShapes (): Array<Geometric> {

    return this._shapes;

  }

  public addNewShape ( shape: Geometric ) {

    this._shapes.push( shape );

  }

  public containsShape ( name: string ): Promise<boolean> {

     return new Promise( ( resolve, reject ) => {

      this._shapes.forEach ( shape => {
        if ( shape.name === name ) {

          resolve(true);

        }
      });

      resolve(false);

     });

  }

}
