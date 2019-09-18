import React from 'react';
import {View, Text, Image} from 'react-native';

const Gopay_feature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.image} />
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 12,
          marginTop: 7,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Gopay_feature;
