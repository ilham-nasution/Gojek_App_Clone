import React from 'react';
import {View, Text, Image, Button} from 'react-native';

const Banner_gojek = props => {
  return (
    <View style={{marginVertical: 25}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderColor: '#d9d9d9',
        }}>
        Top picks for you
      </Text>
      <Image
        style={{
          height: 150,
          width: '100%',
          marginVertical: 10,
          borderRadius: 7,
        }}
        source={props.image}
      />
      <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
      <Text>{props.desc}</Text>
      <View
        style={{
          width: 125,
          marginVertical: 5,
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}>
        <Button color="green" title="Buy voucher" />
      </View>
    </View>
  );
};

export default Banner_gojek;
