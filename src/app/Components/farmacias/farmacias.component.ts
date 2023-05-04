import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.css']
})
export class FarmaciasComponent  implements OnInit {
  
  public displayedColumns: any = [];
  public dataSource: any = [];

    constructor(public ApiConsumo:ApiService){}
  
    ngOnInit(): void {
      this.function_get();
    }
  
    public function_get(){
      this.ApiConsumo.function_get_valor('farmacias').subscribe((resp:any)=>{
        this.displayedColumns = Object.keys(resp[0]);
        this.dataSource = resp;
      })
    }
  
  }

