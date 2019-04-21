/**
 * Mr Nguyen Tien Viet
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 * Email: tienvietnguyen1110@gmail.com
 */

import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Platform } from 'react-native';
import { programmingLanguageData } from '../data/ListOfProgrammingLanguage';

class SectionListItem extends Component {
  render() {
    return (
      <View style={styles.containerItem}>
        <Text style={styles.textName}>
          {this.props.item.name}
        </Text>
        <View style={styles.separateLine}></View>
      </View>
    );
  }
}

class SectionHeader extends Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>
          {this.props.section.title}
        </Text>
      </View>
    );
  }
}

export default class BasicSectionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={ ({item, index}) => {
            return (
              <SectionListItem item={item} index={index}>
              
              </SectionListItem>
            )
          }}
          renderSectionHeader={({section}) => {
            return (<SectionHeader section={section} />)
          }}
          sections={ programmingLanguageData }
          keyExtractor={ (item, index) => item.name }
        >
        </SectionList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0
  },
  containerHeader: {
    flex: 1,
    backgroundColor: 'rgb(77, 120, 140)'
  },
  containerItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(98, 197, 184)'
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(173, 252, 250)',
    marginLeft: 20,
    marginRight: 10,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 20
  },
  separateLine: {
    backgroundColor: 'rgb(77, 120, 140)',
    height: 1,
    margin: 4,
    marginLeft: 20,
    marginRight: 10
  }
})