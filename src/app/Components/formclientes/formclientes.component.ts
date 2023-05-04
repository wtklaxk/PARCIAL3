import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formclientes',
  templateUrl: './formclientes.component.html',
  styleUrls: ['./formclientes.component.css']
})
export class FormclientesComponent {
  addressForm = this.fb.group({
    id: null,
    direccion: [null, Validators.required],
    nombre: [null, Validators.required]
    
    
    
  });
  



  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
