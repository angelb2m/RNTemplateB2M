import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from 'templateb2m/src/components/main/MainStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from 'templateb2m/src/res/colors';

const Tabs = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Tabs.Navigator
        tabBarOptions={{
          tintColor: "#fefefe",
          style: {
            backgroundColor: Colors.blackPearl
          }
        }}
      >
        <Tabs.Screen
          name="Main"
          component={MainStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('templateb2m/src/assets/bank.png')}
              />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;