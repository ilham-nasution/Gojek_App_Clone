import React from 'react';
import {View, Text, Image} from 'react-native';

const Navbar_icon = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image style={{width: 26, height: 26}} source={props.image} />
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Navbar_icon;
