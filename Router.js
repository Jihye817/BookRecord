import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import Bookmain from './Bookmain';
import Mybooks from './Mybooks';
import Bookstat from './Bookstat';
import Bookrecom from './Bookrecom';
import Mybookinfo from './Mybookinfo';

const MyTabNavigator = createMaterialTopTabNavigator({ //탭 메뉴를 위한 네비게이터
    BookmainScreen : {screen: Bookmain,
        navigationOptions : {title : '홈'}},
    MybooksScreen : {screen: Mybooks,
        navigationOptions : {title : '내 책장'}},
    BookstatScreen : {screen: Bookstat,
        navigationOptions : {title : '독서통계'}},
    BookrecomScreen : {screen: Bookrecom,
        navigationOptions : {title : '추천도서'}},
},
{
    tabBarOptions : {
        activeTintColor: '#52C8B2',
        inactiveTintColor: '#333',
        pressColor: '#52C8B2',
        style: {backgroundColor: '#FFF',},
        indicatorStyle: {backgroundColor: '#52C8B2'}
    }
},);

const MyStackNav = createStackNavigator({
    MybookinfoScreen : {screen : Mybookinfo,
        navigationOptions:{
            header : null
        },
    },
});

const TotalNav = createStackNavigator({
    TabStack: {screen : MyTabNavigator,
        navigationOptions:{
            header : null
        },
    },
    StackStack: {screen : MyStackNav,
        navigationOptions:{
            header : null
        },
    },
});

Navs = createAppContainer(TotalNav);
export default Navs;