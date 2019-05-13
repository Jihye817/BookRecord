import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Picker} from 'react-native';
import {Select, Option} from 'react-native-chooser';
import cstyle from './Styles';

export default class Mybooks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : '년도 ',
            value2: '분류',
            value3: '상태'
        }
    }

    onSelect(value, label) { //년도 select를 위한 함수
        this.setState({value : value})
    }
    onSelect2(value, label) { //분류 select를 위한 함수
        this.setState({value : value})
    }
    onSelect3(value, label) { //상태 select를 위한 함수
        this.setState({value : value})
    }

    render() {
        return(
            <View style = {cstyle.whitecontainer}>
                <View style = {cstyle.middlecontainer}/>
                <View style = {styles.firstcontainer}>
                    <View style = {styles.greybox}>
                        <View style = {styles.pickerstyle1}>
                        <Select onSelect = {this.onSelect.bind(this)}
                            defaultText = {this.state.value}
                            style = {styles.pickerstyle}
                            optionListStyle = {styles.pickeroptionstyle}>
                            <Option value = "2019 ">2019</Option>
                            <Option value = "2018 ">2018</Option>
                        </Select>
                        </View>

                        <View style = {styles.pickerstyle1}>
                        <Select onSelect2 = {this.onSelect2.bind(this)}
                            defaultText = {this.state.value2}
                            style = {styles.pickerstyle}
                            optionListStyle = {styles.pickeroptionstyle}>
                            <Option value = "소설">소설</Option>
                            <Option value = "수필">수필</Option>
                        </Select>
                        </View>

                        <View style = {styles.pickerstyle1}>
                        <Select onSelect3 = {this.onSelect3.bind(this)}
                            defaultText = {this.state.value3}
                            style = {styles.pickerstyle}
                            optionListStyle = {styles.pickeroptionstyle}>
                            <Option value = "읽는중">읽는중</Option>
                            <Option value = "완독">완독</Option>
                        </Select>
                        </View>

                        <TouchableOpacity style = {styles.greenbtn}>
                            <Text style = {{color:'#FFF'}}>검색</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.secondcontainer}>
                    <TouchableOpacity style = {styles.greybox2} onPress = {() => this.props.navigation.navigate('MybookinfoScreen')}>
                        <View style = {styles.bookinfobox}>
                            <TouchableOpacity style = {styles.read}>
                                <Text style = {{color:'#FFF'}}>완독</Text>
                            </TouchableOpacity>
                            <View style = {styles.infodate}>
                                <Text>3/22</Text>
                            </View>
                            
                            <View style = {styles.infoimage}>
                                <Image style = {styles.image} source={require('./images/for_i.jpg')}></Image>
                            </View>
                            
                            <View style = {styles.infotext}>
                                <Text style = {styles.textitle}>i에게</Text>
                                <Text style = {styles.textinfos}>김소연 | 아침달 시집 | 2018-09-10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    read:{
        position: 'absolute',
        width:45,
        height:24,
        right:10,
        top: 10,
        backgroundColor:'#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstcontainer: {
        backgroundColor: '#FFF',
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    greybox: {
        backgroundColor: '#F2F2F2',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    pickerstyle1: {
        height: 30,
        width: '20%',
        backgroundColor: '#FFF',
        color:'#333',
        borderWidth:1,
        borderColor:'#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerstyle: {
        height: 30,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    pickeroptionstyle: {
        borderColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenbtn: {
        height: 30,
        width: '18%',
        backgroundColor: '#52C8BE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondcontainer: {
        backgroundColor: '#FFF',
        flex: 7,
        paddingVertical: 20,
        alignItems: 'center',
    },
    greybox2: {
        backgroundColor: '#F2F2F2',
        width: '90%',
    },
    bookinfobox: {
        height:110,
        flexDirection: 'row',
        width:'100%',
        borderBottomWidth: 1,
        borderColor:'#DDD',
    },
    infodate: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'14%',
    },
    infoimage: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'20%',
    },
    image: {
        width:'80%',
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infotext: {
        justifyContent: 'center',
        width:'66%',
    },
    textitle: {
        paddingLeft: 10,
        fontSize: 16,
        paddingBottom:4,
    },
    textinfos: {
        paddingLeft: 10,
        color:'#B2B2B2'
    },
})