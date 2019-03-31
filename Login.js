import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, Keyboard, CheckBox, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

export default class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
    render(){
        return (
            <SafeAreaView style = {styles.container}>
                <StatusBar hidden />
                <KeyboardAvoidingView style = {styles.container} behavior='padding'>
                    <TouchableWithoutFeedback style = {styles.container} onPress={Keyboard.dismiss}>
                        <View style = {styles.container}>
                            <View style = {styles.logowrap}>
                               <Text style = {styles.logo}>B PORT</Text>
                                <Text style = {styles.logotext}>your book report</Text>
                            </View>
                            <View style = {styles.infowrap}>
                                <View style = {styles.infocontainer}>
                                    <Text style = {styles.infotext}>USERNAME</Text>
                                    <TextInput style = {styles.input}
                                        placeholder="username/email"
                                        placeholderTextColor='#E2E2E2'
                                        keyboardType='email-address'
                                        returnKeyType='next'
                                        autoCorrect={false}
                                        onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                    />
                                    <Text style = {styles.infotext}>PASSWORD</Text>
                                    <TextInput style = {styles.input}
                                        placeholder="password"
                                        placeholderTextColor='#E2E2E2'
                                        returnKeyType='go'
                                        secureTextEntry
                                        autoCorrect={false}
                                        ref={"txtPassword"}
                                    />
                                    <View style={styles.cwrap}>
                                        <CheckBox 
                                            style = {styles.cbox}
                                            value = {this.state.checked}
                                            onValueChange={() => this.setState({checked: !this.state.checked})}
                                        />
                                        <Text style = {styles.ctext}>자동로그인</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style = {styles.btncontainer}>
                                        <Text style = {styles.btntext}>Login</Text>
                                </TouchableOpacity>
                                <View style = {styles.bottomtext}>
                                    <TouchableOpacity><Text style = {styles.bottomleft}>id/비번찾기</Text></TouchableOpacity>
                                    <TouchableOpacity><Text style = {styles.bottomright}>회원가입</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#52C8BE'
    },
    logowrap: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20,
        flex: 3
    },
    logo: {
        fontSize: 40,
        color: '#FFFFFF',
        fontWeight: '500'
    },
    logotext: {
        color: '#FFD966',
        fontSize: 18,
        textAlign: 'center'
    },
    infowrap: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    infocontainer: {
        width: 300,
        paddingHorizontal: 30,
        paddingTop:10,
        backgroundColor: '#FFFFFF'
    },
    infotext: {
        fontSize: 14,
        color: '#A6A6A6',
        paddingTop: 20,
        paddingBottom: 5
    },
    input: {
        height: 40,
        backgroundColor: '#F2F2F2'
    },
    cwrap:{
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 10
    },
    cbox: {
        color: '#52C8BE'
    },
    ctext: {
        fontSize: 14,
        color: '#A6A6A6'
    },
    btncontainer: {
        backgroundColor: '#97D4D8',
        width: 300,
        paddingVertical: 12
    },
    btntext: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 20,
        justifyContent: 'flex-start'
    },
    bottomtext: {
        flex: 1,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    bottomleft: {
        flex:1,
        color: '#FFFFFF'
    },
    bottomright: {
        flex:1,
        textAlign: 'right',
        color: '#FFFFFF'
    }
});