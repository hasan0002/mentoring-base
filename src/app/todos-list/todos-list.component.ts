import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { TodosService } from "../todos.service";
import { createTodosFormComponent } from "../create-todos-form/create-todos-form.component";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

@Component({
    selector: 'app-todos-list',
    standalone: true,
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    imports: [NgFor, TodosCardComponent, AsyncPipe, createTodosFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent{
    readonly todosApiService = inject(TodosApiService)
    readonly todoService = inject(TodosService);

    constructor(){
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todoService.setTodo(response);
            }
        )
        /*this.todoService.todo$.subscribe(
            todo => console.log(todo)
            
        )*/
    }

    createTodos(formData: Todo){
        console.log(formData);
        this.todoService.createTodo({
            id: new Date().getTime(),
            userId: formData.userId,
            title: formData.title,
            completed: formData.completed,
        })
    }

    deleteTodos(id: number){
        this.todoService.deleteTodo(id);
    }

}