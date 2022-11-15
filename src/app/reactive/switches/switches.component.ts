import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    gender: ['M', [Validators.required]],
    notifications: [false, [Validators.required]],
    terms: [false, [Validators.requiredTrue]]
  });

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, terms: true });
    // this.myForm.get('terms')?.valueChanges.subscribe(term => console.log(term));
    this.myForm.valueChanges.subscribe(form => {
      delete form.terms;
      this.person = form;
    });
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.terms;
    this.person = formValue;
    console.log(formValue);
  }

}
