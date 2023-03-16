import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  _locations = [
    { 'id': '1', 'name': 'Shillong'},
    { 'id': '2', 'name': 'Bangalore'},
  ];
  
  _hotels = [
    { 'id': '1', 'name': 'Pegasus'},
    { 'id': '2', 'name': 'Broadway'},
  ];
  
  title = 'dynamic-form';
  
  productForm = this.fb.group({
      name: [''],
      quantities: this.fb.array([])
  });
  
  constructor(private fb: FormBuilder) {
    this.addQuantity();
  }
  
  get quantities() {
    return this.productForm.controls['quantities'] as FormArray;
  }

  addQuantity() {
    const quantity = this.fb.group({
      hotel: [''],
      location: ['']
    });
    this.quantities.push(quantity);
  }
  
  removeQuantity(i:number) {
    this.quantities.removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

}
