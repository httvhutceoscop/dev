import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList, 
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
import CustomSlideShow from './CustomSlideShow';

const SCREEN_FLAT_LIST = 'flat-list'
const SCREEN_SECTION_LIST = 'section-list'
const SCREEN_LIST_LOAD_MORE = 'list-load-more'
const SCREEN_DATE_TIME_PICKER = 'SCREEN_DATE_TIME_PICKER'

const screenListData = [{
  name: 'Basic Flat List',
  icon: '',
  slug: SCREEN_FLAT_LIST
},{
  name: 'Basic Section List',
  icon: '',
  slug: SCREEN_SECTION_LIST
},{
  name: 'List Load More',
  icon: '',
  slug: SCREEN_LIST_LOAD_MORE
},{
  name: 'Date Time Picker',
  icon: '',
  slug: SCREEN_DATE_TIME_PICKER
},]

class ScreenListItem extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity 
            style={{flex: 1, flexDirection: 'row'}}
            onPress={ () => {
              this.props.parentFlatList.goToScreen(this.props.item.slug)
            }}
          >
          <View style={{
            flex: 1, 
            flexDirection: 'row',
            backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato',
            // backgroundColor: 'mediumseagreen',
          }}>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={{height: 1,backgroundColor: 'white',}}>

        </View>
      </View>
    );
  }
}

export default class HomeScreen extends Component {

  goToScreen = (slug) => {
    switch(slug) {
      case SCREEN_FLAT_LIST:
        this.props.navigation.navigate('ScreenFlatList')
        break;
      case SCREEN_SECTION_LIST:
        this.props.navigation.navigate('ScreenSectionList')
        break;
      case SCREEN_LIST_LOAD_MORE:
        this.props.navigation.navigate('ListLoadMore')
        break;
      case SCREEN_DATE_TIME_PICKER:
        this.props.navigation.navigate('DateTimePickerTester')
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomSlideShow />
        <FlatList
          ref={"screenList"}
          data={screenListData}
          renderItem={ ({item, index}) => {
            // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
            return (
              <ScreenListItem
                item={item}
                index={index}
                parentFlatList={this}
              >
              </ScreenListItem>
            )
          } }
          keyExtractor={ (item, index) => item.name }
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: Platform.OS === 'ios' ? 34 : 0
  },
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  }
})