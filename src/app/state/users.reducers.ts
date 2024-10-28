import { createReducer, on } from "@ngrx/store";
import { userState } from "./userState";
import { addUser, loadUser, loadUsersFailure, loadUsersSuccess, removeUser } from "./users.actions";
import { userModel } from "./userState";

export const initialState: userState = {
    users: [],
    loading: false
};
export const userReducer = createReducer(
    initialState,
    on(addUser, (state, userModel: userModel) => ({
        ...state,
        users: [...state.users, { id: Date.now().toString(), firstName: userModel.firstName, lastName: userModel.lastName, avatar: userModel.avatar, email: userModel.email }],
    })),
    on(removeUser, (state, { id }) => ({
        ...state,
        users: state.users.filter((user) => user.id !== id),
    })),
    // Trigger loading the todos
    on(loadUser, (state) => ({ ...state, loading: true })),
    // Handle successfully loaded todos
    on(loadUsersSuccess, (state, { users }) => ({
        users: users,
        loading: false
    })),
    // Handle todos load failure
    on(loadUsersFailure, (state, { error }) => ({
        ...state,
        loading: false
    }))
)
