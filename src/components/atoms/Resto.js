import React from 'react';
import {View, Text, Image} from 'react-native';

const Resto = props => {
  return (
    <View style={{marginRight: 10}}>
      <Image
        style={{width: 150, height: 150, borderRadius: 10}}
        source={props.image}
      />
      <Text style={{fontWeight: 'bold', marginLeft: 5}}>{props.title}</Text>
    </View>
  );
};

export default Resto;
