import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar,TextInput} from 'react-native';
import cstyle from './Styles';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
//import console = require('console');

export default class Found extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            apiData: []
        }
        this.dataId = null;
        this.user_name = null;
        this.email = null;
        this.phone_number = null;
    }

    getButton = () => {
        fetch('http://220.149.242.12:3000/user',{
            method: 'GET'
        }).then((response) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData:jsonData})
            console.log(this.state.apiData)
        }).done();
        this.dataId = null;
    }

    render(){
        const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return (
                <View key={jsonData.id}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ color:'#000'}}>{jsonData.id}</Text>
                        <Text style={{ color:'#000'}}>{jsonData.user_name}</Text>
                        <Text style={{ color:'#000'}}>{jsonData.email}</Text>
                    </View>
                </View>
            )
        });
        return(
            <SafeAreaView style = {[cstyle.greencontainer, {flex : 1}]}>
                <StatusBar hidden />
                <View style = {styles.container} behavior='padding'>
                    <View style = {styles.top}>

                    </View>
                    <View style = {styles.infocontainer}>
                        <Text>App users</Text>
                        <TextInput style={styles.input}
                        placeholder = 'Id'
                        onChangeText = {(text) => {this.dataId = text}}
                        value = {this.dataId}
                        underlineColorAndroid = 'transparent'
                        />
                        <TextInput style={styles.input}
                        placeholder = 'Enter Name'
                        onChangeText = {(text) => {this.user_name = text}}
                        value = {this.user_name}
                        underlineColorAndroid = 'transparent'
                        />  
                        <TextInput style={styles.input}
                        placeholder = 'Enter email'
                        onChangeText = {(text) => {this.email = text}}
                        value = {this.email}
                        underlineColorAndroid = 'transparent'
                        />
                        <TouchableHighlight style={styles.button} onPress = {this.getButton}>
                            <Text style = {styles.textStyle}>View Data</Text>
                        </TouchableHighlight>

                        <ScrollView contentContainerStyle={styles.infocontainer}>
                            {dataDisplay}
                        </ScrollView>
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
    input: {
        textAlign:'center',
        height : 30,
        width : '90%',
        padding : 4,
        marginBottom : 7,
        fontSize : 14,
        borderWidth : 1,
    },
    button: {
        paddingTop:10,
        paddingBottom : 10,
        borderRadius : 5,
        marginBottom: 3,
        width : '90%',
        backgroundColor : '#00BCD4'
    },
    textStyle: {
        color: '#fff',
        fontSize : 14,
        textAlign: 'center'
    }
});