import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import PropTypes from 'prop-types';
import CircleSliderContainer from './CircleSlider';
import CircularSlider from 'react-native-circular-slider';

export default function FloatingCard() {
  return (
    <Card style={styles.Container}>
      <CircularSlider
        startAngle={"10"}
        angleLength={"20"}
        onUpdate={({startAngle, angleLength}) =>
          this.setState({startAngle, angleLength})
        }
        segments={55}
        strokeWidth={30}
        radius={145}
        gradientColorFrom="#ff9800"
        gradientColorTo="#ffcf00"
        clockFaceColor="#9d9d9d"
        bgCircleColor="#171717"
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    height: '70%',
    width: '86%',
    marginHorizontal: '7%',
    marginTop: '18%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
