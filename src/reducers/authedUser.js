import { SET_AUTHED_USER } from '../actions/authedUser';

// state will be null when state is passed in as undefined
export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;
        default:
            return state;
    }
}