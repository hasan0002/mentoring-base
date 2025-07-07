import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../todos-list.component";

@Component({
    selector: 'app-todos-card',
    templateUrl: './todos-card.component.html',
    styleUrl: './todos-card.component.scss',
    standalone: true,
})

export class TodosCardComponent{
    @Input()
    todos!: Todo;

    @Output()
    deleteTodos = new EventEmitter<number>()
    

    onDeleteTodos(id: number){
        this.deleteTodos.emit(id)
    }

}