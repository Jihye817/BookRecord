import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,ImageBackground} from 'react-native';
import cstyle from './Styles';

export default class Bookrecom extends React.Component{
    render() {
        return(
            <View style = {cstyle.whitecontainer}>
                <View style = {cstyle.middlecontainer}/>
                <View style = {styles.firstcontainer}>
                    <View style = {styles.greenbox}>
                        <Text>selectbox goes here</Text>
                    </View>
                </View>
                <View style = {styles.secondcontainer}>
                    <Text>selected info goes here</Text>
                </View>
                <View style = {styles.thirdcontainer}>
                    <View style = {styles.greybox}>
                        <Text>book info goes here</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstcontainer: {
        backgroundColor: '#FFF',
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    greenbox: {
        backgroundColor: '#52C8B2',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    secondcontainer: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    thirdcontainer: {
        backgroundColor: '#FFF',
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    greybox: {
        backgroundColor: '#F2F2F2',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})