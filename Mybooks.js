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

    onSelect(value, label) {
        this.setState({value : value})
    }
    onSelect2(value, label) {
        this.setState({value : value})
    }
    onSelect3(value, label) {
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
                            //indicator = "down"
                            //indicatorColor="#52C8B2"
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
                            <Text>검색</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.secondcontainer}>
                    <View style = {styles.greybox}>
                        <Text>book information goes here</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
})