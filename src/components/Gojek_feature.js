import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

const Gojek_feature = props => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center'}}
      onPress={props.onPress}>
      <Image source={props.image} />
      <Text style={{marginTop: 10}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Gojek_feature;
