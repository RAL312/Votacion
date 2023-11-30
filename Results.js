import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import { doc, onSnapshot, updateDoc, getDoc  } from '@firebase/firestore';
import { db } from './Firebase/firebaseConfig';

const StyledView = styled.View`
 width: 100%;
 height: 100%;
 backgroundColor: #173978;
 justifyContent: center;
 alifgnItems: center;
 `;
 
 const StyledView2 = styled.View`
 width: 94%;
 height: 94%;
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
      textos: ["CE01 - 03/23 ", 
      "CE02 - 03/23", 
      "CE03 - 04/23", 
      "CE04 - 05/23", 
      "CE05 - 06/23", 
      "CE06 - 02/24", 
      "CE07 - 01/25", 
      "CE08 - 02/25", 
      ],
      resultados: {
        A_favor: 0,
        En_contra: 0,
        Abstinencia: 0,
      },
      currentIndex: 1,
      currentText: '',
    };
  
  }

  

  
  // componentDidMount() {
  //   const votacionesRef = doc(db, 'votaciones', 'qiVpZyqwH29pdWmxm6Zs');
  //   const unsubscribe = onSnapshot(votacionesRef, (docSnap) => {
  //     const data = docSnap.data();
  //     this.setState({
  //       resultados: {
  //         A_favor: data.A_favor || 0,
  //         En_contra: data.En_contra || 0,
  //         Abstinencia: data.Abstinencia || 0,
  //       },
  //     });
  //   });

  //   this.unsubscribe = unsubscribe;
  // }

 
  
  // Función para cambiar el texto
  // async cambiarTexto() {
  //   try {
  //     await this.setState((prevState) => ({
  //       indiceTexto: (prevState.indiceTexto + 1) % 9,
  //     }));

  //     if (this.state.indiceTexto === 8) {
  //       this.props.navigation.navigate('Gracias');
  //     }

  //     await AsyncStorage.setItem('indiceTexto', this.state.indiceTexto.toString());
  //   } catch (error) {
  //     console.log("Error al cambiar el índice de texto:", error);
  //   }
  // }

  componentDidMount() {
    // Obtener el texto inicial al cargar el componente
    this.obtenerTexto(this.state.currentIndex);

    // Configurar el listener para cambios en el texto actual
    const textoDocRef = doc(db, 'textos', this.state.currentIndex.toString());
    this.unsubscribe = onSnapshot(textoDocRef, (docSnap) => {
      const data = docSnap.data();
      this.setState({ currentText: data.texto });
    });
  }

  componentWillUnmount() {
    // Limpiar el listener cuando el componente se desmonta
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  async obtenerTexto(index) {
    try {
      const textoDocRef = doc(db, 'textos', index.toString());
      const docSnap = await getDoc(textoDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        this.setState({ currentText: data.texto });
      } else {
        console.log("El documento no existe.");
      }
    } catch (error) {
      console.error("Error al obtener el texto:", error);
    }
  }

  cambiarTexto = () => {
    // Cambiar al siguiente texto (circularmente del 1 al 8)
    const nextIndex = (this.state.currentIndex % 8) + 1;
    this.setState({ currentIndex: nextIndex }, () => {
      this.obtenerTexto(this.state.currentIndex);
    });
  };

  async reiniciarVotos() {
    try {
      const votacionesRef = doc(db, 'votaciones', 'qiVpZyqwH29pdWmxm6Zs');
      await updateDoc(votacionesRef, {
        A_favor: 0,
        En_contra: 0,
        Abstinencia: 0,
      });
    } catch (error) {
      console.error('Error al reiniciar votos:', error);
    }
  }


  
  render() {
    // const { resultados, textos } = this.state;
  
    return (
      <View>
        <StyledView>
         <StyledView2>
         <Text style={estilo.subtitulo}>{this.state.currentText}</Text>
         <TouchableOpacity style={estilo.voto5} onPress={this.cambiarTexto}>
          <Text style={estilo.subtituloNext}>Siguiente</Text>
        </TouchableOpacity>
         <Animatable.Text style={estilo.h1} animation="zoomInUp" duration={2500} iterationCount={1} direction="normal">-Resultados de los votos-</Animatable.Text>
        
         <Text style={estilo.subtitulo}>A favor: {this.state.resultados.A_favor}</Text>
         <Text style={estilo.subtitulo2}>En contra: {this.state.resultados.En_contra}</Text>
         <Text style={estilo.subtitulo3}>Abstinencia: {this.state.resultados.Abstinencia}</Text>

    
        <TouchableOpacity
          style={estilo.voto4}
          onPress={() => {
            this.props.navigation.navigate('Votacion');}}>

  <Text style={estilo.subtitulo}></Text>
</TouchableOpacity>
      
<TouchableOpacity onPress={this.cambiarTexto}>
          <Text>Siguiente</Text>
        </TouchableOpacity>
          <Button
              title="Reiniciar Contadores"
              tyope="solid"
              containerStyle={{ marginTop: 10 }}
              onPress={this.reiniciarVotos}
            />


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

      voto5: {
        width: 30,
        height: 20,
        backgroundColor: '#0E7AB6',
        marginVertical: 10, 
        borderRadius: 5,
      },

      subtituloNext: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        textAlign: 'center',
      },
    
    
      
});
