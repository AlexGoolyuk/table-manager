import { UserService } from "src/services/user.service";
import { Actions } from "@ngrx/effects";
import { map, mergeMap, Observable } from "rxjs";
import { ofType } from "@ngrx/effects/src";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import * as types from './action.types';
import * as userAction from './user.action';

@Injectable()
export class UserEffects {

    constructor(
        private userService: UserService, 
        private actions$: Actions) {}

    loadUsers$: Observable<Action> = this.actions$.pipe(
        ofType<userAction.LoadUserAction>(types.LOAD_USERS),
        mergeMap(() => 
            this.userService.getAll()
            .pipe(
                map(
                    users => new userAction.LoadUsersSuccessAction(users)
                )
            )
        )
    )
}