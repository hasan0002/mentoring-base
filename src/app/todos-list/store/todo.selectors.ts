import { createSelector } from "@ngrx/store";
import { Todo } from "../todos-list.component";

interface TodoState{
    todos: Todo[];
}

interface AppState{
    todos: TodoState;
}

export const selectorsTodosFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
    selectorsTodosFeature,
    (state: TodoState) => state.todos
)