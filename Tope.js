import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
 width: 100%;
 height: 100%;
 backgroundColor: #0E7AC5;
 justifyContent: center;
 alifgnItems: center;
 `;
 
 const StyledView2 = styled.View`
 width: 95%;
 height: 800px;
 borderColor: #fca50d;
 backgroundColor: white;
 borderRadius: 8px;
 marginLeft: 10px;
 justifyContent: center;
 alignItems: center;`;

export default class Tope extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <StyledView>
        <StyledView2>
        <TouchableOpacity style={estilo.voto4} onPress={() => this.props.navigation.navigate('Votacion')}>
            <Text style={estilo.subtitulo}></Text>
          </TouchableOpacity> 

        </StyledView2>
      </StyledView>
    );
  }
}

const estilo = StyleSheet.create({
    texto: {
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
      },  
    
      voto4: {
        width: 80,
        height: 60,
        backgroundColor: '#0E7AB6',
        marginVertical: 20, 
        borderRadius: 5,
      },
    
      subtitulo:{
        fontFamily:"OpenSans-VariableFont_wdth,wght",
        fontSize: 16,
        textAlign:"center",
        marginTop: 30,
        color: "black",
       
       },
      
});