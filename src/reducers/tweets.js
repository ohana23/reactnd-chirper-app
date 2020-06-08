import { RECEIVE_TWEETS } from '../actions/tweets';

// This is the tweets reducer. It manages the tweets slice of the state.
// This reducer will manage just its own part of the state.

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            };
        default:
            return state;
    }
}