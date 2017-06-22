import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ExploradoresService } from './services/exploradores.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExploradoresComponent } from './components/exploradores/exploradores.component';
import { EscaramuzaComponent } from './components/escaramuza/escaramuza.component';
import { PlanetaComponent } from './components/planeta/planeta.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {APP_ROUTING} from './app-routes';
import { ExploradorComponent } from './components/exploradores/explorador.component';
import { KeysPipe } from './pipes/keys.pipe';


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
    ExploradorComponent,
    KeysPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    ExploradoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
