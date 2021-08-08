import { AUTH, INIT, SET_CATEGORY } from "./types";

export function rootReducer( state = { isAuth: false, categoryName: '', category: '' }, action ) {
    switch (action.type) {
        case AUTH:
            return state = { isAuth: true }
            break
        case INIT:
            return state = { isAuth: action.payload }
            break
        case SET_CATEGORY:
            return state = { ...state, categoryName: action.payload.name, category: action.payload.categoryName }
        default:
            return state
    }
}