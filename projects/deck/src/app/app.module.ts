import { TerminalModule } from 'platform-terminal';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { slides } from './slides/slides';

@NgModule({
  declarations: [
    AppComponent,
    ...slides,
  ],
  imports: [
    TerminalModule,
    CommonModule,
  ],
  entryComponents: [...slides],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
