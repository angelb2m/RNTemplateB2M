import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import Colors from 'templateb2m/src/res/colors';

const Stack = createStackNavigator();

const MainStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl
        },
        headerTintColor: Colors.white
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;