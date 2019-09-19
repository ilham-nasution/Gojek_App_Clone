import React from 'react';
import {View, Text, Image} from 'react-native';

const Gopay_bar = () => {
  return (
    <View
      style={{
        backgroundColor: '#2f63bc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/image/wallet.png')}
          style={{width: 22, height: 22}}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            marginLeft: 5,
          }}>
          gopay
        </Text>
      </View>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
        Rp100.000
      </Text>
    </View>
  );
};

export default Gopay_bar;
