import React, {Component} from 'react';
import { View, Text } from "react-native";
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";
import {Button} from "react-native-elements";

class Index extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{margin: 50}} ref={"otherView1"}>
          <Button
            onPress={() => {
              /* HERE WE GONE SHOW OUR FIRST MESSAGE */
              showMessage({
                message: "My message title",
                description: "My message description",
                type: "success",
                // backgroundColor: "purple",
                // color: "#606060",
                onPress: () => {
                  alert('onPress in showMessage')
                },
              });
            }}
            title="Request Details"
            type="outline"
          />
        </View>

        <FlashMessage position="top" />
      </View>
    );
  }
}

export default Index;