import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  public url='https://localhost:7193/api/';
  constructor(public httpConsumo:HttpClient) { }


  public function_get_valor(objclass:string){
    return this.httpConsumo.get(this.url+objclass);
  }

}
