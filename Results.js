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

 const StyledSiguienteButton = styled.TouchableOpacity`
 position: absolute;
 bottom: 20px;
 right: 20px;
 padding: 15px;
 backgroundColor: #17a398;
 borderRadius: 5px;
`;


export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contadores: { boton1: 0, boton2: 0, boton3: 0 },
      indiceTexto: 0,
      textos: ["CF01: Garantizar que todos los estudiantes tengan acceso a tecnología actualizada y conexiones a Internet de alta velocidad", 
      "CF02: Invertir en la renovación y mejora de las instalaciones deportivas", 
      "CF03: Implementación de un Sistema de Recompensas para la Asistencia a Conferencias", 
      "CF04: Desarrollar programas de tutorías para apoyar a los estudiantes académicamente", 
      "CF05: Aumentar el apoyo y la financiación para actividades culturales en el campus", 
      "CF06: Instalación de Hamacas en Áreas Comunes del Campus", 
      "CF07: Desarrollo de Programas de Intercambio Internacional", 
      "CF08: Instalación de Estaciones de Carga Solar para Dispositivos Móviles", 
      "CF01: Garantizar que todos los estudiantes tengan acceso a tecnología actualizada y conexiones a Internet de alta velocidad",
      ],
    };
  }

  
  async componentDidMount() {
    try {
      const contadoresString = await AsyncStorage.getItem('contadores');
      const indiceTextoString = await AsyncStorage.getItem('indiceTexto'); // Agrega esta línea
      if (contadoresString !== null) {
        const contadores = JSON.parse(contadoresString);
        const indiceTexto = indiceTextoString !== null ? parseInt(indiceTextoString) : 0; // Convierte a número
        this.setState({ contadores, indiceTexto });
      }
    } catch (error) {
      console.log("Hay un error al obtener contadores desde AsyncStorage:", error);
    }
  }


  // Nueva función para cambiar el texto
  cambiarTexto = async () => {
    try {
      await this.setState(
        (prevState) => ({
          indiceTexto: (prevState.indiceTexto + 1) % 9, // Modificado para que coincida con la longitud del array
        })
      );
  
      // Verifica si es el índice final y realiza la navegación
      if (this.state.indiceTexto === 8) { // Cambiado de 9 a 8 para que coincida con el último índice
        this.props.navigation.navigate('Inicio');
      }
  
      // Guarda el nuevo índice en AsyncStorage
      await AsyncStorage.setItem('indiceTexto', this.state.indiceTexto.toString());
    } catch (error) {
      console.log("Error al cambiar el índice de texto:", error);
    }
  };
  
  resetContadores = async () => {
    await AsyncStorage.removeItem('contadores');
    this.setState({ contadores: { boton1: 0, boton2: 0, boton3: 0 } });
  };
  
  render() {
    const { contadores } = this.state;
   
    return (
      <View>
        <StyledView>
         <StyledView2>
          
         <Animatable.Text style={estilo.h1} animation="zoomInUp" duration={2500} iterationCount={1} direction="normal">-Resultados de los votos-</Animatable.Text>
         <Text style={estilo.texto}>{this.state.textos[this.state.indiceTexto]}</Text>
         <Text style={estilo.subtitulo}>A favor: {contadores.boton1}</Text>
         <Text style={estilo.subtitulo2}>En contra: {contadores.boton2}</Text>
         <Text style={estilo.subtitulo3}>Abstinencia: {contadores.boton3}</Text>

        
         <TouchableOpacity style={{ marginTop: 10 }} onPress={this.resetContadores}>
              <StyledText>Reiniciar Contadores</StyledText>
            </TouchableOpacity>


        <TouchableOpacity
  style={estilo.voto4}
  onPress={() => {
    this.props.navigation.navigate('Tope');
    this.props.navigation.navigate('Votacion');
  }}
>
  <Text style={estilo.subtitulo}></Text>
</TouchableOpacity>
      
        <StyledSiguienteButton onPress={this.cambiarTexto}>
          <Text style={estilo.subtituloNext}>Siguiente</Text>
        </StyledSiguienteButton>

        </StyledView2>
        </StyledView>
      </View> 
    );
  }
}

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

       texto: {
        fontFamily: 'OpenSans-VariableFont_wdth,wght',
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
      },  
    
      voto4: {
        width: 30,
        height: 20,
        backgroundColor: '#0E7AB6',
        marginVertical: 20, 
        borderRadius: 5,
      },

      subtituloNext: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        textAlign: 'center',
      },
    
      
});