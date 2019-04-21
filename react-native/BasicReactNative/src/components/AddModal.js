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

export default class AddModal extends Component {
  state = {
    newFoodName: '',
    newFoodDescription: ''
  }

  showAddModal = () => {
    this.refs.myModal.open()
  }

  generateKey = (numberOfCharacters) => {
    return require('random-string')({length: numberOfCharacters})
  }

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={styles.container}
        position='center'
        backdrop={true}
        onClosed={() => {
          // alert('Modal closed')
        }}
      >
        <Text style={styles.textTitle}>
          New food's information
        </Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({ newFoodName: text })}
          placeholder="Enter new food's name"
          value={this.state.newFoodName}
        />
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({ newFoodDescription: text })}
          placeholder="Enter new food's description"
          value={this.state.newFoodDescription}
        />
        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={styles.button}
          onPress = {() => {
            // alert('Add Item')
            if (this.state.newFoodName.length == 0 ||
              this.state.newFoodDescription.length == 0) {
              alert("You must enter food's name and description");
              return;
            }
            const newKey = this.generateKey(24)
            const newFood = {
              key: newKey,
              name: this.state.newFoodName,
              imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
              foodDescription: this.state.newFoodDescription
            }
            flatListData.push(newFood)
            this.props.parentFlatList.refreshFlatList(newKey)
            this.refs.myModal.close()
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
    marginTop: 20,
    marginBottom: 10,
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