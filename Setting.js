import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import cstyle from './Styles';
import {Header} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class Setting extends React.Component{
    static navigationOptions = {
        drawerIcon:(
            <IonIcon name='md-settings' size={24} color = '#52C8B2'/>
        )
    }

    render() {
        return (
            <View style = {cstyle.whitecontainer}>
                <Header
                    leftComponent={{icon:'menu', color:'#FFF', onPress: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}
                    centerComponent={{text: '설정', style:{color:'#FFF'}}}
                    containerStyle={{backgroundColor:'#52C8BE', height:45, paddingTop:0}}
                />
                <View style = {styles.topcontainer}>
                    <Text style = {styles.toptext}>어플리케이션 설정</Text>
                </View>
                <View style = {styles.midcontainer}>
                    <TouchableOpacity style = {styles.whitebtn}><Text style = {styles.btntext}>공지사항</Text></TouchableOpacity>
                </View>
                <View style = {styles.midcontainer}>
                    <TouchableOpacity style = {styles.whitebtn}><Text style = {styles.btntext}>많이 묻는 질문</Text></TouchableOpacity>
                </View>
                <View style = {styles.midcontainer}>
                    <TouchableOpacity style = {styles.whitebtn}><Text style = {styles.btntext}>문의 및 의견</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topcontainer: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toptext: {
        fontSize: 20,

    },
    midcontainer: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whitebtn: {
        width: '85%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#52C8B2'
    },
    btntext: {
        color: '#52C8B2',
        fontSize: 16,
    },
})