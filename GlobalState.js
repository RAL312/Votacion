// GlobalState.js
import React, { createContext, useContext, Component } from 'react';
import { db } from './Firebase/firebaseConfig';// Asegúrate de tener la configuración de Firebase

const GlobalStateContext = createContext();

export class GlobalStateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnotherTouchable: false,
    };

    this.syncRef = db.collection('globalState').doc('showAnotherTouchable');
  }

  componentDidMount() {
    // Escuchar cambios en Firestore
    this.syncRef.onSnapshot((doc) => {
      const showAnotherTouchable = doc.data()?.showAnotherTouchable || false;
      this.setState({ showAnotherTouchable });
    });
  }

  showTouchable = () => {
    // Actualizar Firestore
    this.syncRef.set({ showAnotherTouchable: true });
  };

  hideTouchable = () => {
    // Actualizar Firestore
    this.syncRef.set({ showAnotherTouchable: false });
  };

  render() {
    const { children } = this.props;
    const { showAnotherTouchable } = this.state;

    return (
      <GlobalStateContext.Provider
        value={{ showAnotherTouchable, showTouchable: this.showTouchable, hideTouchable: this.hideTouchable }}
      >
        {children}
      </GlobalStateContext.Provider>
    );
  }
}

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
