import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Select, Option} from 'react-native-chooser';
import {DrawerActions} from 'react-navigation';
import cstyle from './Styles';
import {Header} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class Goal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : '0'
        }
    }

    onSelect(value, label) { //목표권수 select를 위한 함수
        this.setState({value : value})
    }

    static navigationOptions = {
        drawerIcon:(
            <IonIcon name='md-flag' size={24} color = '#52C8B2'/>
        )
    }

    render() {
        return (
            <View style = {cstyle.whitecontainer}>
                <Header
                    leftComponent={{icon:'menu', color:'#FFF', onPress: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}
                    centerComponent={{text: '월간 목표량 설정', style:{color:'#FFF'}}}
                    containerStyle={{backgroundColor:'#52C8BE', height:45, paddingTop:0}}
                />
                <View style = {styles.firstcontainer}>
                    <Text style = {styles.bigtext}>나의</Text>
                    <Text style = {styles.biggreentext}> 3월 </Text>
                    <Text style = {styles.bigtext}>목표는?</Text>
                </View>

                <View style = {styles.secondcontainer}>
                    <Select onSelect = {this.onSelect.bind(this)}
                            defaultText = {this.state.value}
                            style = {styles.pickerstyle}
                            optionListStyle = {styles.pickeroptionstyle}>
                        <Option value = "1">1</Option>
                        <Option value = "2">2</Option>
                        <Option value = "3">3</Option>
                        <Option value = "4">4</Option>
                    </Select>
                    <Text style = {styles.greentext}> 권</Text>
                </View>

                <View style = {styles.thirdcontainer}>
                    <TouchableOpacity style = {styles.greenbtn}><Text style = {styles.btntext}>등록</Text></TouchableOpacity>
                </View>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    firstcontainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigtext: {
        fontSize: 20,
    },
    biggreentext: {
        fontSize: 26,
        color: '#52C8B2'
    },
    secondcontainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    pickerstyle: {
        width:150,
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
    greentext: {
        fontSize:20,
        color: '#52C8B2'
    },
    thirdcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    greenbtn: {
        width: 200,
        paddingVertical: 5,
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntext: {
        fontSize: 18,
        color: '#FFF'
    },
});