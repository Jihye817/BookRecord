/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground} from 'react-native'
import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, DrawerItems,} from 'react-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import Mainpage from './Mainpage';
import Registerpage from './Register';
import Registerfinpage from './Registerfin';
import Found from './Found';
import Mypage from './Mypage';
import Barcodesearch from './Barcodesearch';
import Isbnsearch from './Isbnsearch';
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

//const Myisbnstack = createStackNavigator({
//  IsbnScreen : {screen : Isbnsearch},
//  PopScreen : {screen : Popbookadd},
//},{headerMode : 'none'});

const Mainstack = createStackNavigator({ // 메인페이지 네비게이터
  MainScreen : {screen : Mainpage,
    navigationOptions:{
      header : null,
    },
  },
  BarcodeScreen : {screen : Barcodesearch,},
  //IsbnStack : {screen : Myisbnstack},
  IsbnScreen : {screen : Isbnsearch},
},{headerMode : 'none'});

const Mypagestack = createStackNavigator({
  MypageScreen : {screen : Mypage},
  MypagechangeScreen : {screen : Mypagechange},
  LeaveScreen : {screen : Leave},
},{headerMode : 'none'});

const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {{flex: 1}}>
    <ImageBackground source={require('./images/drawerback.png')} style={{height:130, resizeMode: 'contain',}}>
      <View style = {{flexDirection: 'row', paddingTop: 40, paddingLeft:30, alignItems:'center'}}>
        <IonIcon name = "md-book" size={28} color='#FFF'/>
        <Text style = {{paddingLeft: 20, fontSize: 20, color:'#FFF'}}>박밀레</Text>
      </View>
      <View style = {{flexDirection: 'row', paddingTop: 15, paddingLeft: 78,}}>
        <Text style = {{color:'#FFF', fontSize:16,}}>총 독서기록</Text>
        <Text style = {{color:'#FFD966', fontSize:16,}}>13</Text>
        <Text style = {{color:'#FFF', fontSize:16,}}>권</Text>
      </View>
    </ImageBackground>
    <ScrollView style = {{flex:1}}>
      <DrawerItems {...props}/>
    </ScrollView>
    <View style = {{height:40, backgroundColor:'#F2F2F2', alignItems: 'center', justifyContent: 'center', borderTopWidth:1, borderTopColor: '#DDD'}}>
      <TouchableOpacity style = {{width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
        <IonIcon name = "md-power" size={18}/>
        <Text> 로그아웃</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

const MyDrawerNavigator = createDrawerNavigator({ //옆에 나오는 메뉴를 위한 네비게이터
  Mainpage : {screen : Mainstack,
    navigationOptions:{
      drawerLabel: '홈',
      drawerIcon:(
        <IonIcon name='ios-home' size={24} color = '#52C8B2'/>
      )
    },
  },
  MyScreen : {screen : Mypagestack,
    navigationOptions:{
      drawerLabel: '마이페이지',
      drawerIcon:(
        <IonIcon name='md-person' size={24} color = '#52C8B2'/>
      )
    },
  },
  GoalScreen : {screen : Goal,
    navigationOptions:{
      drawerLabel: '월간 목표량 설정',
    }
  },
  SettingScreen : {screen : Setting,
    navigationOptions:{
      drawerLabel: '어플리케이션 설정',
    }
  },
},{contentComponent: CustomDrawerComponent,
    contentOptions: {
      inactiveTintColor: '#7F7F7F',
      activeTintColor: '#52C8B2'
    }
});

const TotalNavigator = createSwitchNavigator({ //최상위 네비게이터
  loginstack: {screen : MyStackNavigator},
  drawerstack: {screen: MyDrawerNavigator},
  
},{initialRouteName: 'loginstack', headerMode: 'none'});

Nav = createAppContainer(TotalNavigator);

export default Nav;