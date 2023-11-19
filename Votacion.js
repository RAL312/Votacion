import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';


const StyledView = styled.View`
   flexGrow: 1;
   justifyContent: center;
   alignItems: center;
   backgroundColor: #0E7AC5;`;
 
 const StyledView2 = styled.View`
    width: 95%;
    height: 60%;
    borderColor: #fca50d;
    backgroundColor: white;
    borderRadius: 8px;
    justifyContent: center;
    alignItems: center;
    paddingVertical: 40px;`;


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
      "CF09: Implementación de un Programa de Mentores para Estudiantes de Primer Año,",
      "CF09: Implementación de un Programa de Mentores para Estudiantes de Primer Año"],
      indiceTexto: 0,
      votoRealizado: false,
      botonesHabilitados: true,
    };
  }



  async componentDidMount() {
    try {
      const contadoresString = await AsyncStorage.getItem('contadores');
      const indiceTextoString = await AsyncStorage.getItem('indiceTexto');
      if (contadoresString !== null && indiceTextoString !== null) {
        const contadores = JSON.parse(contadoresString);
        const indiceTexto = parseInt(indiceTextoString);
        this.setState({ contadores, indiceTexto });
      }
    } catch (error) {
      console.log("Hay un error al obtener contadores desde AsyncStorage:", error);
    }
  }

 

  cambiarTexto = () => {
    this.setState(
      (prevState) => ({
        indiceTexto: (prevState.indiceTexto + 1) % this.state.textos.length,
        botonesHabilitados: true,
        votoRealizado: false,
      }),
      () => {
        if (this.state.indiceTexto === this.state.textos.length - 1) {
          this.props.navigation.navigate('Inicio');
        }
        AsyncStorage.setItem('indiceTexto', this.state.indiceTexto.toString());
      }
    );
  };
  


 
  cambiarTexto = () => {
    this.setState(
      (prevState) => ({
        indiceTexto: (prevState.indiceTexto + 1) % textosVotacion.length,
      }),
      () => {
        if (this.state.indiceTexto === textosVotacion.length - 1) {
          this.props.navigation.navigate('Inicio');
        }
        AsyncStorage.setItem('indiceTexto', this.state.indiceTexto.toString());
      }
    );
  };
  
  theCont = async (boton) => {
    await this.setState(prevState => {
      const ContadorNuevo = { ...prevState.contadores };
      ContadorNuevo[boton]++;
      return { contadores: ContadorNuevo };
    });

    // Con esto guarda los contadores actualizados en AsyncStorage y así xd
    AsyncStorage.setItem('contadores', JSON.stringify(this.state.contadores));
  };

  
  realizarVoto = (boton) => {
    if (!this.state.votoRealizado) {
      this.setState({ votoRealizado: true, siguienteVisible: true });
      this.theCont(boton);
    }
  };



  render() {

    
    return (
      
     <StyledView>
       <StyledView2>
        <Text style={estilo.usuario}>
          {/* {this.props.route.params.name}  */}
          </Text>
          <View>
            <Text style={estilo.texto}> {this.state.textos[this.state.indiceTexto]}</Text>
          </View>

          <TouchableOpacity
            style={estilo.voto}
            onPress={() => this.realizarVoto('boton1')}
            disabled={this.state.votoRealizado || !this.state.botonesHabilitados} // Deshabilita el botón si ya votó 
            >
            <Text style={estilo.subtitulo}>A favor</Text>


          </TouchableOpacity>
       
          <TouchableOpacity
            style={estilo.voto2}
            onPress={() => this.realizarVoto('boton2')}
            disabled={this.state.votoRealizado || !this.state.botonesHabilitados}
>
            <Text style={estilo.subtitulo}>En contra</Text>

          </TouchableOpacity>

          <TouchableOpacity
             style={estilo.voto3}
            onPress={() => this.realizarVoto('boton3')}
            disabled={this.state.votoRealizado || !this.state.botonesHabilitados}
>
            <Text style={estilo.subtitulo}>Abstinencia</Text>

          </TouchableOpacity>
        
          <View>
            {this.state.votoRealizado && (
              <Text style={estilo.mensaje}>Ya votaste, espera la siguiente propuesta</Text>
            )}
          </View>
           
          </StyledView2>
          <TouchableOpacity style={estilo.voto4} onPress={() => this.props.navigation.navigate('Results')}>
            <Text style={estilo.subtitulo}>Resultados...</Text>
          </TouchableOpacity> 

      
     

        </StyledView>
    );
  }
}

const estilo = StyleSheet.create({

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
    marginVertical: 20, 
    borderRadius: 5,
  },

  voto3: {
    width: 100,
    height: 70,
    backgroundColor: 'gray',
    marginVertical: 20, // Ajusta el espacio vertical según tus necesidades
    borderRadius: 5,
  },

  voto4: {
    width: 30,
    height: 20,
    backgroundColor: '#0E7AB6',
    marginVertical: 20, 
    borderRadius: 5,
  },

  texto: {
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    marginTop: -60,
  },  

  subtitulo: {
    fontFamily: 'Lato-Bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
  },

  subtituloNext: {
    fontFamily: 'Lato-Bold',
    color: 'white',
    textAlign: 'center',
  },

  usuario:{
    fontSize: 20,
    textAlign: 'left',
    color: 'blue'
  },

  mensaje: {
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
    color: '#e61938',
    textAlign: 'center',
    fontSize: 17,
    marginTop: -1,
  },
});


