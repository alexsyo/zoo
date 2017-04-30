import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Episodes from './Episodes';
import Player from './Player';
import Status from './Status';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Episodes />
        <Player />
        <Status />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default App;