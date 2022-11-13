import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl('RTX 4080ti')
  // });

  myForm: FormGroup = this.formBuilder.group({
    name: ['RTX 4080ti', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    quantity: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
