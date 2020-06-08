import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';

// The authedUser, users, and tweets reducer will all be combined in one main root reducer.
// It'll combine each reducer's results into a single state object.
// We NEED to do this, because the `createStore` function only accepts a single reducer.
export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer
});