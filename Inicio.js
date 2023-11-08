import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';


export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
       <View style={toque.fondo}>
        <View style={toque.fondo2}>
          <View>
          <View
        style={toque.linea1}
        />
        <Text style={toque.h1}> VOTA - PLUS</Text>
        <View
        style={toque.linea}
        />
        <Image
        style={toque.img1}
        source={require("./images/Mainfoto.jpeg")}
        />
        <Text style={toque.subtitulo}>Ingresa aquí para empezar a votar</Text>
        <TextInput 
        style={toque.caja1}
        placeholder="Email"
        />
        <TextInput 
        style={toque.caja1}
        placeholder="Password"
        secureTextEntry={true}
       />
       <TouchableOpacity style={toque.ingresar}>
        <Text style={toque.subtitulo2}>Ingresar</Text>
       </TouchableOpacity>

      <Text style={toque.subtitulo}>Si eres administrador{'\n'} Ingresa aquí con tu cuenta única</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Admin')} ><Text style={toque.subtituloAqui}>Aquí</Text></TouchableOpacity>
        </View>
        </View>
       </View>
      </View>
    );
  }
}

const toque = StyleSheet.create({
  fondo: {
   width: "100%",
   height: "100%",
   backgroundColor: "#0E7AC5"
  },

 fondo2: {
  width: "95%",
  height:"95%",
  borderColor: "#fca50d",
  backgroundColor: "white",
  borderRadius: 8,
  marginLeft: 8,
  marginTop: "5%",
 },

 h1: {
  fontFamily: 'Lato-Regular',
  fontSize: 50,
  color: "black",
  textAlign:"center",
  marginRight: "4%",
  marginTop: "12%"
 },

 img1: {
  width: 250,
  height: 200,
  borderRadius: 10,
  marginLeft: "19%",
  marginTop: 10,
 },

 linea:{
  width: "80%",
  height: 2,
  backgroundColor: 'black',
  marginLeft: "11%",
 },

 subtitulo:{
  fontFamily:"OpenSans-Italic-VariableFont_wdth,wght",
  fontSize: 16,
  textAlign:"center",
  marginTop: 30,
  color: "black",
 },

 subtituloAqui:{
  fontFamily:"OpenSans-VariableFont_wdth,wght",
  fontSize: 16,
  textAlign:"center",
  marginTop: 10,
  color: "blue",
  textDecorationLine: "underline",
 },

 subtitulo2:{
  fontFamily:"OpenSans-VariableFont_wdth,wght",
  fontSize: 16,
  fontWeight: "bold",
  textAlign:"center",
  marginTop: 6,
  color: "white",
 },

 caja1:{
  width: 240,
  height: 40,
  borderWidth: 1,
  borderColor: "black",
  backgroundColor: "white",
  marginTop: 20,
  marginLeft: "20%",
  borderRadius: 3,
 },

 ingresar:{
  width: 100,
  height: 40,
  borderWidth: 1,
  marginLeft: 150,
  marginTop: 15,
  borderRadius: 10,
  backgroundColor: "#3d3c3b"
 },
 

}); 