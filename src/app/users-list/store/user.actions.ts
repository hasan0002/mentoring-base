import { createActionGroup, props } from "@ngrx/store";
import { User } from "../../user-interface.component";

export const UserActions = createActionGroup({
    source: 'Users',
    events: {
        'set': props<{ users: User[] }>(),

        'edit': props<{ user: User }>(),

        'create': props<{ user: User }>(),
        'delete': props<{ id: number }>(),
    }
})