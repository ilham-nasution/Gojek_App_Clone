import React from 'react';
import {View, Image, TextInput} from 'react-native';

const Searchbar = () => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 10}}>
      <View style={{position: 'relative', flex: 3}}>
        <TextInput
          placeholder="Coffee, anyone?"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 50,
            fontSize: 13,
            paddingLeft: 50,
            paddingRight: 20,
          }}
        />
        <Image
          source={require('../assets/image/search.png')}
          style={{position: 'absolute', top: 14, left: 15}}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../assets/image/promo.png')} />
      </View>
    </View>
  );
};

export default Searchbar;
