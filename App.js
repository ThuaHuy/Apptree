import 'react-native-gesture-handler';
import React,{useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';
import CartScreen from "./src/view/screens/CartScreen";
import Checkout from "./src/view/screens/Checkout";
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={Checkout} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
