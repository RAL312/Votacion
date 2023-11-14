import React, { Component } from 'react';
import Votacion from './Votacion';
import Votacion2 from './Votaciones/Votacion2';

export default class VotoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <Tab.Navigator initialRouteName="Tilines"> 
       <Tab.Screen 
      name="Vota" 
      component={Votacion} 
      initialParams={{name: this.props.route.params.name}}

      />

      <Tab.Screen 
        name="Vota2" 
        component={Votacion2} 
        initialParams={{nombre: this.props.route.params.name}}

      />
        </Tab.Navigator>
        
    );
  }
}
