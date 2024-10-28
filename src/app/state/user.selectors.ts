import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userState } from "./userState";

// export const selectUsers = (state: userState) => state.users;
export const selectUserState = createFeatureSelector<userState>('users');
export const selectAllUsers = createSelector(
    selectUserState,
    (state: userState) => state.users
);
export const selectLoader = createSelector(
    selectUserState,
    (state: userState) => state.loading
);