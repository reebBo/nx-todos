import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@beccs/data';

@Component({
  selector: 'beccs-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];
  
  constructor() {}

  ngOnInit(): void {
    console.log("bien ")
  }
}
