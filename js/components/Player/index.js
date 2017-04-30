import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { playPause } from '../../redux/actions/soundActions';

class Player extends Component {

  constructor(props) {
    super(props);
    this.playStop = this.playStop.bind(this);
  }

  playStop() {
    const { playing, playPause, sound } = this.props;

    if(sound) {
      if(!playing) {
        sound.play();
        playPause(true);
      } else {
        sound.pause();
        playPause(false);
      }
    }
  }

  render() {
    const { playing } = this.props;
    const label =  !playing
      ? 'play'
      : 'stop';

    return(
      <View>
        <Button 
          onPress={this.playStop} 
          title={label}
        />
      </View>       
    );
  }

}

const mapStateToProps = (state) => {
  return {
    playing: state.soundReducer.playing,
    sound: state.soundReducer.sound
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    playPause
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
