import React from 'react';
import {View, Text, Image} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Bagian Content</Text>
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
            source={require('./image/help.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
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
