import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Picker, TextInput, CheckBox, TouchableOpacity} from 'react-native';
import cstyle from './Styles';
//test branch commit test22222
export default class Mainpage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      active:true,
      pickerSelect: '연령',
      checked: false
    }
  }
  handleToggle(){
    const newState = !this.state.active;
    this.setState({active:newState});
  }

    render() {
      const {active} = this.state;
      const bgColor = active?"#52C8BE":"#F2F2F2";
      const bgColor2 = active?"#F2F2F2":"#52C8BE";
        return (
          <SafeAreaView style = {[cstyle.greencontainer, {flex : 1}]}>
            <StatusBar hidden />
            <View style = {styles.container} behavior='padding'>
              <View style = {styles.txtcontainer}>
                <Text style = {styles.txt}>회원가입</Text>
              </View>
              <View style = {styles.infowrap}>
                <View style = {styles.infocontainer}>
                  <Text style = {styles.rgtxt}>닉네임</Text>
                  <View style = {styles.inputwithbtn}>
                    <TextInput style = {styles.input}/>
                    <TouchableOpacity style = {styles.greenbtn}>
                      <Text style = {styles.greenbtntxt}>중복확인</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style = {styles.rgtxt}>성별</Text>
                  <View style = {styles.genderwrap}>
                    <TouchableOpacity style = {[styles.toggle, {backgroundColor:bgColor}]} onPress={()=>this.handleToggle()}>
                      <Text style = {styles.greenbtntxt}>여성</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.toggle, {backgroundColor:bgColor2}]} onPress={()=>this.handleToggle()}>
                      <Text style = {styles.greenbtntxt}>남성</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style = {styles.rgtxt}>생년월일 (ex : 19990101)</Text>
                  <View style = {styles.inputwithbtn}>
                    <TextInput style = {styles.inputfull}/>
                  </View>
                  <Text style = {styles.rgtxt}>연령</Text>
                  <View style = {styles.inputwithbtn}>
                    <Picker
                      style = {styles.pickerstyle}
                      selectedValue={this.state.pickerSelect}
                      onValueChange={(itemValue, itemIndex) => this.setState({pickerSelect:itemValue})}>
                      <Picker.Item label="10대" value="first" />
                      <Picker.Item label="20대" value="second" />
                      <Picker.Item label="30대" value="third" />
                      <Picker.Item label="40대" value="fourth" />
                      <Picker.Item label="50대" value="fifth" />
                      <Picker.Item label="60대" value="sixth" />
                    </Picker>
                  </View>
                  <Text style = {styles.rgtxt}>이메일 (ex : book@naver.com)</Text>
                  <View style = {styles.inputwithbtn}>
                    <TextInput style = {styles.input}/>
                    <TouchableOpacity style = {styles.greenbtn}>
                      <Text style = {styles.greenbtntxt}>인증요청</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style = {styles.rgtxt}>인증번호 입력</Text>
                  <View style = {styles.inputwithbtn}>
                    <TextInput style = {styles.input}/>
                    <TouchableOpacity style = {styles.greenbtn}>
                      <Text style = {styles.greenbtntxt}>인증</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style = {styles.rgtxt}>비밀번호</Text>
                  <View style = {styles.inputwithbtn}>
                    <TextInput style = {styles.inputfull}/>
                  </View>
                  <Text style = {styles.rgtxt}>비밀번호 확인</Text>
                  <View style = {styles.inputwithbtn}>
                    <TextInput style = {styles.inputfull}/>
                  </View>
                </View>
                <TouchableOpacity style = {styles.btncontainer} onPress = {() => this.props.navigation.navigate('RegisterfinScreen')}>
                  <Text style = {styles.btntext}>회원가입</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.checkwrap}>
              <CheckBox 
                style = {styles.cbox}
                value = {this.state.checked}
                onValueChange={() => this.setState({checked: !this.state.checked})}
                />
                <Text style = {styles.ctext}>이용약관 및 개인정보 취급방침에 동의합니다.</Text>
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
      alignItems: 'center'
  },
  txtcontainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  txt: {
    fontSize: 20,
    color: '#FFFFFF',
    alignItems:'center',
    fontWeight: '500',
  },
  infowrap: {
    flex: 12,
  },
  infocontainer: {
    width: 300,
    paddingHorizontal: 30,
    paddingTop:5,
    paddingBottom:10,
    backgroundColor: '#FFFFFF',
  },
  rgtxt:{
    paddingTop: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#F2F2F2',
    width:'65%',
  },
  inputfull: {
    height: 40,
    backgroundColor: '#F2F2F2',
    width:'100%'
  },
  inputwithbtn:{
    flexDirection: 'row',
  },
  genderwrap: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  toggle: {
    height: 40,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: '#52C8BE',
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
  pickerstyle:{
    height: 40,
    backgroundColor: '#F2F2F2',
    width:'100%',
    color:'#52C8BE'
  },
  checkwrap:{
    flex: 1,
    width: 300,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  cbox: {
    color: '#52C8BE'
  },
  ctext: {
    fontSize: 14,
    color: '#FFFFFF'
  },
});