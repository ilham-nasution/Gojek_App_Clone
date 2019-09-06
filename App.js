import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 17}}>
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
              source={require('./image/search.png')}
              style={{position: 'absolute', top: 14, left: 15}}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('./image/promo.png')} />
          </View>
        </View>
      </View>
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./image/home.png')}
          />
          <Text
            style={{
              fontSize: 10,
              color: '#545454',
              marginTop: 4,
              color: '#43AB4A',
            }}>
            Home
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./image/order.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./image/chat.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Chat
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./image/inbox.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./image/account.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
