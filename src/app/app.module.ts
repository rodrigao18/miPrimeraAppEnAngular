import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { ConexionStrapiComponent } from './conexion-strapi/conexion-strapi.component';//llamar al componente para ser usado
@NgModule({
  declarations: [
    AppComponent,    
    HolaMundoComponent, UserComponent, ConexionStrapiComponent //Componente declarado
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
