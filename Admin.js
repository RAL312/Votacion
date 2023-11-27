import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const StyledView = styled.View`
 width: 100%;
 height: 100%;
 backgroundColor: #173978;
 justifyContent: center;
 alifgnItems: center;
 `;
 
 const StyledView2 = styled.View`
 width: 95%;
 height: 95%;
 backgroundColor: white;
 borderRadius: 8px;
 marginLeft: 10px;
 alignItems: center;`;

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <StyledView>
        <StyledView2>
          <View style={estilo.fondo2}>
            <View>
            <Animatable.Text style={estilo.h1} animation="zoomInUp" duration={2500} iterationCount={1} direction="normal">Administrador</Animatable.Text>
            <Image
            source={require("./images/admin.png")}
            style={estilo.img1}
            />
            <Text style={estilo.subtitulo}>Ingrese su cuenta única de administrador</Text>

         <TextInput
         style={estilo.caja1}
         placeholder="Email"
         />

        <TextInput
         style={estilo.caja1}
         placeholder="Password"
         secureTextEntry={true}
         />
          
          <TouchableOpacity style={estilo.ingresar} onPress={() => this.props.navigation.navigate('Results')}>
          <Text style={estilo.subtitulo2}>Ingresar</Text>
          </TouchableOpacity>

       
            </View>
          </View>
          </StyledView2>
        </StyledView>
    );
  }
}

const estilo = StyleSheet.create({
  
  
  h1: {
    fontFamily: 'Oswald-VariableFont_wght',
    fontSize: 50,
    color: "black",
    textAlign:"center",
    marginRight: "4%",
    marginTop: "1%",
    marginLeft:"5%"
   },

   img1: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: "5%",
   },

   subtitulo:{
    fontFamily:"OpenSans-VariableFont_wdth,wght",
    fontSize: 15,
    textAlign:"center",
    marginTop: 30,
    color: "black",
   },

   caja1:{
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: "5%",
    borderRadius: 3,
   },

   ingresar:{
    width: 100,
    height: 40,
    marginLeft: 95,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#0E7AC5"
   },
  
   subtitulo2:{
    fontFamily:"OpenSans-VariableFont_wdth,wght",
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center",
    marginTop: 6,
    color: "white",
   },
  
});