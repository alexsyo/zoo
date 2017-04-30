import React, { Component } from 'react';
import {
  View,
  Slider
} from 'react-native';
import { connect } from 'react-redux';

class SliderBar extends Component {

  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(value) {
    const { sound } = this.props;
    if(sound) sound.setCurrentTime(value);
  }

  render() {
    const { sound, styles }  = this.props;
    let length, disabled;
    (sound)
      ? length = sound.getDuration()
      : disabled = true;

    return(
      <View style={styles.block}>
        <Slider
          maximumValue={length}
          disabled={disabled}
          onValueChange={this.handleValueChange}
        />
      </View>       
    );
  }

}

const mapStateToProps = (state) => {
  return {
    sound: state.soundReducer.sound,
  };
};

export default connect(mapStateToProps, null)(SliderBar);
