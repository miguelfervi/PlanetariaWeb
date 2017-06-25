import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { Explorador } from "../../interfaces/explorador.interface";
import { ExploradoresService }from "../../services/exploradores.service";


@Component({
  selector: 'app-explorador',
  templateUrl: './explorador.component.html',
  styles: []
})
export class ExploradorComponent implements OnInit {

  private explorador:Explorador = {
    dni:"",
    nombre:"",
    apellido:"",
    correo:"",
    asignatura:"",
    vidas:0,
    recompensas:0,
    clasificacion:0,

  }

  nuevo:boolean = false;
  id:string;

  constructor(private _exploradoresService:ExploradoresService,
              private router:Router,
              private route:ActivatedRoute) {

                this.route.params
                    .subscribe( parametros =>{

                      this.id = parametros['id'];
                      if(this.id !="nuevo"){
                        this._exploradoresService.getExplorador(this.id)
                            .subscribe(explorador => this.explorador = explorador)
                      }

                    });
              }

  ngOnInit() {
  }

  guardar(){

    console.log(this.explorador);

    if(this.id == "nuevo"){

      this._exploradoresService.nuevoExplorador( this.explorador )
          .subscribe( data=>{
            this.router.navigate(['/explorador',data.name])

          },
          error=>console.error(error)
        );
    }else{
      this._exploradoresService.actualizarExplorador( this.explorador,this.id )
          .subscribe( data=>{
            console.log(data)

          },
          error=>console.error(error)
        );

  }
}

  agregarNuevo(form:NgForm){

    this.router.navigate(['explorador','nuevo']);

    form.reset({
      vidas:0,
      recompensas:0

    });
  }

}
