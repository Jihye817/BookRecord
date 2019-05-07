import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,ImageBackground} from 'react-native';
import cstyle from './Styles';

export default class Bookstat extends React.Component{
    render() {
        return(
            <View style = {cstyle.whitecontainer}>
                <View style = {cstyle.middlecontainer}/>
                <View style = {styles.firstcontainer}>
                    <TouchableOpacity style = {styles.firstbtn}>
                    <ImageBackground style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>나의 독서통계</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style = {styles.secondcontainer}>
                <TouchableOpacity style = {styles.firstbtn}>
                    <ImageBackground style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>이웃의 독서통계</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    secondcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    firstbtn: {
        width:'80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})