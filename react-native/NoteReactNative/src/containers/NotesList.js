/**
 * Mr. Nguyen Tien Viet
 * Email: tienvietnguyen1110@gmail.com
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, FlatList} from "react-native";
import {selectNote, getNotes} from "../actions";
import {ListItem} from "react-native-elements";
import styles from "../components/ListNotes/styles";
import moment from 'moment';
import AsyncStorage from "@react-native-community/async-storage";
import config from "../config";

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

class NotesList extends Component {
  propTypes = {};
  state = {};

  _getNotes = async (key) => {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      if (retrievedItem != null) {
        const item = JSON.parse(retrievedItem);
        let data = [...item];
        this.props.fetchNotes(data);
      }
    } catch(error) {
      console.error(error)
    }
  };

  componentDidMount() {
    this._getNotes(KEY_DATA);
  }

  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({item, index}) => {
    return <ListItem
      title={(<Text numberOfLines={1} style={styles.itemTitle}>{item.title} {this.props.name}</Text>)}
      subtitle={(
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextDate item={item} />
          <Text numberOfLines={1} style={styles.itemSubTitle}>{item.subtitle}</Text>
        </View>
      )}
      bottomDivider
      chevron
      onPress={()=>{
        this.props.navigation.navigate('AddNote', { indexNote: index });
      }} />
  };

  render() {
    return <FlatList
      keyExtractor={this._keyExtractor}
      data={this.props.notes}
      renderItem={this._renderItem} />
  }
}

/**
 * convert state to props
 * props is public NotesList's property
 * @param state
 */
function mapStateToProps(state) {
  return {
    notes: state.notes, // get from reducer
  }
}

/**
 *convert dispatch to props
 * move action to here
 * @param dispatch
 * @returns {{selectNote: selectNote}|ActionCreator<any>|ActionCreatorsMapObject<any>}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectNote: selectNote,
    fetchNotes: getNotes
  }, dispatch);
}

// container components to connect the presentational components to Redux
// convert component to container
let NotesListContainer = connect(mapStateToProps, mapDispatchToProps)(NotesList);

export default NotesListContainer;