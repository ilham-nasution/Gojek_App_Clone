import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const Navbar_icon = props => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center'}}
      onPress={props.onPress}>
      <Image style={{width: 26, height: 26}} source={props.image} />
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: props.active ? 'green' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Navbar_icon;
