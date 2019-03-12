// import library to create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component
const App = () => (
    <Text>Some Text</Text>
);

//render it to the device
AppRegistry.registerComponent('albums', () => App);
