import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding']
    ], Validators.required)
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  get favoriteArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  validField(name: string) {
    return this.myForm.controls[name].errors &&
      this.myForm.controls[name].touched
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  addFavorite() {
    if (this.newFavorite.invalid) return;
    this.favoriteArray.push(this.formBuilder.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  removeFavorite(index: number) {
    this.favoriteArray.removeAt(index);
  }

}
