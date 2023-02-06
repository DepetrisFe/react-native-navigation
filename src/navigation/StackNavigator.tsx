import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenOne} from '../screens/ScreenOne';
import {ScreenTwo} from '../screens/ScreenTwo';
import {ScreenThree} from '../screens/ScreenThree';
import {PersonScreen} from '../screens/PersonScreen';

export type RootSackParams = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootSackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="ScreenOne"
        options={{title: 'Pagina 1'}}
        component={ScreenOne}
      />
      <Stack.Screen
        name="ScreenTwo"
        options={{title: 'Pagina 2'}}
        component={ScreenTwo}
      />
      <Stack.Screen
        name="ScreenThree"
        options={{title: 'Pagina 3'}}
        component={ScreenThree}
      />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};
