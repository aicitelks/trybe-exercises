import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectSubreddit, fetchPostsIfNeeded, refreshSubreddit } from './actions';
import Posts from './components/Posts';
import Selector from './components/Selector';

class App extends React.Component {
  componentDidMount() {
    const { dispatch, selectSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectSubreddit));
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.selectSubreddit !== props.selectSubreddit) {
      const { dispatch, selectSubreddit } = props;
      dispatch(fetchPostsIfNeeded(selectSubreddit));
    }
  }

  selectSubreddit(nextSubreddit) {
    const { dispatch } = this.props;
    dispatch(selectSubreddit(nextSubreddit));
  }

  handleRefreshClick(event) {
    event.preventDefalt();

    const { dispatch, selectSubreddit } = this.props;
    dispatch(refreshSubreddit(selectSubreddit));
    dispatch(fetchPostsIfNeeded(selectSubreddit));
  }

  renderLastUpdateAt() {
    const { lastUpdated } = this.props;

    return (
      <span>
        {`Last update at: ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    );  
  }
  
  renderRefreshButton() {
    const { isFetching } = this.props;

    return (
      <button
        type="button"
        onClick={ (event) => this.handleRefreshClick(event) }
        disabled={ isFetching }
      >
        Refresh
      </button>
    );
  }

  render() {
    const {
      availableSubreddits,
      selectedSubreddit,
      posts = [],
      isFetching,
      lastUpdated,
    } = this.props;

    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector
          value={ selectSubreddit }
          onChange={ (nextSubreddit) => this.selectSubreddit(nextSubreddit) }
          options={ availableSubreddits }
        />

        <div>
          { lastUpdated && this.renderLastUpdateAt() }
          { this.renderRefreshButton() }
        </div>
        { isFetching && <h2>Loading...</h2> }
        { !isFetching && isEmpty && <h2>Não há posts</h2> }
        { !isFetching && !isEmpty && <Posts posts={posts} /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectSubreddit, postsBySubreddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts,
  } = postsBySubreddit[selectSubreddit];

  return {
    selectSubreddit,
    posts,
    isFetching,
    lastUpdated,
    availableSubreddits: Object.keys(postsBySubreddit),
  };
};

App.propTypes = {
  availableSubreddits: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  selectedSubreddit: PropTypes.string.isRequired,
};

App.defaultProps = {
  lastUpdated: null,
  posts: [],
};

export default connect(mapStateToProps)(App);
