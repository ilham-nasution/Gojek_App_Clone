import React from 'react';
import {Text, View, Button} from 'react-native';
import Navbar_icon from '../components/Navbar_icon';

const Orders = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Halaman Orders!</Text>
        <Button
          title="Detail Order"
          onPress={() => props.navigation.navigate('DetailOrder')}
        />
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
          active
          title="Orders"
          image={require('../assets/image/order.png')}
        />
        <Navbar_icon title="Chat" image={require('../assets/image/chat.png')} />
        <Navbar_icon
          title="Inbox"
          image={require('../assets/image/inbox.png')}
        />
        <Navbar_icon
          title="Account"
          image={require('../assets/image/account.png')}
        />
      </View>
    </View>
  );
};

export default Orders;
