import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics'
    },
    {
      text: 'Dinámicos',
      route: './template/dynamics'
    },
    {
      text: 'Switches',
      route: './template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics'
    },
    {
      text: 'Dinámicos',
      route: './reactive/dynamics'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    }
  ];

  authMenu: MenuItem[] = [
    {
      text: 'Registro',
      route: './auth/register'
    },
    {
      text: 'Login',
      route: './auth/login'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
