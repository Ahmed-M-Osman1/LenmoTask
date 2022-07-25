import React, {Component} from 'react';
import {View} from 'react-native';
import CircleSlider from 'react-native-circle-slider';

export default class CircleSliderContainer extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CircleSlider value={90} />
      </View>
    );
  }
}
