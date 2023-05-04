import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal  from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addressForm = this.fb.group({
    Usuario: [null, Validators.required],
    Contraseña: [null, Validators.required],
  });

  public isBool:boolean=false;

  constructor(public router:Router, private fb: FormBuilder){}

  ngOnInit(): void {
    this.functionEvaluacionSESION();
  }
  onSubmit(): void {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Credenciales incorrectas',
      footer: '<a href="">Comunicarse con el administrador</a>'
    })
  }

  public functionEvaluacionSESION(){
    if(localStorage.getItem('Contraseña') &&  localStorage.getItem('Usuario') ){
      this.isBool=true;
    }
  }

  public functionLogin(user:string,pswd:string){

    localStorage.setItem('Usuario',user);
    localStorage.setItem('Contraseña',pswd);

    if(localStorage.getItem('Usuario')=='camilo' && localStorage.getItem('Contraseña')=='1234'){
    this.isBool=true;
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sesíon iniciada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    }
     
    

  }

}
