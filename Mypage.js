import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerActions} from 'react-navigation';
import cstyle from './Styles';
import {Header} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class Mypage extends React.Component{
    render() {
        return (
            <View style = {cstyle.whitecontainer}>
                <Header
                    leftComponent={{icon:'menu', color:'#FFF', onPress: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}
                    centerComponent={{text: '마이페이지', style:{color:'#FFF'}}}
                    containerStyle={{backgroundColor:'#52C8BE', height:45, paddingTop:0}}
                />
                <View style = {styles.greycontainer}>
                    <IonIcon name='ios-book' size={50} color='#555' />
                </View>
                <View style = {{flex:1}}>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>닉네임</Text>
                        <Text style = {styles.secondtext}>박밀레</Text>
                    </View>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>이메일</Text>
                        <Text style = {styles.secondtext}>book@naver.com</Text>
                    </View>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>생년월일</Text>
                        <Text style = {styles.secondtext}>19980225</Text>
                    </View>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>연령</Text>
                        <Text style = {styles.secondtext}>20대</Text>
                    </View>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>성별</Text>
                        <Text style = {styles.secondtext}>여성</Text>
                    </View>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>비밀번호</Text>
                        <Text style = {styles.secondtext}>*******</Text>
                    </View>
                    <View style = {styles.btncontainer}>
                        <TouchableOpacity style = {styles.greenbtn} onPress = {() => this.props.navigation.navigate('MypagechangeScreen')}><Text style = {styles.btntext}>수 정</Text></TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.outcontainer}>
                    <TouchableOpacity style = {styles.outbtn} onPress = {() => this.props.navigation.navigate('LeaveScreen')}><Text>탈퇴하기</Text></TouchableOpacity>
                </View>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    greycontainer:{
        backgroundColor: '#F2F2F2',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textcontainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center',
    },
    firsttext: {
        width: 120,
        paddingLeft: 20,
        alignItems: 'center',
    },
    secondtext: {
        paddingLeft: 10,
        alignItems: 'center',
        fontSize: 18,
        color: '#222'
    },
    btncontainer:{
        paddingTop:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenbtn:{
        width: 150,
        paddingVertical: 3,
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntext: {
        fontSize:18,
        color: '#FFF'
    },
    outcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#DDD',
    },
    outbtn: {
        width:'100%',
        paddingVertical:10,
        alignItems:'center',
    },
});