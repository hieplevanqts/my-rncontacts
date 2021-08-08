import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './navigation/index';
import GlobalProvider from './context/Provider';


export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
    
    
  );
}
