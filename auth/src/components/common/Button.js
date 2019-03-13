import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, buttonTextStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F8953C',
    marginLeft: 5,
    marginRight: 5,
  },

  buttonTextStyle: {
    alignSelf: 'center',
    color: '#F8953C',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  }
};

export { Button };
