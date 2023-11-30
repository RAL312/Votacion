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

    const StyledSiguienteButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 15px;
    backgroundColor: #17a398;
    borderRadius: 5px;
   `;
   

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
      currentIndex: 1,
      currentText: '',
      showSiguienteButton: false, // Nuevo estado
    };
    this.handleVote = this.handleVote.bind(this);
    
  }


componentDidMount() {
  const { route } = this.props;
  const { params } = route;
  const showAnotherTouchable = params?.showAnotherTouchable || false;
  const showSiguienteButton = params?.showSiguienteButton || false;

  this.setState({
    showAnotherTouchable,
    showSiguienteButton,
  });
  const globalStateRef = doc(db, 'globalState', 'x62kPrDwZbkbTfkKxnGd');
  this.unsubscribeGlobalState = onSnapshot(globalStateRef, (docSnap) => {
    const data = docSnap.data();
    this.setState({
      showAnotherTouchable: data?.showAnotherTouchable || false,
      showSiguienteButton: data?.showSiguienteButton || false,
    });
  });
    // Obtener el texto inicial al cargar el componente
    this.obtenerTexto(this.state.currentIndex);
  
    // Configurar el listener para cambios en el texto actual
    const textoDocRef = doc(db, 'textos', String(this.state.currentIndex)); // Convertir a cadena de manera segura
    this.unsubscribeTexto = onSnapshot(textoDocRef, (docSnap) => {
      const data = docSnap.data();
      this.setState({ currentText: data.texto });
    });
  
    // Configurar el listener para cambios en las votaciones
    const votacionesRef = doc(db, 'votaciones', 'qiVpZyqwH29pdWmxm6Zs');
    this.unsubscribeVotaciones = onSnapshot(votacionesRef, (docSnap) => {
      const data = docSnap.data();
      this.setState({
        resultados: {
          A_favor: data.A_favor || 0,
          En_contra: data.En_contra || 0,
          Abstinencia: data.Abstinencia || 0,
        },
      });
    });
  }

  async obtenerTexto(index) {
    try {
      const textoDocRef = doc(db, 'textos', String(index));
  
      // Subscribe to real-time updates
      this.unsubscribeTexto = onSnapshot(textoDocRef, (docSnap) => {
        const data = docSnap.data();
        this.setState({ currentText: data.texto });
      });
    } catch (error) {
      console.error("Error al obtener el texto:", error);
    }
  }

  cambiarTexto = () => {
    const nextIndex = (this.state.currentIndex % 8) + 1;
    console.log("Solicitando el texto para el índice:", nextIndex);
  
    this.setState({ currentIndex: nextIndex }, () => {
      this.obtenerTexto(this.state.currentIndex);
      
    });
  };

  componentWillUnmount() {
    // Cancela la suscripción a las actualizaciones en tiempo real
    if (this.unsubscribeTexto) {
      this.unsubscribeTexto();
    }
    if (this.unsubscribeGlobalState) {
      this.unsubscribeGlobalState();
    }
  }
  

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
 
  

  render() {
    
    return (
      
     <StyledView>
       <StyledView2>
        <Text style={estilo.usuario}>
          {/* {this.props.route.params.name}  */}
          </Text>
          <View>
            <Text style={estilo.texto}>{this.state.currentText}</Text>
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
          <StyledSiguienteButton
              onPress={() => {
                
                this.setState((prevState) => ({
                  showSiguienteButton: !prevState.showSiguienteButton,
                   // Agrega esta línea
                }), () => {
                  this.cambiarTexto(); // Ejecuta cambiarTexto después de actualizar el estado
                });
              }}
              style={{ display: this.state.showSiguienteButton ? 'flex' : 'none' }}
            >
              <Text style={estilo.subtituloNext}>Siguiente</Text>
            </StyledSiguienteButton>
     
            <TouchableOpacity onPress={() => this.setState({ botonesHabilitados: true })}>
  <Text>Picale </Text>
</TouchableOpacity>

          </StyledView2>
          <TouchableOpacity
  style={estilo.voto4}
  onPress={() => {
    this.props.navigation.navigate('Results');
  }}
>
<TouchableOpacity
  onPress={() => {
    const newShowState = !this.state.showAnotherTouchable;
    this.setState({ showAnotherTouchable: newShowState });

    // Oculta el botón de votación al presionar el touchable en Votación
    if (newShowState) {
      this.setState({ showSiguienteButton: false });
      // Actualiza el estado en Firebase
      const globalStateRef = doc(db, 'globalState', 'x62kPrDwZbkbTfkKxnGd');
      updateDoc(globalStateRef, { showAnotherTouchable: newShowState, showSiguienteButton: false });
    } else {
      // Muestra el botón de votación nuevamente
      this.setState({ showSiguienteButton: !this.state.showSiguienteButton });
      // Actualiza el estado en Firebase
      const globalStateRef = doc(db, 'globalState', 'x62kPrDwZbkbTfkKxnGd');
      updateDoc(globalStateRef, { showAnotherTouchable: newShowState, showSiguienteButton: !this.state.showSiguienteButton });
    }
  }}
>
  <Text style={estilo.subtitulo}>
    {this.state.showAnotherTouchable ? 'Ocultar' : 'Mostrar'} Touchable en Votación
  </Text>
</TouchableOpacity>
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


