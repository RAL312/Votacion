import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';//Navegación
import { createNativeStackNavigator } from '@react-navigation/native-stack';//Navegación
import Inicio from './Inicio';
import Admin from './Admin';
import Votacion from './Votacion';
import Votacion2 from './Votacion2';
import Results from './Results';

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator(); 
    return (
      <NavigationContainer>
        <Stack.Navigator>
          
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}} />
        <Stack.Screen name="Admin" component={Admin} options={{headerShown:true}} />
        <Stack.Screen name="Votacion" component={Votacion} options={{headerShown:false}} />
        <Stack.Screen name="Votacion2" component={Votacion2} options={{headerShown:false}} />
        <Stack.Screen name="Results" component={Results} options={{headerShown:false}} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
