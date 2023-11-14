import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

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

 const StyledText = styled.Text`
 width: 80px;
 height: 40px;
 backgroundColor: #870000;
 borderRadius: 5px;
 color: white;
 textAlign: center;
 marginTop: 40px,;`;


export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contadores: { boton1: 0, boton2: 0, boton3: 0 }
    };
  }

  async componentDidMount() {
    try {
      const contadoresString = await AsyncStorage.getItem('contadores');
      if (contadoresString !== null) {
        const contadores = JSON.parse(contadoresString);
        this.setState({ contadores });
      }
    } catch (error) {
      console.log("Hay un error al obtener contadores desde AsyncStorage:", error);
    }
  }

  resetVotes = async () => {
    await AsyncStorage.removeItem('contadores'); // Borra los votos de AsyncStorage
    this.setState({ contadores: { boton1: 0, boton2: 0, boton3: 0 } }); // Reinicia los votos en el estado local
  };
  
  render() {
    const { contadores } = this.state;
   

    return (
      <View>
        <StyledView>
         <StyledView2>
         <Animatable.Text style={estilo.h1} animation="zoomInUp" duration={2500} iterationCount={1} direction="normal">-Resultados de los votos-</Animatable.Text>

         <Text style={estilo.subtitulo}>A favor: {contadores.boton1}</Text>
         <Text style={estilo.subtitulo2}>En contra: {contadores.boton2}</Text>
         <Text style={estilo.subtitulo3}>Abstinencia: {contadores.boton3}</Text>

         <TouchableOpacity style={{marginTop: 200,}}onPress={this.resetVotes} >
          <StyledText>Reiniciar Votos</StyledText>
        </TouchableOpacity>
        </StyledView2>
        </StyledView>
      </View> 
    );
  }
}41

const estilo = StyleSheet.create ({
   
    h1: {
        fontFamily: 'Oswald-VariableFont_wght',
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
       },

       subtitulo:{
        fontFamily:"OpenSans-VariableFont_wdth,wght",
        fontSize: 20,
        textAlign:"center",
        marginTop: 20,
        color: "green",
        marginLeft: 10
       },

       subtitulo2:{
        fontFamily:"OpenSans-VariableFont_wdth,wght",
        fontSize: 20,
        textAlign:"center",
        marginTop: 20,
        color: "red",
        marginLeft: 10
       },

       subtitulo3:{
        fontFamily:"OpenSans-VariableFont_wdth,wght",
        fontSize: 20,
        textAlign:"center",
        marginTop: 20,
        color: "black",
        marginLeft: 10
       },
      
});