import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const Gopay_feature = props => {
  return (
    <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
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
    </TouchableOpacity>
  );
};

export default Gopay_feature;
