import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Explorador} from "../../interfaces/explorador.interface";

@Component({
  selector: 'app-explorador',
  templateUrl: './explorador.component.html',
  styles: []
})
export class ExploradorComponent implements OnInit {

  explorador:Explorador = {
    nombre:"",
    apellido:"",
    correo:""

  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){

    console.log(this.explorador);
  }

}
