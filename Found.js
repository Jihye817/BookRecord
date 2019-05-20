import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar,TextInput, style} from 'react-native';
import cstyle from './Styles';

export default class Found extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            apiData: []
        }
        this.dataId = null;
        this.name = null;
        this.email = null;
        this.phone_number = null;
    }
    render(){
        return(
            <SafeAreaView style = {[cstyle.greencontainer, {flex : 1}]}>
                <StatusBar hidden />
                <View style = {styles.container} behavior='padding'>
                    <View style = {styles.top}>

                    </View>
                    <View style = {styles.infocontainer}>
                        <Text>App users</Text>
                    </View>

                    <TextInput style={style.input}
                        placeholder = 'Id'
                        onChangeText = {(text) => {this.dataId = text}}
                        value = {this.dataId}
                        underlineColorAndroid = 'transparent'
                    />
                    <TextInput style={style.input}
                        placeholder = 'Enter Name'
                        onChangeText = {(text) => {this.name = text}}
                        value = {this.name}
                        underlineColorAndroid = 'transparent'
                    />
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
    input: {
        textAlign:'center',
        height : 30,
        width : '90%',
        padding : 4,
        marginBottom : 7,
        fontSize:34,
        borderWidth : 1,
    }
});