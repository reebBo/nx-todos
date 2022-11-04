import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';

import {MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [CommonModule,MatCheckboxModule,FormsModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
