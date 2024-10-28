import { createAction, props } from "@ngrx/store";
import { userModel } from "./userState";

export const addUser = createAction(
    "[user page]  add user",
    props<userModel>()
);
export const removeUser = createAction(
    '[User Page] Remove User',
    props<{ id: string }>()
);
export const updateUser = createAction(
    '[user page] update user',
    props<userModel>()
);
export const loadUser = createAction(
    '[user api] load user'
);
export const loadUsersSuccess = createAction(
    '[user API] user Load Success',
    props<{ users: userModel[] }>()
);

export const loadUsersFailure = createAction(
    '[User API] User Load Failure',
    props<{ error: string }>()
);
