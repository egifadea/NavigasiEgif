import * as React from 'react';
import  {View, Text, StyleSheet, Button} from 'react-native';

const About = ({navigation})=> {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
            <Text>Home Screen</Text>
            <Button title='Go Egif'
            onPress={()=>navigation.navigate('Egif')}/>
            <Text>Klik Dibawah ini</Text>
            <Button title='Go Submit'
            onPress={()=>navigation.navigate('Submit')}/>
            <Text>Home Screen</Text>
            <Button title='Go Default'
            onPress={()=>navigation.navigate('Default')}/>
        </View>
    );
};

export default About;