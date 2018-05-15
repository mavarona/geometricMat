import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

// Models
import { Geometric } from '../models/geometric';

@Component({
  selector: 'app-geometrics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './geometrics.component.html',
  styleUrls: ['./geometrics.component.css']
})
export class GeometricsComponent implements OnInit {

  @Input() shapeSelected: Geometric;
  @Input() shapes: Array<Geometric>;
  @Output() selectShape: EventEmitter<string> = new EventEmitter<string>();
  @Output() addShapeRect: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  changeShape ( event ) {

    this.selectShape.next(event.value);

  }

  addShape ( ) {

    this.addShapeRect.next();

  }

}
