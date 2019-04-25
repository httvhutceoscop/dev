import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import { ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../config';
import moment from 'moment';

import NotesListContainer  from '../../containers/NotesList';
import NoteDetailContainer  from '../../containers/NoteDetail';

const KEY_DATA = config.storageKey;

class TextDate extends Component {
  render() {
    let updatedAt = moment(new Date(this.props.item.updatedAt)).format('MM/DD/YY');
    let today = moment(new Date()).format('MM/DD/YY');
    if (updatedAt === today) {
      updatedAt = moment(new Date(this.props.item.updatedAt)).format('hh:mm')
    }
    return (
      <Text style={styles.itemCreatedAt}>{updatedAt}</Text>
    );
  }
}

export default class ListNotes extends Component {

  state = {
    isLoading: true,
    noteData: [],
    selectedNote: []
  };

  _retrieveData = async (key) => {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      if (retrievedItem != null) {
        const item = JSON.parse(retrievedItem);
        this.setState({
          isLoading: false,
          noteData: [...item]
        })
      }
    } catch(error) {
      console.error(error)
    }
  };

  _countNotes = (noteData) => {
    let count = 0;
    noteData.map((note) => {
      if (note.deletedAt == null) {
        count++
      }
    });

    return count
  };

  _renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Header
          centerComponent={{ text: 'Notes', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={{ icon: 'edit', color: '#fff' }}
        />
      </View>
    )
  };
  _renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.footerLeft}>
          <Text style={styles.textCountNotes}>{this._countNotes(this.state.noteData)} Notes</Text>
        </View>
        <View style={styles.footerRight}>
          <Icon
            iconStyle={{marginLeft: 140}}
            size={24}
            raised
            name='plus'
            type='font-awesome'
            color='#f50'
            onPress={() => this.moveToScreen('AddNote')} />
        </View>
      </View>
    )
  };

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount');
    this.props.navigation.addListener('didFocus', () => {
      this._retrieveData(KEY_DATA)
    })
  }

  componentWillUpdate() {
    console.log('will update')
  }

  moveToScreen = (screen, params = {}) => {
    this.props.navigation.navigate(screen, params)
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader}
        <ScrollView style={styles.scrollViewContainer}>
          <NotesListContainer name={'tri'} {...this.props} />
        </ScrollView>
        {this._renderFooter}
      </View>
    );
  }   
}