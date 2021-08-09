import React from 'react';
import { Button, Text, View } from 'react-native';
import NameForm from '~src/components/home/NameForm.component';
import Center from '~src/components/misc/Center.component.js';


export const HomeScreen = ({ navigation }) => {
    return (
        <Center>
            <NameForm />
            <Button title="Play" onPress={() => { navigation.navigate('Game') }} />
        </Center>
    )
}


export default HomeScreen;