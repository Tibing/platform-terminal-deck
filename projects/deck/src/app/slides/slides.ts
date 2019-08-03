import { Type } from '@angular/core';

import { Slide1Component } from './slide-1.component';
import { Slide2Component } from './slide-2.component';
import { Slide3Component } from './slide-3.component';

export const slides: Type<any>[] = [
  Slide1Component,
  Slide2Component,
  Slide3Component,
];
