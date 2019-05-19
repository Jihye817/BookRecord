import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {DrawerActions} from 'react-navigation';
import cstyle from './Styles';
import {Header} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class Mypagechange extends React.Component{
    render() {
        return (
            <View style = {cstyle.whitecontainer}>
                <Header
                    leftComponent={{icon:'menu', color:'#FFF', onPress: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}
                    centerComponent={{text: '마이페이지 수정', style:{color:'#FFF'}}}
                    containerStyle={{backgroundColor:'#52C8BE', height:45, paddingTop:0}}
                />
                <View style = {styles.greycontainer}>
                    <IonIcon name='ios-book' size={50} color='#555' />
                </View>
                <View style = {{flex:1}}>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>닉네임</Text>
                        <TextInput style = {styles.inputtext}/>
                        <TouchableOpacity style = {styles.duplbtn}><Text style = {styles.duplbtntext}>중복확인</Text></TouchableOpacity>
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
                        <TextInput style = {styles.inputpass} secureTextEntry
                            onSubmitEditing={()=> this.refs.txtPassword.focus()}/>
                    </View>
                    <View style = {styles.textcontainer}>
                        <Text style = {styles.firsttext}>비밀번호 확인</Text>
                        <TextInput style = {styles.inputpass} secureTextEntry
                            ref = {"txtPassword"}/>
                    </View>
                    <View style = {styles.btncontainer}>
                        <TouchableOpacity style = {styles.greenbtn}><Text style = {styles.btntext}>저 장</Text></TouchableOpacity>
                    </View>
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
    inputtext:{
        paddingLeft: 10,
        height: 35,
        width: 150,
        backgroundColor: '#F2F2F2'
    },
    duplbtn: {
        width: 110,
        height: 35,
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    duplbtntext: {
        color: '#FFF',
        fontSize: 18,
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
    },
    inputpass: {
        width: 260,
        backgroundColor: '#F2F2F2',
        height: 35,
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
});