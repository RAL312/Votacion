import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Votacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 1,
      contadores: { boton1: 0, boton2: 0, boton3: 0 },
      textos: ["CF01: Garantizar que todos los estudiantes tengan acceso a tecnología actualizada y conexiones a Internet de alta velocidad", 
      "CF02: Invertir en la renovación y mejora de las instalaciones deportivas", 
      "CF03: Implementación de un Sistema de Recompensas para la Asistencia a Conferencias", 
      "CF04: Desarrollar programas de tutorías para apoyar a los estudiantes académicamente", 
      "CF05: Aumentar el apoyo y la financiación para actividades culturales en el campus", 
      "CF06: Instalación de Hamacas en Áreas Comunes del Campus", 
      "CF07: Desarrollo de Programas de Intercambio Internacional", 
      "CF08: Instalación de Estaciones de Carga Solar para Dispositivos Móviles", 
      "CF09: Implementación de un Programa de Mentores para Estudiantes de Primer Año"],
      indiceTexto: 0,
    };
  }
  
  cambiarTexto = () => {
    this.setState((prevState) => ({
      indiceTexto: (prevState.indiceTexto + 1) % 10,
    }), () => {
      //Ya cuando cambia el texto, verifica que sea el 9 y amonos.
      if (this.state.indiceTexto === 9) {
        this.props.navigation.navigate('Inicio');
      }
    });
  };

  async componentDidMount() {
    try {
      const contadoresString = await AsyncStorage.getItem('contadores');
      if (contadoresString !== null) {
        const contadores = JSON.parse(contadoresString);
        this.setState({ contadores });
      }
    } catch (error) {
      console.log("Error al obtener contadores desde AsyncStorage", error);
    }
  }

  theCont = async (boton) => {
    await this.setState(prevState => {
      const ContadorNuevo = { ...prevState.contadores };
      ContadorNuevo[boton]++;
      return { contadores: ContadorNuevo };
    });

    // Con esto guarda los contadores actualizados en AsyncStorage y así xd
    AsyncStorage.setItem('contadores', JSON.stringify(this.state.contadores));
  };

  render() {
    
    
    return (
      
      <ScrollView contentContainerStyle={estilo.fondo}>
        <View style={estilo.fondo2}>
        <Text style={estilo.usuario}>
          {this.props.route.params.name}
          </Text>
          <View>
          
            <Text style={estilo.texto}> {this.state.textos[this.state.indiceTexto]}</Text>
          </View>

          <TouchableOpacity style={estilo.voto} onPress={() => {
            this.cambiarTexto();
            this.theCont('boton1');}}>
            <Text style={estilo.subtitulo}>A favor</Text>

          </TouchableOpacity>
       
          <TouchableOpacity style={estilo.voto2} onPress={() => {
          this.cambiarTexto();
          this.theCont('boton2');}}>
            <Text style={estilo.subtitulo}>En contra</Text>

          </TouchableOpacity>

          <TouchableOpacity style={estilo.voto3} onPress={() => {
            this.cambiarTexto();
            this.theCont('boton3');}}>
            <Text style={estilo.subtitulo}>Abstinencia</Text>

          </TouchableOpacity>
        
          {/* <TouchableOpacity style={estilo.voto3} onPress={() => this.props.navigation.navigate('Results')}>
            <Text style={estilo.subtitulo}>Resultados...</Text>
          </TouchableOpacity> */}

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
    backgroundColor: '#06b80e',
    marginVertical: 20, // Ajusta el espacio vertical según tus necesidades
    borderRadius: 5,
  },

  voto2: {
    width: 100,
    height: 70,
    backgroundColor: '#ba0909',
    marginVertical: 20, // Ajusta el espacio vertical según tus necesidades
    borderRadius: 5,
  },

  voto3: {
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
  },

  usuario:{
    fontSize: 20,
    textAlign: 'left',
    color: 'blue'
  },
});


