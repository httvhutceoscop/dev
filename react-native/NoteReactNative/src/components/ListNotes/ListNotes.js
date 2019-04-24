import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import {
  Button,
  ListItem,
  Header,
  CheckBox
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../config';
import moment from 'moment';

var {width, height} = Dimensions.get('window')
const KEY_DATA = config.storageKey

class TextDate extends Component {
  render() {
    var updatedAt = moment(new Date(this.props.item.updatedAt)).format('MM/DD/YY')
    var today = moment(new Date()).format('MM/DD/YY')
    if (updatedAt == today) {
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
  }

  _retrieveData = async (key) => {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key)
      if (retrievedItem != null) {
        const item = JSON.parse(retrievedItem)
        this.setState({
          isLoading: false,
          noteData: [...item]
        })
      }
    } catch(error) {
      console.error(error)
    }

    return
  }

  _countNotes = (noteData) => {
    let count = 0
    noteData.map((note) => {
      if (note.deletedAt == null) {
        count++
      }
    })

    return count
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
    this.props.navigation.addListener('didFocus', () => {
      this._retrieveData(KEY_DATA)
    })
  }

  componentWillUpdate() {
    console.log('will update')
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item, index }) => {
    if(item.deletedAt == null) {
      return (
        <ListItem
          title={(<Text numberOfLines={1} style={styles.itemTitle}>{item.title}</Text>)}
          subtitle={(
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextDate item={item} />
              <Text numberOfLines={1} style={styles.itemSubTitle}>{item.subtitle}</Text>
            </View>
          )}
          bottomDivider
          onPress={ () => {
            this.moveToScreen('AddNote', { indexNote: index })
          }}
          onLongPress={() => {
            this.setState({ selectedNote: [...this.state.selectedNote, ...[index]] })
            console.log(this.state.selectedNote)
          }}
          chevron
          
        />)
    }
    return
  }

  moveToScreen = (screen, params = {}) => {
    this.props.navigation.navigate(screen, params)
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Header
            centerComponent={{ text: 'Notes', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
            rightComponent={{ icon: 'edit', color: '#fff' }}
          />
        </View>

        <ScrollView style={styles.scrollViewContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.noteData}
            renderItem={this.renderItem}
          />
        </ScrollView>

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

      </View>
    );
  }   
}