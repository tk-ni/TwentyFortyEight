import React from 'react';
import { View, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
const NameForm = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text>
                What is your name?
            </Text>
            <TextInput />
        </KeyboardAvoidingView>
    )
}

export default NameForm;