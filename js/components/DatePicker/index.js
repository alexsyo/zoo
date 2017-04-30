import React, { Component } from 'react';
import {
  View,
  Button,
  DatePickerAndroid
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatDate } from '../../utils';
import { fetchSound } from '../../redux/actions/soundActions';

class DatePicker extends Component {

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  async handlePress(value) {
    const { sound, fetchSound } = this.props;
    const options = { maxDate: new Date(), mode: 'spinner'};
    const { year, month, day } = await DatePickerAndroid.open(options);
    const date = new Date(year + '-' + (month + 1) + '-' + day);
    const dateFormatted = formatDate(date);
    if(sound) sound.stop().release();
    fetchSound(dateFormatted.episode);
  }

  render() {
    return(
      <View>
        <Button
          title="Search"
          onPress={this.handlePress}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
