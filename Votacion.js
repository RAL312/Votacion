import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default class Votacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votoSeleccionado: null,
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={estilo.fondo}>
        <View style={estilo.fondo2}>
          <View>
            <Text style={estilo.texto}>¿Considera importante el beneficiar a los estudiantes a tener mayor seguridad dentro y sobre todo fuera de la escuela?</Text>
          </View>
          <TouchableOpacity style={estilo.voto}>
            <Text style={estilo.subtitulo}>Aprobación</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.voto}>
            <Text style={estilo.subtitulo}>Negación</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.voto}>
            <Text style={estilo.subtitulo}>Abstinencia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const estilo = StyleSheet.create({
  fondo: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E7AC5',
  },

  fondo2: {
    width: '95%',
    borderColor: '#fca50d',
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40, 
  },
  
  voto: {
    width: 100,
    height: 70,
    backgroundColor: '#133352',
    marginVertical: 20, // Ajusta el espacio vertical según tus necesidades
    borderRadius: 5,
  },

  texto: {
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
  },  

  subtitulo: {
    fontFamily: 'Lato-Bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
  }
});
