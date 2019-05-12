import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,ImageBackground} from 'react-native';
import {Select, Option} from 'react-native-chooser';
import cstyle from './Styles';

export default class Bookrecom extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : '분류',
        }
    }

    onSelect(value, label) { //년도 select를 위한 함수
        this.setState({value : value})
    }

    render() {
        return(
            <View style = {cstyle.whitecontainer}>
                <View style = {cstyle.middlecontainer}/>
                <View style = {styles.firstcontainer}>
                    <View style = {styles.greenbox}>
                        <View style = {styles.textbox}>
                            <Text style = {{color: '#FFF', fontSize: 16,}}>오늘의</Text>
                        </View>

                        <View style = {styles.textbox}>
                            <Select onSelect = {this.onSelect.bind(this)}
                                defaultText = {this.state.value}
                                style = {styles.pickerstyle}
                                optionListStyle = {styles.pickeroptionstyle}>
                                <Option value = "시 / 에세이">시 / 에세이</Option>
                                <Option value = "소설">소설</Option>
                                <Option value = "수필">수필</Option>
                            </Select>
                        </View>

                        <View style = {styles.textbox}>
                            <Text style = {{color: '#FFF', fontSize: 16,}}>추천</Text>
                        </View>

                    </View>
                </View>
                <View style = {styles.secondcontainer}>
                    <Text>selected info goes here</Text>
                </View>
                <View style = {styles.thirdcontainer}>
                    <View style = {styles.greybox}>
                        <Text>book info goes here</Text>
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
    greenbox: {
        backgroundColor: '#52C8B2',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    secondcontainer: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    thirdcontainer: {
        backgroundColor: '#FFF',
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    greybox: {
        backgroundColor: '#F2F2F2',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textbox: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerstyle: {
        height: 30,
        width:'100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    pickeroptionstyle: {
        borderColor: '#52C8B2',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
})