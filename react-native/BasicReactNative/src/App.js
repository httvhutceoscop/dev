import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import BasicFlatList from './components/BasicFlatList';
import BasicSectionList from './components/BasicSectionList';
import ListLoadMore from './components/ListLoadMore';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    title: 'Home'
  },
  ScreenFlatList: {
    screen: BasicFlatList,
    title: 'Food'
  },
  ScreenSectionList: {
    screen: BasicSectionList,
    title: 'Programming Language'
  },
  ListLoadMore: {
    screen: ListLoadMore,
    title: 'List Load More'
  },
},{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}