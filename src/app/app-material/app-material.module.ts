import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { 
  MatInputModule, 
  MatButtonModule 
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule    
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
