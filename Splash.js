import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default class Splash extends Component{
    constructor(props){
        super(props)
        this.state={timer:0}
    }
    render(){
        return (
                <View style={styles.container}>
                 <StatusBar hidden />
                    <Text style={styles.logotext}>JAJUS</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#52C8BE',
        justifyContent:'center',
        alignItems:'center'
    },
    logotext:{
        color:'#ffffff',
        fontSize:40,
        fontWeight:'500'
    }
});