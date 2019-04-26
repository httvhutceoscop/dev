import React, {Component} from 'react';
import styles from "../components/ListNotes/styles";
import {Header} from "react-native-elements";
import {View} from "react-native";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from "react-native-vector-icons/FontAwesome";
import {editAll, selectAll} from "../actions";

class HeaderList extends Component {

  _renderRightHeaderComponent = () => {
    return (
      <Icon
        raised size={24} name='edit' type='font-awesome' color='#fff'
        onPress={() => this.props.selectAll} />
    )
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        <Header
          centerComponent={{ text: 'Notes', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={this._renderRightHeaderComponent}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  const actions = {
    editAll: editAll,
    selectAll: selectAll
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapDispatchToProps)(HeaderList);