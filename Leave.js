import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, CheckBox} from 'react-native';
import {DrawerActions} from 'react-navigation';
import cstyle from './Styles';
import {Header} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class Leave extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    render() {
        return (
            <View style = {cstyle.whitecontainer}>
                <Header
                    leftComponent={{icon:'menu', color:'#FFF', onPress: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}
                    centerComponent={{text: 'Mypage', style:{color:'#FFF'}}}
                    containerStyle={{backgroundColor:'#52C8BE', height:45, paddingTop:0}}
                />
                <View style = {styles.greycontainer}>
                    <IonIcon name='ios-book' size={50} color='#555' />
                    <Text style = {{paddingTop: 20, fontSize: 14,}}>회원탈퇴 신청하기 전에 확인해주세요</Text>
                </View>
                <View>
                    <View style = {styles.textcontainer}>
                        <Text style = {{height: 100, fontSize: 14,}}>탈퇴 후 회원정보 및 이용기록은 모두 삭제되며, 다시 복구할 수 없습니다. 동일한 이메일을 사용한 재가입은 24시간 이내에는 불가능합니다.</Text>
                    </View>
                    <View style = {styles.checkcontainer}>
                        <CheckBox value = {this.state.checked}
                            onValueChange={() => this.setState({checked: !this.state.checked})} />
                        <Text>탈퇴를 신청합니다.</Text>
                    </View>
                    <View style = {styles.btncontainer}>
                        <TouchableOpacity style = {styles.greenbtn}><Text style = {styles.btntext}>탈퇴하기</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    greycontainer:{
        backgroundColor: '#F2F2F2',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textcontainer: {
        width:'100%',
        height:100,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center',
    },
    firsttext: {
        width: 120,
        paddingLeft: 20,
        alignItems: 'center',
    },
    checkcontainer:{
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        paddingLeft: 20
    },
    btncontainer:{
        paddingTop:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenbtn:{
        width: 250,
        paddingVertical: 5,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntext: {
        fontSize:18,
        color: '#52C8B2'
    },
});