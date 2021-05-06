import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaListadoComponent } from './componentes/persona-listado/persona-listado.component';
import { PersonaTablaComponent } from './componentes/persona-tabla/persona-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListadoComponent,
    PersonaTablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
