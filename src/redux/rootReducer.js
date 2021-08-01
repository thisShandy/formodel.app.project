import { AUTH, INIT } from "./types";

export function rootReducer( state = { isAuth: false }, action ) {
    switch (action.type) {
        case AUTH:
            return state = { isAuth: true }
            break
        case INIT:
            return state = { isAuth: action.payload }
            break
        default:
            return state
    }
}