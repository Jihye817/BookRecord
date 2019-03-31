import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Login extends Component{
    render(){
        return (
            <View style = {styles.container}>
                <Text>this is login page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#52C8BE'
    }
});