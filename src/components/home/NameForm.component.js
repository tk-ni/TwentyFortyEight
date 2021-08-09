import React from 'react';
import { View, Text, TextInput, Platform, KeyboardAvoidingView, StyleSheet} from 'react-native';
const NameForm = ({handleNameChange}) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text>
                What is your name?
            </Text>
            <TextInput onChangeText={handleNameChange} style={styles.nameInput}/>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    nameInput: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 20,
        margin: 10,
    }
})

export default NameForm;