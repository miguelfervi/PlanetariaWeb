import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Explorador } from "../interfaces/explorador.interface"
import 'rxjs/Rx'

@Injectable()
export class ExploradoresService {

  exploradoresURL:string = "https://planetaria-4a540.firebaseio.com/exploradores.json"
  exploradorURL:string = "https://planetaria-4a540.firebaseio.com/exploradores/"

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
  actualizarExplorador(explorador:Explorador, key$:string){
    let body = JSON.stringify( explorador );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${this.exploradorURL}/${key$}.json`;
    return this.http.put( url ,body, { headers })
                .map ( res=>{
                  console.log(res.json());
                  return res.json();
                })
  }

  getExplorador( key$:string){

    let url = `${ this.exploradorURL}/${key$}.json`;
    return this.http.get(url)
                .map (res=>res.json());

  }

  getExploradores( ){


    return this.http.get(this.exploradoresURL)
                .map (res=>res.json());

  }

  borrarExplorador(key$:string){
    let url = `${this.exploradorURL}/${key$}.json`;
    return this.http.delete(url)
              .map( res=> res.json())
  }

}
