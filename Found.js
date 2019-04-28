import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar,} from 'react-native';
import cstyle from './Styles';

export default class Found extends React.Component{
    render(){
        return(
            <SafeAreaView style = {[cstyle.greencontainer, {flex : 1}]}>
                <StatusBar hidden />
                <View style = {styles.container} behavior='padding'>
                    <View style = {styles.top}>

                    </View>
                    <View style = {styles.infocontainer}>

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
});