import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { createTodosFormComponent } from "../create-todos-form/create-todos-form.component";
import { Store } from "@ngrx/store";
import { selectTodos } from "./store/todo.selectors";
import { TodosActions } from "./store/todo.actions";

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
    private readonly store = inject(Store);
    public readonly todos$ = this.store.select(selectTodos)

    constructor(){
        this.todosApiService.getTodos().subscribe(
            (response: Todo[]): void => {
                this.store.dispatch(TodosActions.set({ setTodo: response }));
            }
        )
    }

    createTodos(formData: Todo){
        this.store.dispatch(TodosActions.create({
            addTodo: {
                id: new Date().getTime(),
                userId: formData.userId,
                title: formData.title,
                completed: formData.completed,
            }
        }))
    }

    deleteTodos(id: number){
        this.store.dispatch(TodosActions.delete({ id }));
    }
}