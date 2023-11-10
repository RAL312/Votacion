import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Votacion from './Votacion';

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
        </Tab.Navigator>
    );
  }
}
