import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

// Models
import { Geometric } from '../models/geometric';

@Component({
  selector: 'app-geometrics',
  templateUrl: './geometrics.component.html',
  styleUrls: ['./geometrics.component.css']
})
export class GeometricsComponent implements OnInit {

  @Input() shapeSelected: Geometric;
  @Input() shapeNames: Array<string>;
  @Output() selectShape: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {


  }

  changeShape ( event ) {

    this.selectShape.emit(event.value);

  }

}
