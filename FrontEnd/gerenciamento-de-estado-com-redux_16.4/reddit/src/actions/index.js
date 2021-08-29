import { getPostBySubreddit } from '../services/redditAPI';

//actions type
export const REFRESH_SUBREDDIT = 'REFRESH_SUBREDDIT';
export const RECEIVE_POSTS_FAILURE = 'RECEIVE_POSTS_FAILURE';
export const RECEIVE_POSTS_SUCCESS = 'RECEIVE_POSTS_SUCCESS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

// actions create
export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  subreddit,
});

export const refreshSubreddit = (subreddit) => ({
  type: REFRESH_SUBREDDIT,
  subreddit,
});

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit,
});

export const receivePostsSuccess = (subreddit, json) => ({
  type: RECEIVE_POSTS_SUCCESS,
  subreddit,
  posts: json.data.children.map((child) => child.data),
  receiveAt: Date.now(),
});

export const receivePostsFailure = (subreddit, error) => ({
  type: RECEIVE_POSTS_FAILURE,
  subreddit,
  error,
});

export const fetchPosts = () => (dispatch) => {
  dispatch(requestPosts(subreddit));

  getPostBySubreddit(subreddit)
    .then(
      (posts) => dispatch(receivePostsSuccess(subreddit, posts)),
      (error) => dispatch(receivePostsFailure(subreddit, error)),
    );  
}

export const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];

  if (!posts.items) return true;
  if (posts.isFetching) return false;
  return posts.shoulRefreshSubreddit;
};

export const fetchPostsIfNeeded = (subreddit) => (dispatch, getState) => (
  shouldFetchPosts(getState(), subreddit) 
  && dispatch(fetchPosts(subreddit))
);