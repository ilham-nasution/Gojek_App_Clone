import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, GoRide, Orders, DetailOrder} from '../../pages';

const HomeStack = createStackNavigator(
  {
    Home,
    GoRide,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const OrdersStack = createStackNavigator(
  {
    Orders,
    DetailOrder,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Orders',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrdersStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeStack',
  },
);

export default createAppContainer(Router);
