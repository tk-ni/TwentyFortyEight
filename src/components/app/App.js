import React from 'react';
import {
  View,
  Text,
  Section,
  ScrollView,
  Header,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <SafeAreaView >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Text>AA</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
