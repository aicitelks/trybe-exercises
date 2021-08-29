const ENDPOINT = 'https://www.reddit.com/r/';

export const getPostsBySubreddit = (subreddit) => (
  fetch(`${ENDPOINT}${subreddit}.json`)
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);