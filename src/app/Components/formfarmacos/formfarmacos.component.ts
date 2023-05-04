import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formfarmacos',
  templateUrl: './formfarmacos.component.html',
  styleUrls: ['./formfarmacos.component.css']
})
export class FormfarmacosComponent {
  addressForm = this.fb.group({
    id: [null, Validators.required],
    nombre: [null, Validators.required],
    tipo: [null, Validators.required],
  });

  hasUnitNumber = false;



  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
