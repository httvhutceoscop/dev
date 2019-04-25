import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class NoteDetail extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.activeNote.title}</Text>
      </View>
    );
  }
}

NoteDetail.propTypes = {
};

NoteDetail.defaultProps = {
};

const mapStateToProps = (state) => {
  return {
    activeNote: state.activeNote // get from reducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

let NoteDetailContainer = connect(mapStateToProps, mapDispatchToProps)(NoteDetail);

export default NoteDetailContainer;