import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker} from 'react-native';
import cstyle from './Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class Isbnsearch extends React.Component{
    render(){
        return(
            <View style = {cstyle.greycontainer}>
                <View style = {styles.firstbox}>
                    <Text style = {{color: '#FFF', fontSize: 20}}>책의 ISBN을 입력하세요</Text>
                </View>
                <View style = {styles.secondbox}>
                    <TextInput style = {styles.input} />
                    <TouchableOpacity style = {styles.searchbtn}>
                        <IonIcon name = "ios-search" size={30} color='#FFF' />
                    </TouchableOpacity>
                </View>
                <View style = {styles.firstbox}>
                    <TouchableOpacity style = {styles.greenbtn}>
                        <Text style = {{color: '#FFF', fontSize: 20}}>등록 취소</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondbox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        height: 40,
        width:'70%',
        backgroundColor: '#FFF'
    },
    searchbtn: {
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    thirdbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenbtn: {
        backgroundColor: '#52C8B2',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
})