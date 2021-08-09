//React Native
import React, { useState } from 'react';
import { Button } from 'react-native';

//REDUX
import { useDispatch } from "react-redux";
import ACTIONS from '~src/store/actions.js';

//Components
import NameForm from '~src/components/home/NameForm.component';
import Center from '~src/components/misc/Center.component.js';

export const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [playerName, setPlayerName] = useState('');

    const handleNameChange = (name) => {
        setPlayerName(name);
    }

    const handlePlayClick = () => {
        if (playerName) {
            dispatch({
                type: ACTIONS.EDIT_PLAYER_NAME,
                payload: playerName
            })
            navigation.navigate('Game');
        } else {

        }
    }

    return (
        <Center>
            <NameForm handleNameChange={handleNameChange} />
            <Button title="Play" onPress={handlePlayClick} />
        </Center>
    )
}


export default HomeScreen;