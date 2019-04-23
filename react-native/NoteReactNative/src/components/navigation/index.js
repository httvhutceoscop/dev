import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ListNotes from '../ListNotes';
import AddNote from '../AddNote';

const AppNavigator = createStackNavigator({
  ListNotes: {
    screen: ListNotes,
    navigationOptions: () => ({
      title: `Notes`,
      header: null,
      headerBackTitle: null
    }),
  },
  AddNote: {
    screen: AddNote,
    navigationOptions: () => ({
      title: `Notes`,
      headerBackTitle: `Notes`
    }),
  },
},{
  initialRouteName: "ListNotes",
},{
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  })

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer