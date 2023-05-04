import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class clienteComponent implements OnInit {

  constructor(public api: ApiService) { }

  public displayedColumns: any = [];
  public dataSource: any = [];

  ngOnInit(): void {
    this.function_get();
  }

  public function_get() {
    this.api.function_get_valor('clientes').subscribe((resp: any) => {
    this.displayedColumns = Object.keys(resp[0]);
    this.dataSource = resp;
    })
  }
}


