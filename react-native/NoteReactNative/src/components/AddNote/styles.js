import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    flexDirection: 'column'
  },
  textAddedTime: {
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  textInput: {
    padding: 15,
  },
});

export default styles;
