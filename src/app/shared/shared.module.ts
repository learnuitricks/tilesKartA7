import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from '../pipes/status.pipe';
import { StarComponent } from '../star/star.component';
@NgModule({
  declarations: [StatusPipe,StarComponent],
  imports: [
    CommonModule
  ],
  exports:[StatusPipe,StarComponent]
})
export class SharedModule { }
