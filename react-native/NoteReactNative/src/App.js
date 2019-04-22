/**
 * Mr. Nguyen Tien Viet
 * Email: tienvietnguyen1110@gmail.com
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 */

import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Colors from './helpers/Colors';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Navigation from './components/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default class App extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    // persist(() => {
      this.setState({ ready: true })
    // });
  }

  renderEmpty = () => (
    <View style={styles.container}>
      <ActivityIndicator size='large'/>
    </View>
  );

  render() {
    const { ready } = this.state;
    if (!ready) return this.renderEmpty();

    return (
      <Navigation />
    );
  }
}
