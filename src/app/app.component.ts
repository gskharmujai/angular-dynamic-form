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
      days: this.fb.array([])
  });
  
  constructor(private fb: FormBuilder) {
    this.addDay();
  }
  
  get days() {
    return this.productForm.controls['days'] as FormArray;
  }

  addDay() {
    const day = this.fb.group({
      hotel: [''],
      location: ['']
    });
    this.days.push(day);
  }
  
  removeDay(i:number) {
    this.days.removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

}
