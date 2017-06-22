import { Component, OnInit } from '@angular/core';
import {ExploradoresService } from "../../services/exploradores.service";

@Component({
  selector: 'app-exploradores',
  templateUrl: './exploradores.component.html',
  styles: []
})
export class ExploradoresComponent implements OnInit {

  exploradores:any[] = [];

  constructor(private _exploradoresService:ExploradoresService) {

    this._exploradoresService.getExploradores()
    .subscribe(data =>{
      console.log(data);
      this.exploradores = data;

    })
   }

  ngOnInit() {
  }

  borrarExplorador( key$:string){
    this._exploradoresService.borrarExplorador(key$)
        .subscribe( respuesta=>{
          if(respuesta){
            console.error(respuesta);
          }else{
            delete this.exploradores[key$];
          }
        })
  }

}
