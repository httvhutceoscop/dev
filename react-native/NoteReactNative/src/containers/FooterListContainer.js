import React, {Component} from 'react';
import styles from "../components/ListNotes/styles";
import {Text, View} from "react-native";
import NoteController from "../controllers/NoteController";
import Icon from "react-native-vector-icons/FontAwesome";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FooterListContainer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.footerLeft}>
          <Text style={styles.textCountNotes}>{NoteController.countNotes()} Notes</Text>
        </View>
        <View style={styles.footerRight}>
          <Icon
            iconStyle={{marginLeft: 140}}
            size={24}
            raised
            name='plus'
            type='font-awesome'
            color='#f50'
            onPress={() => this.props.navigation.navigate('AddNote')} />
        </View>
      </View>
    );
  }
}

// function mapDispatchToProps (dispatch) {
//   const actions = {
//   //   editAll: editAll,
//   };
//   return bindActionCreators(actions, dispatch);
// }

export default connect()(FooterListContainer);