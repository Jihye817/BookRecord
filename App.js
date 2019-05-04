/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';
import Login from './Login';
import Mainpage from './Mainpage';
import Registerpage from './Register';
import Registerfinpage from './Registerfin';
import Found from './Found';
import Mypage from './Mypage';

const MyStackNavigator = createStackNavigator({
  LoginScreen : {screen : Login,
    navigationOptions:{header : null},
  },
  RegisterScreen : {screen : Registerpage,
    navigationOptions:{header : null},
  },
  RegisterfinScreen : {screen : Registerfinpage,
    navigationOptions:{header : null},
  },
  FoundScreen : {screen : Found,
    navigationOptions:{header : null},
  },
},{initialRouteName:'LoginScreen',headerMode : 'none'},
);

const Mainstack = createStackNavigator({
  MainScreen : {screen : Mainpage,
    navigationOptions:{
      header : null
    },
  },
},{headerMode : 'none'});

const MyDrawerNavigator = createDrawerNavigator({
  Mainpage:Mainstack,
  MyScreen : {screen: Mypage,
    navigationOptions:{
      header : null
    },
  },
},{headerMode : 'none'});

const TotalNavigator = createSwitchNavigator({
  loginstack: {screen : MyStackNavigator},
  drawerstack: {screen: MyDrawerNavigator},
  
},{initialRouteName: 'loginstack', headerMode: 'none'});

Nav = createAppContainer(TotalNavigator);

export default Nav;