import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { doc, getDoc, updateDoc, onSnapshot } from '@firebase/firestore';
import { db } from './Firebase/firebaseConfig';

const StyledView = styled.View`
   flexGrow: 1;
   justifyContent: center;
   alignItems: center;
   backgroundColor: #173978;`;
 
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
      contadores: { boton1: 0, boton2: 0, boton3: 0 },
      textos: ["CE01 - 03/23 ", 
      "CE02 - 03/23", 
      "CE03 - 04/23", 
      "CE04 - 05/23", 
      "CE05 - 06/23", 
      "CE06 - 02/24", 
      "CE07 - 01/25", 
      "CE08 - 02/25", 
      ],
      indiceTexto: 0,
      votoRealizado: false,
      botonesHabilitados: true,
     
    };
    this.handleVote = this.handleVote.bind(this);
    
  }

 

  // cambiarTexto = async () => {
  //   try {
  //     await this.setState(
  //       (prevState) => ({
  //         indiceTexto: (prevState.indiceTexto + 1) % 9, // Modificado para que coincida con la longitud del array
  //       })
  //     );
  
  //     // Verifica si es el índice final y realiza la navegación
  //     if (this.state.indiceTexto === 8) { // Cambiado de 9 a 8 para que coincida con el último índice
  //       this.props.navigation.navigate('Inicio');
  //     }
  
  //     // Guarda el nuevo índice en AsyncStorage
  //     await AsyncStorage.setItem('indiceTexto', this.state.indiceTexto.toString());
  //   } catch (error) {
  //     console.log("Error al cambiar el índice de texto:", error);
  //   }
  // };


  

  realizarVoto = (boton) => {
    if (!this.state.votoRealizado) {
      this.setState({ votoRealizado: true});
    }
  };


  async handleVote(voteType) {
    try {
      const votacionesRef = doc(db, 'votaciones', 'qiVpZyqwH29pdWmxm6Zs');
      const docSnap = await getDoc(votacionesRef);
      const data = docSnap.data();

      if (voteType === 'A_favor') {
        data.A_favor += 1;
      } else if (voteType === 'En_contra') {
        data.En_contra += 1;
      } else if (voteType === 'Abstinencia') {
        data.Abstinencia += 1;
      }

      await updateDoc(votacionesRef, data);
    } catch (error) {
      console.error('Error al votar:', error);
    }
  }
 
  

  cambiarTexto = async () => {
    try {
      const { indiceTexto, textos } = this.state;
      const nextIndex = (indiceTexto + 1) % textos.length;
      const textoRef = doc(db, 'textos', (nextIndex + 1).toString());
      await updateDoc(textoRef, { texto: true });

      this.setState({ indiceTexto: nextIndex });
    } catch (error) {
      console.log("Error al cambiar el índice de texto en Votacion:", error);
    }
  };

  render() {
 const { textos, indiceTexto } = this.state;
    
    return (
      
     <StyledView>
       <StyledView2>
        <Text style={estilo.usuario}>
          {/* {this.props.route.params.name}  */}
          </Text>
          <View>
            <Text style={estilo.texto}> {textos[indiceTexto]}</Text>
          </View>

          <TouchableOpacity
            style={estilo.voto}
            onPress={() => {this.realizarVoto('boton1')
            this.handleVote('A_favor')}}
            disabled={this.state.votoRealizado || !this.state.botonesHabilitados} // Deshabilita el botón si ya votó // Deshabilita el botón si ya votó 
            >
            <Text style={estilo.subtitulo}>A favor</Text>


          </TouchableOpacity>
       
          <TouchableOpacity
            style={estilo.voto2}
            onPress={() => {this.realizarVoto('boton2')
            this.handleVote('En_contra')}}
            disabled={this.state.votoRealizado || !this.state.botonesHabilitados} // Deshabilita el botón si ya votó 
>
            <Text style={estilo.subtitulo}>En contra</Text>

          </TouchableOpacity>

          <TouchableOpacity
             style={estilo.voto3}
            onPress={() => {this.realizarVoto('boton3')
            this.handleVote('Abstinencia')}}
            disabled={this.state.votoRealizado || !this.state.botonesHabilitados} // Deshabilita el botón si ya votó 
>
            <Text style={estilo.subtitulo}>Abstinencia</Text>

          </TouchableOpacity>
        
          <View>
            {this.state.votoRealizado && (
              <Text style={estilo.mensaje}>Ya votaste, espera la siguiente propuesta</Text>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              // Lógica para manejar el cambio de texto en la pestaña 'Votacion'
              // Puedes implementar algo similar a cambiarTexto en Results.js
            }}
          >
            <Text>Siguiente</Text>
          </TouchableOpacity>
           
          </StyledView2>
          <TouchableOpacity
  style={estilo.voto4}
  onPress={() => {
    this.props.navigation.navigate('Results');
  }}
>
  <Text style={estilo.subtitulo}></Text>
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
    backgroundColor: '#2E7BB1',
    marginVertical: 20, 
    borderRadius: 5,
  },

  texto: {
    fontFamily: 'Lato-Bold',
    fontSize: 35,
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


