import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1" component={Pagina1Screen} />
      <Stack.Screen name="Page2" component={Pagina2Screen} />
      <Stack.Screen name="Page3" component={Pagina3Screen} />      
    </Stack.Navigator>
  );
}