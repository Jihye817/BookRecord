import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Select, Option} from 'react-native-chooser';
import cstyle from './Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class Peoplestat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : '0'
        }
    }

    onSelect(value, label) { //년도 select를 위한 함수
        this.setState({value : value})
    }

    render() {
        return (
            <View style = {cstyle.whitecontainer}>
                <View style = {styles.wholecontainer}>
                    <View style = {styles.greencontainer}>
                        <View style = {styles.inbox}>
                            <Select onSelect = {this.onSelect.bind(this)}
                                defaultText = {this.state.value}
                                style = {styles.pickerstyle}
                                optionListStyle = {styles.pickeroptionstyle}>
                            <Option value = "2019">2019</Option>
                            <Option value = "2018">2018</Option>
                            </Select>
                            <Text style = {styles.whitetext}> 년 </Text>
                            <Text style = {styles.yellowtext}>이웃</Text>
                            <Text style = {styles.whitetext}> 들의 기록</Text>
                        </View>
                        
                    </View>

                    <View style = {styles.graphcontainer}>
                        <View style = {styles.graphbox}></View>
                    </View>

                    <View style = {styles.greencontainer}>
                        <View style = {styles.inbox}>
                            <View style = {{paddingLeft:10,}}/>
                            <Text style = {styles.yellowtext}>이웃</Text>
                            <Text style = {styles.whitetext}> 들의 선호분야</Text>
                        </View>
                        
                    </View>

                    <View style = {styles.boxcontainer}>
                        <View style = {styles.inbox2}>
                            <View style = {styles.icons}>
                                <IonIcon name = "ios-paper" size={40} color='#52C8B2' />
                            </View>
                            <View style = {styles.rightbox}>
                                <Text style = {styles.greytext}>인문</Text>
                                <View style = {styles.textbox}><Text style = {styles.greentext}>7권</Text></View>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.boxcontainer}>
                        <View style = {styles.inbox2}>
                            <View style = {styles.icons}>
                                <IonIcon name = "ios-map" size={40} color='#52C8B2' />
                            </View>
                            <View style = {styles.rightbox}>
                                <Text style = {styles.greytext}>역사/  문화</Text>
                                <View style = {styles.textbox}><Text style = {styles.greentext}>5권</Text></View>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.boxcontainer}>
                        <View style = {styles.inbox2}>
                            <View style = {styles.icons}>
                                <IonIcon name = "ios-flask" size={40} color='#52C8B2' />
                            </View>
                            <View style = {styles.rightbox}>
                                <Text style = {styles.greytext}>과학 / 공학</Text>
                                <View style = {styles.textbox}><Text style = {styles.greentext}>2권</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    wholecontainer:{
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greencontainer: {
        width: '90%',
        height:50,
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
    },
    inbox:{
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems:'center',
    },
    pickerstyle: {
        width:80,
        height: 30,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#D2D2D2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickeroptionstyle: {
        borderColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whitetext: {
        color: '#FFF',
        fontSize: 18,
        fontWeight:'500'
    },
    yellowtext: {
        color: '#FFD966',
        fontSize: 18,
        fontWeight:'500'
    },
    graphcontainer: {
        width: '90%',
        paddingTop:10,
        paddingBottom:20,
    },
    graphbox: {
        height:200,
        borderWidth: 2,
        borderColor: '#52C8B2',
    },
    boxcontainer: {
        width: '90%',
        paddingTop:10,
    },
    inbox2: {
        borderWidth: 2,
        borderColor: '#52C8B2',
        flexDirection: 'row',
        alignItems: 'center',
        padding:5,
    },
    icons:{
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightbox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%'
    },
    greytext: {
        fontSize: 18,
        width: 120,
        paddingLeft:10,
        alignItems: 'center',
    },
    textbox:{
        width: 50,
        height: 50,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greentext: {
        fontSize: 18,
        color: '#52C8B2',
    },
});