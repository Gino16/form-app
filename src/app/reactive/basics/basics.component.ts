import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    'name': new FormControl('RTX 4080ti')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
