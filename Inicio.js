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
       <View style={estilo.fondo}>
        <View style={estilo.fondo2}>
          <View>
          <View
        style={estilo.linea1}
        />
        <Text style={estilo.h1}> VOTA - PLUS</Text>
        <View
        style={estilo.linea}
        />
        <Image
        style={estilo.img1}
        source={require("./images/Mainfoto.jpeg")}
        />
        <Text style={estilo.subtitulo}>Ingresa aquí para empezar a votar</Text>
        <TextInput 
        style={estilo.caja1}
        placeholder="Email"
        />
        <TextInput 
        style={estilo.caja1}
        placeholder="Password"
        secureTextEntry={true}
       />
       <TouchableOpacity style={estilo.ingresar}
       onPress={() => this.props.navigation.navigate('Votacion')}>
        <Text style={estilo.subtitulo2}>Ingresar</Text>
       </TouchableOpacity>

      <Text style={estilo.subtitulo}>Si eres administrador{'\n'} Ingresa con tu cuenta única:</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Admin')} ><Text style={estilo.subtituloAqui}>Aquí</Text></TouchableOpacity>
        </View>
        </View>
       </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  fondo: {
   width: "100%",
   height: "100%",
   backgroundColor: "#0E7AC5"
  },

 fondo2: {
  width: "95%",
  height: 800,
  borderColor: "#fca50d",
  backgroundColor: "white",
  borderRadius: 8,
  marginLeft: 10,
  marginTop: "5%",
 },

 h1: {
  fontFamily: 'Oswald-VariableFont_wght',
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
  fontFamily:"OpenSans-VariableFont_wdth,wght",
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
  marginLeft: 150,
  marginTop: 15,
  borderRadius: 10,
  backgroundColor: "#0E7AC5"
 },
 
 
}); 