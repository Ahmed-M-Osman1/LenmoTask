import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import FloatingCard from '../../components/FloatingCard';

const Home = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <StatusBar backgroundColor="#7659FB" barStyle={'light-content'} />
      <View
        style={{
          backgroundColor: '#7659FB',
          height: '50%',
        }}></View>
      <FloatingCard />
      <View
        style={{
          backgroundColor: '#F6F7F9',
          height: '50%',
        }}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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

export default Home;
