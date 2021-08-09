import React from 'react';
import {Button,Text, View} from 'react-native';


export const HomeScreen = ({navigation}) =>{
    return(
        <View>
            <Button title="Play" onPress={()=>{
                navigation.navigate('Game');
            }}/>
        </View>
    )
}


export default HomeScreen;