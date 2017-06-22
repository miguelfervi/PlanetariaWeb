import { Component, OnInit } from '@angular/core';
import {ExploradoresService } from "../../services/exploradores.service";

@Component({
  selector: 'app-exploradores',
  templateUrl: './exploradores.component.html',
  styles: []
})
export class ExploradoresComponent implements OnInit {

  exploradores:any[] = [];
  loading:boolean = true;

  constructor(private _exploradoresService:ExploradoresService) {

    this._exploradoresService.getExploradores()
    .subscribe(data =>{
      this.exploradores = data;
      this.loading = false;

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
