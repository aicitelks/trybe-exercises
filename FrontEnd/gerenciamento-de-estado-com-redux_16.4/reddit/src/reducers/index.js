import { combineReducers } from 'redux';
import postsBySubreddit from './postsBySubreddit';
import selectSubreddit from './selectedSubreddit';

const rootReducer = combineReducers({
  postsBySubreddit,
  selectSubreddit,
});

export default rootReducer;
