import { Pipe, PipeTransform } from '@angular/core';

// Models
import { Geometric } from '../models/geometric';

@Pipe({
  name: 'nameShapes'
})
export class NameShapesPipe implements PipeTransform {

  transform (value: Array<Geometric>): string {

    let allNameShapes: string = '';
    value.forEach( shape => {
      allNameShapes += shape.name + ' - ';
    });

    return allNameShapes;

  }

}
