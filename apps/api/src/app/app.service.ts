import { Injectable } from '@nestjs/common';
import { Todo } from '@beccs/data';



@Injectable()
export class AppService {
   todos: Todo[] = [{ title: 'Live, love, laugh' }, { title: 'Be you' }, { title: 'Do your best' }, { title: 'Enjoy what you do' }];


  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `Give ${Math.floor(Math.random() * 1000)} smiles`,
    });
  }
}
