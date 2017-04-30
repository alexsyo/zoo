import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWeek } from '../../utils';
import { fetchSound } from '../../redux/actions/soundActions';

class Episodes extends Component {
  
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(url) {
    const { sound, fetchSound } = this.props;
    if(sound) sound.stop().release();
    fetchSound(url);
  }

  render() {
    const week = getWeek();
    return(
      <View>
        {week.map((day, i) => {
          return (
            <Button 
              key={i} 
              title={day.label} 
              onPress={this.handlePress.bind(null, day.episode)}  
            />
          );
        })}
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    sound: state.soundReducer.sound
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSound
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
