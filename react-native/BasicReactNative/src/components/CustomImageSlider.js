import React, { Component } from 'react';
import { 
  FlatList, StyleSheet, Text, View, Button,
  Image, Platform,
  SafeAreaView,
  TouchableHighlight
} from 'react-native';
import ImageSlider from 'react-native-image-slider';

const slideData = [
  'https://placeimg.com/640/640/nature',
  'https://placeimg.com/640/640/people',
  'https://placeimg.com/640/640/animals',
  'https://placeimg.com/640/640/beer',
]

export default class CustomImageSlider extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.slideContainer}>
          <ImageSlider 
            images={slideData}
            loopBothSides
            autoPlayWithInterval={3000}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: Platform.OS === 'ios' ? 10 : 0
  },
  slideContainer: {
    height: 220
  },
  buttonSelected: {
    backgroundColor: '#ccc'
  }
})