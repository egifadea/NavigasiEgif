import * as React from 'react';
import  {View, Text, StyleSheet, Button} from 'react-native';

const Submit = ({navigation})=> {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Submit;