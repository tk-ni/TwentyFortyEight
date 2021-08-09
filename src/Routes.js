import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import HomeScreen from '~src/screens/Home.screen';
import GameScreen from '~src/screens/Game.screen';

const Stack = createStackNavigator();

export const Routes = ({ }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}