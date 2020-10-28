import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import ChurchDetails from '../pages/ChurchDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="ChurchDetails"
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="ChurchDetails" component={ChurchDetails} />
  </App.Navigator>
);

export default AppRoutes;
