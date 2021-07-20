import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUbicacionComponent } from './componentes/crea_ubicacion/crear-ubicacion/crear-ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
