import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

class Status extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { fetching, error }  = this.props

    fetchingText = (fetching)
      ? <Text>Fetching...</Text>
      : null;

    errorText = (error)
      ? <Text>Not found</Text>
      : null;

    return(
      <View>
        {fetchingText}
        {errorText}
      </View>       
    );
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.soundReducer.fetching,
    error: state.soundReducer.error
  };
};

export default connect(mapStateToProps, null)(Status);
