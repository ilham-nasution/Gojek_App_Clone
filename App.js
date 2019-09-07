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
        <View>
          <View
            style={{
              backgroundColor: '#2f63bc',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./image/wallet.png')}
                style={{width: 22, height: 22}}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginLeft: 3,
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
              paddingVertical: 10,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./image/pay.png')} />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginTop: 7,
                }}>
                Pay
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./image/promo2.png')} />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginTop: 7,
                }}>
                Promo
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./image/topup.png')} />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginTop: 7,
                }}>
                Top Up
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./image/more.png')} />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginTop: 7,
                }}>
                More
              </Text>
            </View>
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
