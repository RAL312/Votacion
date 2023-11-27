import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
const StyledView = styled.View`
 width: 100%;
 height: 100%;
 backgroundColor: #173978;
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

export default class Gracias extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     
      <StyledView>
        <StyledView2>
          <Text style={estilo.h1}>¡GRACIAS POR VOTAR!</Text>
          <Button
              title="Regregar al inicio"
              type="solid"
              containerStyle={estilo.voto4}
              onPress={() => this.props.navigation.navigate('Inicio')}
            />

        </StyledView2>
      </StyledView>
    
    );
  }
}

const estilo = StyleSheet.create ({

    h1: {
        fontFamily: 'Oswald-VariableFont_wght',
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
       },
});