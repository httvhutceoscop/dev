/**
 * Mr Nguyen Tien Viet
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 * Email: tienvietnguyen1110@gmail.com
 */

import React, { Component } from 'react';
import {
    FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window')

export default class EditModal extends Component {
  state = {
    foodName: '',
    foodDescription: '',
  }

  showEditModal = (editingFood, flatlistItem) => {
    console.log(`editingFood = ${JSON.stringify(editingFood)}`)
    // this.setState({
    //   key: editingFood.key,
    //   foodName: editingFood.name,
    //   foodDescription: editingFood.foodDescription,
    //   flatlistItem
    // })
    // this.refs.myModal.open()
  }

  // generateKey = (numberOfCharacters) => {
  //   return require('random-string')({length: numberOfCharacters})
  // }

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={styles.container}
        position='center'
        backdrop={true}
        onClosed={() => {
          alert('Modal closed')
        }}
      >
        <Text style={styles.textTitle}>
          Food's information
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({foodName: text})}
          placeholder="Enter food's name"
          value={this.state.foodName}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({foodDescription: text})}
          placeholder="Enter food's description"
          value={this.state.foodDescription}
        />
        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={styles.button}
          onPress={() => {
            console.log('Update Item')
            // if (this.state.foodName.length == 0 || 
            //   this.state.foodDescription.length == 0) {
            //   alert("You must enter food's name and description")
            // }
            // // Update existing food
            // var foundIndex = flatListData.findIndex(
            //   item => this.state.key == item.key
            // )
            // if (foundIndex < 0) {
            //   return // not found
            // }
            // flatListData[foundIndex].name = this.state.foodName
            // flatListData[foundIndex].foodDescription = this.state.foodDescription
            // // Refresh flatlist item
            // this.state.flatlistItem.refreshFlatListItem()
            // this.refs.myModal.close()
          }}
        >
        Save
        </Button>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1
  },
  button: {
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'mediumseagreen'
  }
})