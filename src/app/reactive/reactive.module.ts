import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
