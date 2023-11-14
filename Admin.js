import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

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
            <Animatable.Text style={estilo.h1} animation="zoomInUp" duration={2500} iterationCount={1} direction="normal">Administrador</Animatable.Text>
            <Image
            source={require("./images/soyadmin.jpg")}
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
    height: 745,
    borderColor: "#fca50d",
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: 10,
    marginTop: "5%",
    alignItems: "center",
  },
  
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