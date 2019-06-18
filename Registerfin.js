import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import cstyle from './Styles';

export default class Registerfin extends React.Component{
    render(){
        return (
            <SafeAreaView style = {[cstyle.greencontainer, {flex : 1}]}>
                <StatusBar hidden />
                <View style = {styles.container} behavior='padding'>
                    <View style = {styles.top}>

                    </View>
                    <View style = {styles.infocontainer}>
                        <View style = {styles.txtcontainer}>
                            <Text>Book Recording 회원가입 완료</Text>
                            <View style = {styles.intxt}>
                                <Text style = {[{color: '#52C8BE'}]}>Ashely</Text><Text>님, 환영합니다.</Text>
                            </View>
                        </View>
                        <View style = {styles.infotable}>
                            <View style = {styles.tablerow}>
                                <Text style = {styles.firsttxt}>닉네임</Text>
                                <Text>Ashely</Text>
                            </View>
                            <View style = {styles.tablerow}>
                                <Text style = {styles.firsttxt}>이메일</Text>
                                <Text ellipsizeMode='tail' numberOfLines={1}>malesuada@vitaealiquetnec.co.uk</Text>
                            </View>
                            <View style = {styles.tablerow}>
                                <Text style = {styles.firsttxt}>연령</Text>
                                <Text>20대</Text>
                            </View>
                            <View style = {styles.tablerow}>
                                <Text style = {styles.firsttxt}>성별</Text>
                                <Text>여성</Text>
                            </View>
                        </View>
                        <View style = {styles.txtcontainer}>
                            <Text>이름 / 비밀번호는 마이페이지에서</Text>
                            <Text>수정할 수 있습니다.</Text>
                        </View>
                        <View style = {styles.btncontainer}>
                            <TouchableOpacity style = {styles.greenbtn}>
                                <Text style = {styles.btntxt}>시작</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
      }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#52C8BE',
        alignItems: 'center',
    },
    top: {
        height: 200,
    },
    infocontainer: {
        width: 300,
        height:'50%',
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
        justifyContent:'center',
    },
    infotable: {
        paddingVertical:20,
    },
    tablerow: {
        flexDirection: 'row',
        width:240,
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor: '#F2F2F2',
    },
    firsttxt:{
        width:'30%',
        paddingLeft:5
    },
    txtcontainer: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:5,
    },
    intxt: {
        flexDirection: 'row',
    },
    btncontainer: {
        paddingTop:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greenbtn: {
        width: '60%',
        padding:5,
        backgroundColor: '#52C8BE',
        alignItems: 'center',
    },
    btntxt: {
        fontSize:16,
        color: '#FFFFFF',
    },
});