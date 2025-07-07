import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todos-list.component"

@Injectable({providedIn: 'root'})

export class TodosService{
    private TodosService$ = new BehaviorSubject<Todo[]>([])
    todo$ = this.TodosService$.asObservable();

    setTodo(setTodo: Todo[]){
        this.TodosService$.next(setTodo);
    }

    editTodo(editedTodo: Todo){
        this.TodosService$.next(
            this.TodosService$.value.map(
                todo => (todo.id === editedTodo.id) ? editedTodo : todo
            )
        )
    }

    createTodo(addTodo: Todo)
    {
        const userExisting:Todo | undefined = this.TodosService$.value.find(
            currentElement => currentElement.title === addTodo.title
        )
        if(userExisting)
        {
            alert('ТАКАЯ ЗАДАЧА УЖЕ ЕСТЬ');
        }
        else{
            this.TodosService$.next(
                [...this.TodosService$.value,addTodo]
            )
            alert('НОВАЯ ЗАДАЧА УСПЕШНО ДОБАВЛЕНА');
        }
    }

    deleteTodo(id: number){
        this.TodosService$.next(
            this.TodosService$.value.filter(
                (item: Todo) => (item.id === id) ? false : true
            )
        )
    }
}