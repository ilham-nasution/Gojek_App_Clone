import React from 'react';
import {View, Text, Image, TextInput, ScrollView, Button} from 'react-native';
import Gopay_feature from './src/components/atoms/Gopay_feature';
import Gojek_feature from './src/components/atoms/Gojek_feature';
import Navbar_icon from './src/components/atoms/Navbar_icon';
import Resto from './src/components/atoms/Resto';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, marginHorizontal: 17}}>
        {/* Searchbar Section */}
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
              source={require('./src/assets/image/search.png')}
              style={{position: 'absolute', top: 14, left: 15}}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('./src/assets/image/promo.png')} />
          </View>
        </View>
        {/* gopay section */}
        <View>
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
                source={require('./src/assets/image/wallet.png')}
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
              image={require('./src/assets/image/pay.png')}
            />
            <Gopay_feature
              title="Promo"
              image={require('./src/assets/image/promo2.png')}
            />
            <Gopay_feature
              title="Top Up"
              image={require('./src/assets/image/topup.png')}
            />
            <Gopay_feature
              title="More"
              image={require('./src/assets/image/more2.png')}
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
            title="GoRide"
            image={require('./src/assets/image/gojek.png')}
          />
          <Gojek_feature
            title="GoCar"
            image={require('./src/assets/image/gocar.png')}
          />
          <Gojek_feature
            title="GoFood"
            image={require('./src/assets/image/food.png')}
          />
          <Gojek_feature
            title="GoBluebird"
            image={require('./src/assets/image/gocar.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Gojek_feature
            title="GoSend"
            image={require('./src/assets/image/gosend.png')}
          />
          <Gojek_feature
            title="GoPulsa"
            image={require('./src/assets/image/gopulsa.png')}
          />
          <Gojek_feature
            title="GoPoints"
            image={require('./src/assets/image/gopoints.png')}
          />
          <Gojek_feature
            title="More"
            image={require('./src/assets/image/more.png')}
          />
        </View>
        {/* Banner Section */}
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
            source={require('./src/assets/image/bannerfood.jpg')}
          />
          <Text style={{fontWeight: 'bold'}}>Everyday is happy-tummy day!</Text>
          <Text>
            Save Rp300.000 and eat more. Get 24 GoFood vouchers worth Rp15.000
          </Text>
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
              source={require('./src/assets/image/food.png')}
            />
            <Text style={{fontWeight: 'bold'}}>gofood</Text>
          </View>
          <Text style={{fontWeight: 'bold'}}>Recommended restos</Text>
          <ScrollView
            horizontal
            style={{
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <Resto
              title="McDonald's"
              image={require('./src/assets/image/mcd.jpg')}
            />
            <Resto
              title="Pizza Hut Delivery"
              image={require('./src/assets/image/phd.jpg')}
            />
            <Resto
              title="Carl's Jr."
              image={require('./src/assets/image/carls.jpg')}
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
          title="Home"
          image={require('./src/assets/image/home-active.png')}
        />
        <Navbar_icon
          title="Orders"
          image={require('./src/assets/image/order.png')}
        />
        <Navbar_icon
          title="Chat"
          image={require('./src/assets/image/chat.png')}
        />
        <Navbar_icon
          title="Inbox"
          image={require('./src/assets/image/inbox.png')}
        />
        <Navbar_icon
          title="Account"
          image={require('./src/assets/image/account.png')}
        />
      </View>
    </View>
  );
};

export default App;
