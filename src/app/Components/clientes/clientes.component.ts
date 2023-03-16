import { Component,OnInit } from '@angular/core';
import {ApiService} from '../../Services/api.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class clienteComponent implements OnInit{

  constructor(public ApiConsumo:ApiService){}

  ngOnInit(): void {
    this.function_get();
  }

  public function_get(){
    this.ApiConsumo.function_get_valor('Clientes').subscribe((resp:any)=>{
      console.log(resp)
    })
  }

}
