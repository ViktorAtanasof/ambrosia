import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    AppEmailDirective,
    ShortenPipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ShortenPipe,
    SpinnerComponent
  ]
})
export class SharedModule { }
