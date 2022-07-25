import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

export default function FloatingCard() {
  return (
    <Card style={styles.Container}>
      <Text>Card Card Card</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    height: '70%',
    width: '86%',
    marginHorizontal: '7%',
    marginTop: '16%',
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
