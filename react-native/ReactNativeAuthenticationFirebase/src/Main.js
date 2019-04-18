// Main.js
import React, { Component } from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'

class Main extends Component {
  state = {
    currentUser: null
  }

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})