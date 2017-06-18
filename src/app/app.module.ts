import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExploradoresComponent } from './components/exploradores/exploradores.component';
import { EscaramuzaComponent } from './components/escaramuza/escaramuza.component';
import { PlanetaComponent } from './components/planeta/planeta.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {APP_ROUTING} from './app-routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    PerfilComponent,
    ExploradoresComponent,
    EscaramuzaComponent,
    PlanetaComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
