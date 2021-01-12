import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  filter: string = "";
  todos: Todo[] = [];
  addToDo: string = '';
  todo: Todo = {task: '', completed: false};

  // @Output() deleted = new EventEmitter<number>();

  constructor() {
    this.todos = [
      {task: "Explore Hawaii", completed: false},
      {task: "California Wine Tour", completed: true},
      {task: "Backpack Through Europe", completed: false},
      {task: "Cross-Country Road Trip", completed: true},
      {task: "Carribbean Cruise", completed: true},
      {task: "Traverse City Wine Tour", completed: true},
    ];
  }
    // displayedTodos: Todo[] = [...this.todos];

    ngOnInit() {};

    getFilteredResults() {
      return this.todos.filter((todo) => {
        return todo.task.toLowerCase().includes(this.filter.toLowerCase());
      });
    };

    // getFilteredResults(): Todo[] {
    //   return this.displayedTodos.filter((todo) => {
    //     // convert the todo.task to lowercase
    //     const taskLower = todo.task.toLowerCase();
    //     // convert the filter input to lowercase
    //     const filterLower = this.filter.toLowerCase();
    //     // check to set if the filter input is inside of the task
    //     // string
    //     return taskLower.includes(filterLower);
    //   });
    // };

    addToList() : void {
      this.todo = {task: this.addToDo, completed: false};
      this.todos.push(this.todo);
    };

    removeTask(task:string): void {
      let removeIndex = this.todos.findIndex(function(todo){
        return todo.task===task;
      });
      this.todos.splice(removeIndex, 1);
    }

    markComplete(todo: Todo) : void {
      todo.completed = true;
    };

  }
