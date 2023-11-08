import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={estilo.fondo}>
          <View style={estilo.fondo2}>
            <View>
            <Text style={estilo.h1}>Administrador</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  fondo:{
    width: "100%",
    height: "100%",
    backgroundColor: "#0E7AC5"
  },

  fondo2:{
    width: "95%",
    height:"70%",
    borderColor: "#fca50d",
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: 8,
    marginTop: "5%",
  },
  
  h1: {
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    fontSize: 50,
    color: "black",
    textAlign:"center",
    marginRight: "4%",
    marginTop: "12%"
   },
});