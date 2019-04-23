import React, {Component} from 'react';
import {
  Text, 
  View,
  ScrollView,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';
import styles from './styles';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../config';

var { width, height } = Dimensions.get('window')
const KEY_DATA = config.storageKey
var g_indexNote = null

_removeNote = async () => {
  try {
    const retrievedItem =  await AsyncStorage.getItem(KEY_DATA)
    if (retrievedItem != null) {
      const item = JSON.parse(retrievedItem)
      item[g_indexNote].deletedAt = new Date().toLocaleString()

      await AsyncStorage.setItem(KEY_DATA, JSON.stringify(item))
    }
  } catch(e) {
    console.error(e)
  }
}

export default class AddNote extends Component {
  state = {
    text: '',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    noteData: [],
    note: null,
    autoFocus: true,
    indexNote: null,
  }

  static navigationOptions = ({ navigation }) => {
    const indexNote = navigation.getParam('indexNote', null);

    return {
      headerRight: indexNote != null ? (
        <View style={{paddingRight: 10}}>
          <Icon 
            size={24}
            name={'trash'} 
            onPress={ () => { 
              return (
                Alert.alert(
                  'Delete Note',
                  'Are you sure you want to delete?',
                  [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => {
                        _removeNote()
                        navigation.goBack()
                        
                    }},
                  ],
                  {cancelable: false},
                )
              )
            } } />
        </View>
      ) : null,
    }
  }

  _retrieveData = async (key) => {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key)
      if (retrievedItem != null) {
        const item = JSON.parse(retrievedItem)
        this.setState({
          noteData: [...this.state.noteData, ...item]
        })

        const { navigation } = this.props;
        const indexNote = navigation.getParam('indexNote', null);
        if (indexNote != null) {
          g_indexNote = indexNote // fuck man
          this.setState({
            indexNote,
            note: this.state.noteData[indexNote],
            text: this.state.noteData[indexNote].content,
            autoFocus: false,
          })
        }
        // console.log(this.state.note)
      }
    } catch(error) {
      console.error(error)
    }

    return
  }

  _storeData = async (key, item) => {
    try {
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item))
      return jsonOfItem
    } catch (error) {
      console.error(error)
    }
  }

  _updateNote = (text, indexNote, noteData) => {
    let item = noteData[indexNote]
    item.title = this._getNoteTitle(text)
    item.subtitle = this._getNoteTitle(text, true)
    item.content = text
    item.updatedAt = new Date().toLocaleString()

    return noteData
  }

  _onChangeText = (text) => {
    this.setState({text},() => {
      let data = this.state.noteData
      let id = 1, len = data.length
      if (len > 0) {
        id = data[len - 1].id + 1
      }

      let item = [{
        id,
        title: this._getNoteTitle(text),
        subtitle: this._getNoteTitle(text, true),
        content: text,
        createdAt: this.state.createdAt,
        updatedAt: new Date().toLocaleString(),
        deletedAt: null
      }]

      if (text == '') {
        data.slice(0, -1)
      } else {
        if (this.state.indexNote == null) { // add note
          data = [...data, ...item]
        } else { // update note
          data = this._updateNote(text, this.state.indexNote, data)
        }
        this._storeData(KEY_DATA, data)
      }
      // console.log(data);
    })
  }

  _getNoteTitle = (text, isSubtitle = false) => {
    let title = text.split('\n');
    if (isSubtitle) {
      return text != '' && title.length > 1 && title[1].length > 0 ? title[1] : 'No additional text'
    }
    return text != '' ? title[0] : 'New Note'
  }

  componentDidMount() {
    this._retrieveData(KEY_DATA)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewContainer}>
          <Text style={styles.textAddedTime}>{this.state.createdAt}</Text>
          <TextInput
            style={styles.textInput}
            autoFocus={this.state.autoFocus}
            multiline = {true}
            numberOfLines = {height}
            onChangeText={this._onChangeText}
            value={this.state.text}
          />
        </ScrollView>
      </View>
    );
  }   
}