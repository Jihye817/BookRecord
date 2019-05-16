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
import Barcodesearch from './Barcodesearch';
import Isbnsearch from './Isbnsearch';
import Mybookinfo from './Mybookinfo';
import Mypagechange from './Mypagechange';
import Leave from './Leave';
import Goal from './Goal';
import Setting from './Setting';

const MyStackNavigator = createStackNavigator({ //로그인 부분 페이지 이동 네비게이터
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

const Mainstack = createStackNavigator({ // 메인페이지 네비게이터
  MainScreen : {screen : Mainpage,
    navigationOptions:{
      header : null
    },
  },
  BarcodeScreen : {screen : Barcodesearch,},
  IsbnScreen : {screen : Isbnsearch},
},{headerMode : 'none'});

const Mypagestack = createStackNavigator({
  MypageScreen : {screen : Mypage},
  MypagechangeScreen : {screen : Mypagechange},
  LeaveScreen : {screen : Leave},
},{headerMode : 'none'});

const MyDrawerNavigator = createDrawerNavigator({ //옆에 나오는 메뉴를 위한 네비게이터
  Mainpage : Mainstack,
  MyScreen : Mypagestack,
  GoalScreen : {screen : Goal},
  SettingScreen : {screen : Setting},
},{headerMode : 'none'});

const TotalNavigator = createSwitchNavigator({ //최상위 네비게이터
  loginstack: {screen : MyStackNavigator},
  drawerstack: {screen: MyDrawerNavigator},
  
},{initialRouteName: 'loginstack', headerMode: 'none'});

Nav = createAppContainer(TotalNavigator);

export default Nav;