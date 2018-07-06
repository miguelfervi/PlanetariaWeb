import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthGuardService} from "./services/auth-guard.service";

import { AuthService } from './services/auth.service';

import { ExploradoresService } from './services/exploradores.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { ExploradoresComponent } from './components/exploradores/exploradores.component';
import { EscaramuzaComponent } from './components/escaramuza/escaramuza.component';
import { PlanetaComponent } from './components/planeta/planeta.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {APP_ROUTING} from './app-routes';
import { ExploradorComponent } from './components/exploradores/explorador.component';
import { KeysPipe } from './pipes/keys.pipe';
import { EmblemasComponent } from './components/emblemas/emblemas.component';

import { AgmCoreModule } from '@agm/core';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { PlanetaEditComponent } from './components/planeta/planeta-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    ExploradoresComponent,
    EscaramuzaComponent,
    PlanetaComponent,
    NavbarComponent,
    ExploradorComponent,
    KeysPipe,
    EmblemasComponent,
    ClasificacionComponent,
    InformacionComponent,
    PlanetaEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDSoALZaQcRE5Hf80HA9Mk0WXRks3p7Xk'
    }),

    APP_ROUTING
  ],
  providers: [
    ExploradoresService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
