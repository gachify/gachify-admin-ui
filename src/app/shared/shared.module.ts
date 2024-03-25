import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ControlErrorComponent } from './components'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ControlErrorComponent],
  exports: [CommonModule, ControlErrorComponent, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}
