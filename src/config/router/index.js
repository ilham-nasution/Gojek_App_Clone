import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  GoRide,
  Orders,
  DetailOrder,
  Chat,
  Inbox,
  Account,
} from '../../pages';

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

const ChatStack = createStackNavigator(
  {
    Chat,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Chat',
  },
);

const InboxStack = createStackNavigator(
  {
    Inbox,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Inbox',
  },
);

const AccountStack = createStackNavigator(
  {
    Account,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Account',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrdersStack,
    ChatStack,
    InboxStack,
    AccountStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeStack',
  },
);

export default createAppContainer(Router);
