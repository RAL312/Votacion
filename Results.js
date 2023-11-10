import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Results extends Component {
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
         <Text style={estilo.h1}>-Resultados de los votos-</Text>
        </View>
       </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create ({
    fondo:{
        width: '100%',
        height: '100%',
        backgroundColor: '#0E7AC5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    fondo2:{
        width: '95%',
        height: '95%',
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    h1: {
        fontFamily: 'Oswald-VariableFont_wght',
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        
       },

});