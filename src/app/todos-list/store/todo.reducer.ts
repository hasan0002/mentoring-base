import { createReducer, on } from "@ngrx/store";
import { Todo } from "../todos-list.component";
import { TodosActions } from "./todo.actions";

const initialState: { todos: Todo[] } = {
    todos: [],
};

export const todoReducer = createReducer(
    initialState,
    on(TodosActions.set, (state, payload) => ({
        ...state,
        todos: payload.setTodo
    })),

    on(TodosActions.edit, (state, payload) => ({
        ...state,
        todos: state.todos.map(
            todo => (todo.id === payload.editedTodo.id) ? payload.editedTodo : todo
        )
    })),

    on(TodosActions.create, (state, payload) => ({
        ...state,
        todos: [...state.todos, payload.addTodo]
    })),

    on(TodosActions.delete, (state, payload) => ({
        ...state,
        todos: state.todos.filter( (todo) => todo.id !== payload.id )
    }))
)