import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    
    const acceder = () => {
     //Codigo para resivir los datos del servidor
      const _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          if (xhttp.responseText === '0') {
            Alert.alert(
              'Ha ocurrido un error :(',
              'La contraseña es incorrecta. Intenta de nuevo.'
              );
            return; 
          } else if (xhttp.responseText === '3') {
            Alert.alert(
              'Ha ocurrido un error :(',
              'Cuenta no existente. ¡Crea una cuenta con nosotros!'
              );
              return; 
            }else{
              // Con la referencia del constructor copiada
              _this.props.navigation.navigate('Votacion', {name: xhttp.responseText, email: _this.state.email, password: _this.state.password});
            }
          }
      };
      xhttp.open("GET", "https://vibronic-components.000webhostapp.com/verifica.php?correo=" + this.state.correo + "&contrasena=" + this.state.contrasena, true);
      xhttp.send();
    
  
    }
    return (
      <View>
       <View style={estilo.fondo}>
        <View style={estilo.fondo2}>
          <View>
          <View
        style={estilo.linea1}
        />
        <Text style={estilo.h1}>  VOTA - PLUS</Text>
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
        onChangeText={correo => this.setState({ correo })}
        />
        <TextInput 
        style={estilo.caja1}
        placeholder="Password"
        onChangeText={contrasena => this.setState({ contrasena })}
        secureTextEntry={true}
       />
       <TouchableOpacity style={estilo.ingresar}
       onPress={acceder}>
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
  marginLeft: 10
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