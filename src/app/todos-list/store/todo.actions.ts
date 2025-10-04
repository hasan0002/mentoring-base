import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../todos-list.component";

export const TodosActions = createActionGroup({
    source: 'todos',
    events: {
        'set': props<{setTodo: Todo[]}>(),

        'edit': props<{editedTodo: Todo}>(),
        'create': props<{addTodo: Todo}>(),
        'delete': props<{id: number}>(),
    }
})