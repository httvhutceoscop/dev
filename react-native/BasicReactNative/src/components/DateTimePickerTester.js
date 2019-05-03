import React, { Component } from "react";
import { View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import {Button, Text} from "react-native-elements";

export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      mode: 'datetime',
      dateTimeValue: new Date().toLocaleString()
    };
  }

  showDateTimePicker = (mode) => {
    console.log(mode);
    this.setState({
      isDateTimePickerVisible: true,
      mode: mode
    });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.setState({dateTimeValue: date.toLocaleString()});
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{marginBottom: 15}} h4>{this.state.dateTimeValue}</Text>

        <Button
          style={{marginBottom: 10}}
          title="Show DateTimePicker Default Mode"
          onPress={()=>{
            this.showDateTimePicker('datetime');
          }}
        />

        <Button
          style={{marginBottom: 10}}
          title="Show DateTimePicker"
          onPress={()=>{
            this.showDateTimePicker('datetime');
          }}
        />

        <Button
          style={{marginBottom: 10}}
          title="Show DatePicker"
          onPress={()=>{
            this.showDateTimePicker('date');
          }}
        />

        <Button
          style={{marginBottom: 10}}
          title="Show TimePicker"
          onPress={()=>{
            this.showDateTimePicker('time');
          }}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode={this.state.mode}
        />
      </View>
    );
  }
}