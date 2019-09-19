import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Banner_gojek from '../components/Banner_gojek';
import Gojek_feature from '../components/Gojek_feature';
import Gopay_bar from '../components/Gopay_bar';
import Gopay_feature from '../components/Gopay_feature';
import Navbar_icon from '../components/Navbar_icon';
import Resto from '../components/Resto';
import Searchbar from '../components/Searchbar';

export class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, marginHorizontal: 17}}>
          {/* Searchbar Section */}
          <Searchbar />
          {/* gopay section */}
          <View>
            <Gopay_bar />
            <View
              style={{
                backgroundColor: '#4e78c0',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <Gopay_feature
                title="Pay"
                image={require('../assets/image/pay.png')}
              />
              <Gopay_feature
                title="Promo"
                image={require('../assets/image/promo2.png')}
              />
              <Gopay_feature
                title="Top Up"
                image={require('../assets/image/topup.png')}
              />
              <Gopay_feature
                title="More"
                image={require('../assets/image/more2.png')}
              />
            </View>
          </View>
          {/* Gojek Feature Section */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <Gojek_feature
              onPress={() => this.props.navigation.navigate('GoRide')}
              title="GoRide"
              image={require('../assets/image/gojek.png')}
            />
            <Gojek_feature
              title="GoCar"
              image={require('../assets/image/gocar.png')}
            />
            <Gojek_feature
              title="GoFood"
              image={require('../assets/image/food.png')}
            />
            <Gojek_feature
              title="GoBluebird"
              image={require('../assets/image/gocar.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <Gojek_feature
              title="GoSend"
              image={require('../assets/image/gosend.png')}
            />
            <Gojek_feature
              title="GoPulsa"
              image={require('../assets/image/gopulsa.png')}
            />
            <Gojek_feature
              title="GoPoints"
              image={require('../assets/image/gopoints.png')}
            />
            <Gojek_feature
              title="More"
              image={require('../assets/image/more.png')}
            />
          </View>
          {/* Banner Section */}
          <Banner_gojek
            image={require('../assets/image/bannerfood.jpg')}
            title="Everyday is happy-tummy day!"
            desc="Save Rp300.000 and eat more. Get 24 GoFood vouchers worth Rp15.000"
          />
          {/* Recommended Restos Section */}
          <View style={{borderTopWidth: 1, borderColor: '#d9d9d9'}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Image
                style={{width: 15, height: 15, marginRight: 5}}
                source={require('../assets/image/food.png')}
              />
              <Text style={{fontWeight: 'bold', fontSize: 18}}>gofood</Text>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Recommended restos
            </Text>
            <ScrollView
              horizontal
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Resto
                title="McDonald's"
                image={require('../assets/image/mcd.jpg')}
              />
              <Resto
                title="Pizza Hut Delivery"
                image={require('../assets/image/phd.jpg')}
              />
              <Resto
                title="Carl's Jr."
                image={require('../assets/image/carls.jpg')}
              />
            </ScrollView>
          </View>
        </ScrollView>
        {/* Bottom Navbar Section */}
        <View
          style={{
            height: 54,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Navbar_icon
            active
            title="Home"
            image={require('../assets/image/home-active.png')}
          />
          <Navbar_icon
            title="Orders"
            image={require('../assets/image/order.png')}
            onPress={() => this.props.navigation.navigate('Orders')}
          />
          <Navbar_icon
            title="Chat"
            image={require('../assets/image/chat.png')}
            onPress={() => this.props.navigation.navigate('Chat')}
          />
          <Navbar_icon
            title="Inbox"
            image={require('../assets/image/inbox.png')}
            onPress={() => this.props.navigation.navigate('Inbox')}
          />
          <Navbar_icon
            title="Account"
            image={require('../assets/image/account.png')}
            onPress={() => this.props.navigation.navigate('Account')}
          />
        </View>
      </View>
    );
  }
}

export default Home;
