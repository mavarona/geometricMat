// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SHAPE_CIRCLE_NAME: 'circle',
  SHAPE_CIRCLE_PERIMETER: '2π * r',
  SHAPE_CIRCLE_AREA: 'π2 * r',
  SHAPE_SQUARE_NAME: 'square',
  SHAPE_SQUARE_PERIMETER: '4a',
  SHAPE_SQUARE_AREA: 'a2',
  SHAPE_TRIANGLE_NAME: 'triangle',
  SHAPE_TRIANGLE_PERIMETER: '2a + b',
  SHAPE_TRIANGLE_AREA: 'b * √a2 - (b2 / 4) / 2',
  SHAPE_RECTANGLE_NAME: 'rectangle',
  SHAPE_RECTANGLE_PERIMETER: '2a + 2b',
  SHAPE_RECTANGLE_AREA: 'a * b',
  NEW_SHAPE: 'rectangle'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
