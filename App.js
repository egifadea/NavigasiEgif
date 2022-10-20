import * as React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './navigasi/Home';
import About from './navigasi/About';
import Egif from './navigasi/Egif';
import Submit from './navigasi/Submit';
import Default from './navigasi/Default';

function HomeScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Sreen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Egif" component={Egif} />
        <Stack.Screen name="Submit" component={Submit} />
        <Stack.Screen name="Default" component={Default} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;