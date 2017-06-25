import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escaramuza',
  templateUrl: './escaramuza.component.html',
  styles: []
})
export class EscaramuzaComponent {
  title: string = 'Posición del GPS';
  lat: number = 37.197472;
  lng: number = -3.624563;
}
