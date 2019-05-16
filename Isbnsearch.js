import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker} from 'react-native';
import cstyle from './Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

export default class Isbnsearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPopVisible: false,
        };
    }

    togglePop = () => {
        this.setState({ isPopVisible : !this.state.isPopVisible});
    }

    render(){
        return(
            <View style = {cstyle.greycontainer}>
                <View style = {styles.firstbox}>
                    <Text style = {{color: '#FFF', fontSize: 20}}>책의 ISBN을 입력하세요</Text>
                </View>
                <View style = {styles.secondbox}>
                    <TextInput style = {styles.input} />
                    <TouchableOpacity style = {styles.searchbtn} onPress = {this.togglePop}>
                        <IonIcon name = "ios-search" size={30} color='#FFF' />
                    </TouchableOpacity>
                </View>
                <View style = {styles.firstbox}>
                    <TouchableOpacity style = {styles.greenbtn}>
                        <Text style = {{color: '#FFF', fontSize: 20}}>등록 취소</Text>
                    </TouchableOpacity>
                </View>
                <Modal isVisible = {this.state.isPopVisible}>
                    <View style ={styles.popfirst}>
                        <View style = {styles.popsecond}>
                            <View style ={styles.popthird}>
                                <View style = {{ paddingTop:30,}}>
                                    <Text style = {{color: '#52C8B2', fontSize: 20,}}>도서 정보 확인</Text>
                                </View>
                                <View style = {{ paddingTop:20,}}>
                                    <Image style = {{width:150, resizeMode: 'contain',}} source={require('./images/for_i.jpg')}></Image>
                                </View>
                                <View style = {{ paddingTop:10,}}>
                                    <Text style = {{fontSize: 18,}}>i에게</Text>
                                </View>
                                <View style = {{ paddingTop:10,}}>
                                    <Text style = {{color: '#D7D7D7'}}>김소연 | 아침달 시집 | 2018-09-10</Text>
                                </View>
                                <View style = {styles.popbtn}>
                                    <View style = {{width: 10,}}></View>
                                    <View style = {styles.popbtnleft}>
                                        <TouchableOpacity style = {styles.smallbtn}><Text>읽는 중</Text></TouchableOpacity>
                                        <TouchableOpacity style = {styles.smallbtn}><Text>완독</Text></TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {styles.popbtnbig}>
                                    <TouchableOpacity style = {styles.bigbtn} onPress = {this.togglePop}><Text style = {{fontSize: 16, color: '#FFF'}}>취소</Text></TouchableOpacity>
                                    <TouchableOpacity style = {styles.bigbtn} onPress = {this.togglePop}><Text style = {{fontSize: 16, color: '#FFF'}}>등록하기</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    firstbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondbox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        height: 40,
        width:'70%',
        backgroundColor: '#FFF'
    },
    searchbtn: {
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    thirdbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenbtn: {
        backgroundColor: '#52C8B2',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popfirst: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    popsecond: {
        backgroundColor: '#FFF', 
        height: '80%', 
        width: '90%', 
        alignItems: 'center'
    },
    popthird: {
        width:'90%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    popbtn: {
        width: '90%', 
        flexDirection: 'row', 
        paddingTop:15, 
        justifyContent: 'space-between'
    },
    popbtnleft: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: 120
    },
    smallbtn: {
        width: 50, 
        height: 26, 
        backgroundColor: '#F2F2F2', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    popbtnbig: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingTop:10,
    },
    bigbtn: {
        width: 120, 
        height: 35, 
        backgroundColor: '#52C8B2', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

})