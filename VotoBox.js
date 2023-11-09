import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class VotoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleVoto = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }), () => {
      this.props.onVoteChange(this.props.texto, this.state.isSelected);
    });
  };

  render() {
    const { texto } = this.props;
    const { isSelected } = this.state;

    return (
      <TouchableOpacity onPress={this.handleVoto}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: isSelected ? 'red' : 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isSelected && <Icon name="food" type="ionicon" color="white" />}
          </View>
          <Text style={{ marginLeft: 10 }}>{texto}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}