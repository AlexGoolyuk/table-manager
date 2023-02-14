import { Action } from "@ngrx/store";
import { User } from "../interfaces/user";
import * as types from  './action.types';


export const LOAD_USERS = "LOAD_USERS";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";


export class LoadUserAction implements Action {
    readonly type: string = types.LOAD_USERS;

    constructor() {}
}

export class LoadUsersSuccessAction implements Action {
    readonly type: string = types.LOAD_USERS_SUCCESS;

    constructor(public payload: User[]) {}
    
}

export type Actions =  LoadUsersSuccessAction;