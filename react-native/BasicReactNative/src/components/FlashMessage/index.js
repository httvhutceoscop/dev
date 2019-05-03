import React, {Component} from 'react';
import { View } from "react-native";
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";
import Button from "react-native-button";

class MyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            /* HERE WE GONE SHOW OUR FIRST MESSAGE */
            showMessage({
              message: "My message title",
              description: "My message description",
              type: "default",
              backgroundColor: "purple", // background color
              color: "#606060", // text color
              onPress: () => {
                /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
                alert('onPress in showMessage')
              },
            });
          }}
          title="Request Details"
          color="#841584"
        />
      </View>
    );
  }
}

class Index extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View ref={"otherView1"} />
        <View ref={"otherView2"} />
        <View ref={"otherView3"} />
        /* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */
        <FlashMessage position="top" />
        <MyScreen />
      </View>
    );
  }
}

export default Index;