import { AfterViewInit, ApplicationRef, Component } from '@angular/core';
import { ɵc as Screen } from 'platform-terminal';

import { slides } from './slides/slides';

@Component({
  selector: 'tpd-root',
  template: `
    <tpd-slide-1 [hidden]="selected !== 0"></tpd-slide-1>
    <tpd-slide-2 [hidden]="selected !== 1"></tpd-slide-2>
    <tpd-slide-3 [hidden]="selected !== 2"></tpd-slide-3>
  `,
})
export class AppComponent<T> implements AfterViewInit {
  selected = 0;

  constructor(private screen: Screen, private appRef: ApplicationRef) {
  }

  ngAfterViewInit(): void {
    this.screen.selectRootElement().on('keypress', (ch, key) => {
      const { name } = key;

      switch (name) {
        case 'left':
        case 'up':
          this.selectPrev();
          break;
        case 'right':
        case 'down':
          this.selectNext();
      }

      this.appRef.tick();
    });
  }

  private selectPrev() {
    if (this.selected >= 1) {
      this.selected -= 1;
    }
  }

  private selectNext() {
    if (this.selected < slides.length) {
      this.selected += 1;
    }
  }
}
