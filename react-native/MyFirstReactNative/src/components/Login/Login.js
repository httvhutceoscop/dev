import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import styles from './styles';

class Login extends Component {
  render() {
    return (
      <View style = {styles.container} >
        <Text style={TextStyles.fieldTitle}>
          // {strings.email}
          Your email
        </Text>
      </View>
    )
  }
}

export default Login;