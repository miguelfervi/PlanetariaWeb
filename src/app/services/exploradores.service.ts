import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Explorador } from "../interfaces/explorador.interface"
import 'rxjs/Rx'

@Injectable()
export class ExploradoresService {

  exploradoresURL:string = "https://planetaria-4a540.firebaseio.com/exploradores.json"

  constructor(private http:Http) { }

  nuevoExplorador(explorador:Explorador){
    let body = JSON.stringify( explorador );
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post( this.exploradoresURL,body, { headers })
                .map ( res=>{
                  console.log(res.json());
                  return res.json();
                })
  }

}
