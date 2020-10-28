import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#5db6f5" translucent />

    <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#2FA8F3' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
