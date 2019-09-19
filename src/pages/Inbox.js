import React from 'react';
import {Text, View} from 'react-native';
import Navbar_icon from '../components/Navbar_icon';

const Inbox = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Halaman Inbox!</Text>
      </View>
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Navbar_icon
          title="Home"
          image={require('../assets/image/home.png')}
          onPress={() => props.navigation.navigate('Home')}
        />
        <Navbar_icon
          title="Orders"
          image={require('../assets/image/order.png')}
          onPress={() => props.navigation.navigate('Orders')}
        />
        <Navbar_icon
          title="Chat"
          image={require('../assets/image/chat.png')}
          onPress={() => props.navigation.navigate('Chat')}
        />
        <Navbar_icon
          active
          title="Inbox"
          image={require('../assets/image/inbox.png')}
          onPress={() => props.navigation.navigate('Inbox')}
        />
        <Navbar_icon
          title="Account"
          image={require('../assets/image/account.png')}
          onPress={() => props.navigation.navigate('Account')}
        />
      </View>
    </View>
  );
};

export default Inbox;
