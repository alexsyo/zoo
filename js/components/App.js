import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Episodes from './Episodes';
import SliderBar from './SliderBar';
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
        <SliderBar styles={styles} />
        <Status />
        <Player />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  block: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
