import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar,TextInput} from 'react-native';
import cstyle from './Styles';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
//import console = require('console');

export default class Found extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            apiData: [],
            naData: []
        }
        this.user_name = null;
        this.email = null;
        this.phone_number = null;
    }

    // Button 눌렀을 때 event
    getButton = () => {
        fetch('http://220.149.242.12:10001/user',{
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData:jsonData})
            console.log(this.state.apiData)
        }).done();
        this.user_name = null;
    }

    saveButton = () => {

        fetch('http://220.149.242.12:10001/user',{
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user_name: this.user_name, email: this.email})
        }).then((responseData) => {
            alert(responseData);
            return responseData.text();
        }).then((jsonData) => {
            //console.log(jsonData);
            alert(jsonData);
            this.setState({naData:jsonData})
            console.log(this.state.naData)
        }).done();
        this.user_name = null;
        this.email = null;
    }

    searchButton = () => {
        fetch('http://220.149.242.12:10001/user'+(this.user_name),{
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData:jsonData})
            console.log(this.state.apiData)
        }).done();
        this.user_name = null;
    }


    render(){
        const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return (
                <View key={jsonData.user_name}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ color:'#000'}}>{jsonData.user_name} | </Text>
                        <Text style={{ color:'#000'}}>{jsonData.email} | </Text>
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

                        <TouchableHighlight style={styles.button} onPress = {this.searchButton}>
                            <Text style = {styles.textStyle}>Search</Text>
                        </TouchableHighlight>               

                        <TouchableHighlight style={styles.button} onPress = {this.saveButton}>
                            <Text style = {styles.textStyle}>Save</Text>
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