import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  localItem: string
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos")!
    if (this.localItem == null) {
      this.todos = [];
    }

    else {
      this.todos = JSON.parse(this.localItem)
    }

  }
  // {
  //   sno:1,
  //   title: "This is Note title",
  //   desc: "Description",
  //   active: true
  // },
  // {
  //   sno:2,
  //   title: "This is Note Content",
  //   desc: "Description",
  //   active: true
  // },
  // {
  //   sno:3,
  //   title: "This is Note Information",
  //   desc: "Description",
  //   active: true
  // }




  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  addTodo(todo: Todo) {
    console.log(todo),
      this.todos.push(todo)
      localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo: Todo) {
    
    const index = this.todos.indexOf(todo)
    this.todos[index].active= !this.todos[index].active
      localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
