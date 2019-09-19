import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const Resto = props => {
  return (
    <TouchableOpacity style={{marginRight: 10}}>
      <Image
        style={{width: 150, height: 150, borderRadius: 10}}
        source={props.image}
      />
      <Text style={{fontWeight: 'bold', marginLeft: 5}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Resto;
