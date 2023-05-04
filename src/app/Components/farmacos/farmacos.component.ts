import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-farmacos',
  templateUrl: './farmacos.component.html',
  styleUrls: ['./farmacos.component.css']
})
export class FarmacosComponent implements OnInit {
  
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


