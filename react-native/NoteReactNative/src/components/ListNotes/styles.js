import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.white,
  },
  headerContainer: {
    // flex: 1,
    // height: 40
  },
  scrollViewContainer: {
    marginBottom: 60,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },
  itemCreatedAt: {
    marginRight: 5
  },
  itemSubTitle: {

  },
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    height:60,
    justifyContent:'center',
    alignItems:'center',
  },
  footerLeft: {
    flex: .8,
    justifyContent:'center',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  textCountNotes: {
    // color: Colors.white
  },
  footerRight: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  },

});

export default styles;
