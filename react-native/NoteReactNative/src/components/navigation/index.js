import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ListNotes from '../ListNotes';
import AddNote from '../AddNote';
import DetailNote from '../DetailNote';
import EditNote from '../EditNote';

const AppNavigator = createStackNavigator({
  ListNotes: {
    screen: ListNotes,
    title: 'Notepad'
  },
  AddNote: {
    screen: AddNote,
    title: 'New Note'
  },
  DetailNote: {
    screen: DetailNote,
    title: 'Detail Note'
  },
  EditNote: {
    screen: EditNote,
    title: 'Edit Note'
  },
},{
  initialRouteName: "ListNotes"
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer