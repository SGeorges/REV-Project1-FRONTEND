import { NgModule } from '@angular/core';

// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
// Angular Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// MDB Angular Free
import { BadgeModule, IconsModule } from 'angular-bootstrap-md'
// MDB Angular Free
import { ModalModule, InputsModule } from 'angular-bootstrap-md'


@NgModule({
  imports: [
    ButtonsModule,
    WavesModule,
    CardsModule,
    FormsModule,
    BadgeModule, 
    IconsModule,
    ModalModule,
    InputsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonsModule,
    WavesModule,
    CardsModule,
    FormsModule,
    BadgeModule, 
    IconsModule,
    ModalModule,
    InputsModule,
    ReactiveFormsModule
  ],

})
export class MDBBootstrap { }
