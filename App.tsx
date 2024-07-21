import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './source/stack/MainStack';


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
