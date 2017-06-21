import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router} from "@angular/router";
import {Explorador} from "../../interfaces/explorador.interface";
import { ExploradoresService }from "../../services/exploradores.service";

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

  constructor(private _exploradoresService:ExploradoresService,
              private router:Router) { }

  ngOnInit() {
  }

  guardar(){

    console.log(this.explorador);

    this._exploradoresService.nuevoExplorador( this.explorador )
        .subscribe( data=>{
          this.router.navigate(['/explorador',data.name])

        },
        error=>console.error(error)
      );
  }

}
