import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screens/Welcome'
import Form from './Screens/Form'
import Listing from './Screens/Listing'

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Listing" component={Listing} />
    </Stack.Navigator>
  );
}