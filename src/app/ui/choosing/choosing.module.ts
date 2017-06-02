import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosingComponent } from './choosing/choosing.component';
import { ChoosingRoutingModule } from "app/ui/choosing/choosing-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ChoosingRoutingModule
  ],
  declarations: [ChoosingComponent]
})
export class ChoosingModule { }
