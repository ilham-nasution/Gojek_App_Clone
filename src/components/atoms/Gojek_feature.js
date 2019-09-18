import React from 'react';
import {View, Text, Image} from 'react-native';

const Gojek_feature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.image} />
      <Text style={{marginTop: 10}}>{props.title}</Text>
    </View>
  );
};

export default Gojek_feature;
