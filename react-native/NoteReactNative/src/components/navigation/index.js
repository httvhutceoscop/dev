import React from 'react';
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
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer