import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './components/navigation';
import Colors from './helpers/Colors';
import { store, persist } from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

class App extends Component {
  state = {
    ready: false,
  };

  componentWillMount(){
    console.log('componentWillMount: First this called');
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      // this.setState({
      //   data: 'Hello WallStreet'
      // })
    }, 1000)
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.getData();
    persist(() => {
      this.setState({ ready: true });
    });
  }

  renderEmpty = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  render() {
    const { ready } = this.state;
    if (!ready) return this.renderEmpty();
    return (
      <View style={styles.container}>
        <Text>Nothing</Text>
      </View>
      // <Provider store={store}>
        // <Navigation />
      // </Provider>
    );
  }
}

export default App;