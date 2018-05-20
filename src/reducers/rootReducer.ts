import * as actionType from "../actions/actionType";

export const rootReducer = (state: any, action: any) => {
    switch(action.type) {
        case actionType.LOAD_USERS:
            return action.users;
        default:
            return state;
    }
}