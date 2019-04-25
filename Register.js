import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import cstyle from './Styles';
//test branch commit test
export default class Mainpage extends React.Component{
    render() {
        return (
          <SafeAreaView style = {[cstyle.greencontainer, {flex : 1}]}>
            <StatusBar hidden />
            <KeyboardAvoidingView style = {styles.container} behavior='padding'>
              <View style = {styles.txtcontainer}>
                <Text style = {styles.txt}>회원가입</Text>
              </View>
              <View style = {styles.infowrap}>
                <View style = {styles.infocontainer}>
                  <Text>닉네임</Text>
                  <View style = {styles.inputwithbtn}>
                    <TextInput style = {styles.input}/>
                    <TouchableOpacity style = {styles.greenbtn}>
                      <Text style = {styles.greenbtntxt}>중복확인</Text>
                    </TouchableOpacity>
                  </View>
                  <Text>성별</Text>
                  <Text>생년월일 (ex : 19990101)</Text>
                  <Text>연령</Text>
                  <Text>이메일 (ex : book@naver.com)</Text>
                  <Text>인증번호 입력</Text>
                  <Text>비밀번호</Text>
                  <Text>비밀번호 확인</Text>
                </View>
                <TouchableOpacity style = {styles.btncontainer}>
                  <Text style = {styles.btntext}>회원가입</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.checkwrap}>
                <Text>asdf</Text>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        );
      }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#52C8BE',
      alignItems: 'center'
  },
  txtcontainer: {
    flex: 1,
    backgroundColor: '#5AD',
    paddingVertical: 10
  },
  txt: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  infowrap: {
    flex: 12,
    backgroundColor: '#AD5'
  },
  infocontainer: {
    width: 300,
    paddingHorizontal: 30,
    paddingTop:10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    backgroundColor: '#F2F2F2',
    width:'65%',
  },
  inputwithbtn:{
    flexDirection: 'row',
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
  greenbtn: {
    backgroundColor: '#52C8BE',
    width:'35%',
    justifyContent: 'center',
  },
  greenbtntxt:{
    textAlign: 'center',
    color: '#FFFFFF',
    justifyContent: 'center',
    fontSize: 16,
  },
  checkwrap:{
    flex: 1.5,
    backgroundColor: '#FF2'
  }
});