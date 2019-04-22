import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import {
  Button
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from '@react-native-community/async-storage';

const demoData = [{
  id: 1,
  name: 'A'
},{
  id: 2,
  name: 'B'
}]
const KEY_DEMO = 'KEY_DEMO'

export default class ListNotes extends Component {
  _storeData = async (key, item) => {
    try {
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item))
      return jsonOfItem
    } catch (error) {
      console.error(error)
    }
  }

  _retrieveData = async (key) => {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key)
      if (retrievedItem != null) {
        const item = JSON.parse(retrievedItem)
        alert(retrievedItem)
      }
    } catch(error) {
      console.error(error)
    }

    return
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>List Notes 222</Text>
        <Button
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
          }
          title="Store Data Using AsyncStorage"
          onPress={() => this._storeData(KEY_DEMO, demoData)}
        />
        <Button
          icon={
            <Icon
              name="arrow-left"
              size={15}
              color="blue"
            />
          }
          title="Store Data Using AsyncStorage"
          onPress={() => this._retrieveData(KEY_DEMO)}
        />
      </View>
    );
  }   
}