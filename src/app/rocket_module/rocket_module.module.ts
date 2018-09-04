import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketComponent } from './bsd/rocket.component';
import { RocketService } from './bsd/service/rocket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RocketComponent
  ],
  exports: [
    RocketComponent
  ],
  providers: [
    RocketService
  ]
})
export class RocketModule { }
