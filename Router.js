import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import Bookmain from './Bookmain';
import Mybooks from './Mybooks';
import Bookstat from './Bookstat';
import Bookrecom from './Bookrecom';

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
})

export default MyTabNavigator;