import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import NotesListContainer  from '../../containers/NotesList';
import HeaderListContainer from "../../containers/HeaderListContainer";
import FooterListContainer from "../../containers/FooterListContainer";

export default class ListNotes extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderListContainer />
        <ScrollView style={styles.scrollViewContainer}>
          <NotesListContainer onRef={ref => (this.child = ref)} {...this.props} />
        </ScrollView>
        <FooterListContainer {...this.props} />
      </View>
    );
  }   
}