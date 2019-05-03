import React, { Component } from 'react';
import Slideshow from 'react-native-slideshow';

export default class CustomSlideShow extends Component {
  state = {
    position: 1,
    interval: null,
    dataSource: [
      {
        title: 'Title 1',
        caption: 'Caption 1',
        url: 'http://placeimg.com/640/480/any',
      }, {
        title: 'Title 2',
        caption: 'Caption 2',
        url: 'http://placeimg.com/640/480/any',
      }, {
        title: 'Title 3',
        caption: 'Caption 3',
        url: 'http://placeimg.com/640/480/any',
      },
    ],
  };
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
 
  render() {
    return (
      <Slideshow 
        overlay
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })}
        onPress={(item, index) => {
          alert(`item: ${JSON.stringify(item)}`)
        }}
      />
    );
  }
}