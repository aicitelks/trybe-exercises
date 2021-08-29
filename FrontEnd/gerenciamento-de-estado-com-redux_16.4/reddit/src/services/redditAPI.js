const ENDPOINT = 'https://www.reddit.com/r/';

export const getPostBySubreddit = (subreddit) => (
  fetch(`${ENDPOINT}${subreddit}.json`)
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);