import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { loadUser, loadUsersFailure, loadUsersSuccess } from "./users.actions";
import { UserServiceService } from "./userService.service";
import { from, of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators';
import { userState } from "./userState";
@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private store: Store<userState>,
        private userService: UserServiceService
    ) { }
    // Run this code when a loadTodos action is dispatched
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUser),
            switchMap(() =>
                // Call the getTodos method, convert it to an observable
                from(this.userService.getUsers()).pipe(
                    // Take the returned value and return a new success action containing the todos
                    map((users) => loadUsersSuccess({ users: users.data })),
                    // Or... if it errors return a new failure action containing the error
                    catchError((error) => of(loadUsersFailure({ error })))
                )
            )
        )
    );
      // Run this code when the addTodo or removeTodo action is dispatched
//   saveTodos$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(addTodo, removeTodo),
//         withLatestFrom(this.store.select(selectAllTodos)),
//         switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
//       ),
//     // Most effects dispatch another action, but this one is just a "fire and forget" effect
//     { dispatch: false }
//   );
}