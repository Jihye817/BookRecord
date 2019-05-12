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
                        <ImageBackground source={require('./images/statpic1.png')} style={styles.imagebtn}>
                            <View style = {styles.border}>
                                <Text style = {styles.imagetext}>나의 독서통계</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style = {styles.secondcontainer}>
                    <TouchableOpacity style = {styles.firstbtn}>
                        <ImageBackground source={require('./images/statpic2.png')} style={styles.imagebtn}>
                            <View style = {styles.border}>
                                <Text style = {styles.imagetext}>이웃의 독서통계</Text>
                            </View>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    firstbtn: {
        width:'90%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagebtn:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border:{
        borderWidth: 2,
        borderColor: '#DDD',
        width: '92%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagetext: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
    },
})