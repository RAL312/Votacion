import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert, Layout } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

// import { firebase } from '@react-native-firebase/firestore';
import { db } from './Firebase/firebaseConfig';

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

export default class Tope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      selected: 'first',
      
    };
  }


  componentDidMount() {
    // Intenta inicializar Firebase
    // firebase.initializeApp(config); // Asegúrate de inicializar Firebase según tus necesidades
  
    // Verifica si db está definido
    if (typeof db !== 'undefined') {
      console.log('Lo hiciste: Firebase se inicializó correctamente');
    } else {
      console.error('Error: Firebase no se inicializó correctamente');
    }
  }
  render() {

    return (
 
      <StyledView>
        <StyledView2>
          <Text style={estilo.h1}>COMIENZA A VOTAR AHORA</Text>
          <Button
              title="Pulsa aquí"
              type="solid"
              containerStyle={estilo.voto4}
              onPress={() => this.props.navigation.navigate('Votacion')}
             
            />
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

       h1: {
        fontFamily: 'Oswald-VariableFont_wght',
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
       },

       subtituloNext: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        textAlign: 'center',
      },
});

