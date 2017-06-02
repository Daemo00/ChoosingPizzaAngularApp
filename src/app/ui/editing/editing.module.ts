import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditingRoutingModule } from './editing-routing.module';
import { EditingComponent } from './editing/editing.component';

@NgModule({
  imports: [
    CommonModule,
    EditingRoutingModule
  ],
  declarations: [EditingComponent]
})
export class EditingModule { }
