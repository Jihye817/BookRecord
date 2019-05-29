import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker} from 'react-native';
import cstyle from './Styles';

export default class Mybookinfo extends React.Component{
    render(){
        return(
            <View style = {cstyle.whitecontainer}>
                <View style = {styles.firstcontainer}>
                    <View style = {styles.greybox}>
                        <Text style = {{fontSize:20}}>3 / 23</Text>
                    </View>
                </View>
                <View style = {styles.secondcontainer}>
                    <View style = {styles.infobox}>
                        <View style = {styles.bookinfobox}>
                            <View style = {styles.infoimage}>
                                <Image style = {styles.image} source={require('./images/for_i.jpg')}></Image>
                            </View>
                            
                            <View style = {styles.infotext}>
                                <View style = {styles.textone}>
                                    <Text style = {styles.textitle}>i에게</Text>
                                </View>
                                <Text style = {styles.textinfos}>김소연 | 아침달 시집 | 2018-09-10</Text>
                                <TouchableOpacity style = {styles.more}><Text>더보기 +</Text></TouchableOpacity>
                            </View>
                        </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    secondcontainer: {
        paddingTop: 20,
        flex: 10,
        alignItems: 'center',
    },
    infobox: {
        width: '90%',
    },
    bookinfobox:{
        height:170,
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'100%',
        borderBottomWidth: 1,
        borderColor:'#DDD',
    },
    infoimage: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'30%',
    },
    image: {
        width:'80%',
        resizeMode: 'contain',
    },
    infotext: {
        width:'67%',
    },
    textitle: {
        fontSize: 18,
        paddingVertical: 1,
    },
    textinfos: {
        color:'#B2B2B2',
        paddingBottom: 20,
    },
    textone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom:4,
    },
    button: {
        width:70,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    more: {
        width: '100%',
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
/*

                                    <View style = {{flexDirection: 'row', width: 150, justifyContent: 'space-between'}}>
                                        <TouchableOpacity style ={styles.button}><Text>읽는중</Text></TouchableOpacity>
                                        <TouchableOpacity style ={styles.button}><Text>완독</Text></TouchableOpacity>
                                    </View>
*/