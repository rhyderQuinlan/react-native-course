// import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

//make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
  }
};

//make component available to other parts of the App
export default Header;
