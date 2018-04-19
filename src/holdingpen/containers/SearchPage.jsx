import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import search from '../../actions/search';

class SearchPage extends Component {
  componentWillMount() {
    this.props.dispatch(search());
  }

  render() {
    return (
      <div>
        Search
      </div>
    );
  }
}

SearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const dispatchToProps = dispatch => ({ dispatch });

export default connect(null, dispatchToProps)(SearchPage);
