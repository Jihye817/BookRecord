import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Picker} from 'react-native';
import cstyle from './Styles';

export default class Mybooks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          active:true,
          pickerSelect: '년도',
          checked: false
        }
      }

    render() {
        return(
            <View style = {cstyle.whitecontainer}>
                <View style = {cstyle.middlecontainer}/>
                <View style = {styles.firstcontainer}>
                    <View style = {styles.greybox}>
                        <View style = {styles.pickerstyle}>
                        </View>
                        
                        <View style = {styles.pickerstyle}>
                        </View>

                        <View style = {styles.pickerstyle}>
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
    pickerstyle: {
        height: 30,
        width: '20%',
        backgroundColor: '#FFF',
        color: '#52C8BE',
        borderWidth:1,
        borderColor: '#52C8BE'
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