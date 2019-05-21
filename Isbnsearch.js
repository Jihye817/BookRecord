import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker } from 'react-native';
import cstyle from './Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import SwitchButton from 'switch-button-react-native';
import moment from "moment";
//import console = require('console');

export default class Isbnsearch extends React.Component {
    //constructor = 생성자 = 클래스가 생성될 때 제일 먼저 실행되는 함수
    // this.state={} state가 사용할 변수를 초기화
    // 밑의 함수에서 this.setState() 함수를 사용하여 update
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            markedDate: moment(new Date()).format("YYYY-MM-DD"),
            isPopVisible: false,
            apiData: [
                this.ISBN = null,
                this.book_name = null,
                this.img_src = null,
                this.author = null,
                this.publisher = null,
                this.public_date = null,
                this.more_url = null,
                this.read_rate = null,
                this.read_date = null,
                this.category = null,
                this.best = null
            ]
        }
    }

    togglePop = () => {
        fetch('http://220.149.242.12:10001/search/book/:'+(this.ISBN), {
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).them((jsonData) => {
            console.log(jsonData);
            this.setState({ apiData: jsonData })
            console.log(this.state.apiData)
        }).done();
        this.setState({ isPopVisible: !this.state.isPopVisible });
        this.ISBN = null;
        this.book_name = null;
        this.img_src = null;
        this.author = null;
        this.publisher = null;
        this.public_date = null;
        this.more_url = null;
        this.read_rate = null;
        this.read_date = null;
        this.category = null;
        this.best = null;
    }

    render() {
        const data = this.state.apiData;
        const today = this.state.currentDate;
        let dataDisplay = data.map(function (jsonData) {
            alert(today);
            return (
                <View style={styles.popthird}>
                    <View style={{ paddingTop: 30, }}>
                        <Text style={{ color: '#52C8B2', fontSize: 20, }}>도서 정보 확인</Text>
                    </View>
                    <View style={{ paddingTop: 20, }}>
                        <Image  style={{ width: 150, resizeMode: 'contain', }} 
                                source={{uri:jsonData.items.image}}>
                        </Image>
                    </View>
                    <View style={{ paddingTop: 10, }}>
                        <Text style={{ fontSize: 18, }}>{jsonData.items.title}</Text>
                    </View>
                    <View style={{ paddingTop: 10, }}>
                        <Text style={{ color: '#D7D7D7' }}>{jsonData.items.author} | {jsonData.items.publisher} | {today}</Text>
                    </View>
                    <View style={styles.popbtn}>
                        <View style={{ width: 10, }}></View>
                        <View style={styles.popbtnleft}>
                            <SwitchButton
                                onValueChange={(val) => this.setState({ activeSwitch: val })}
                                text1='읽는 중'
                                text2='완독'
                                switchWidth={120}
                                switchHeight={30}
                                switchdirection='ltr'
                                switchBorderRadius={0}
                                switchSpeedChange={500}
                                switchBorderColor='#52C8B2'
                                switchBackgroundColor='#F2F2F2'
                                btnBorderColor='#52C8B2'
                                btnBackgroundColor='#52C8B2'
                                fontcolor='#333'
                                activeFontColor='#FFF'
                            />
                        </View>
                    </View>
                    <View style={styles.popbtnbig}>
                        <TouchableOpacity style={styles.bigbtn} onPress={this.togglePop}><Text style={{ fontSize: 16, color: '#FFF' }}>취소</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bigbtn} onPress={this.togglePop}><Text style={{ fontSize: 16, color: '#FFF' }}>등록하기</Text></TouchableOpacity>
                    </View>
                </View>
            )
        })
        return (
            <View style={cstyle.greycontainer}>
                <View style={styles.firstbox}>
                    <Text style={{ color: '#FFF', fontSize: 20 }}>책의 ISBN을 입력하세요</Text>
                </View>
                <View style={styles.secondbox}>
                    <TextInput style={styles.input} 
                        placeholder = "Enter ISBN"
                        onChangeText = {(text) => {this.ISBN = text}}
                        value = {this.ISBN}
                    />
                    <TouchableOpacity style={styles.searchbtn} onPress={this.togglePop}>
                        <IonIcon name="ios-search" size={30} color='#FFF' />
                    </TouchableOpacity>
                </View>
                <View style={styles.firstbox}>
                    <TouchableOpacity style={styles.greenbtn}>
                        <Text style={{ color: '#FFF', fontSize: 20 }}>등록 취소</Text>
                    </TouchableOpacity>
                </View>
                <Modal isVisible={this.state.isPopVisible}>
                    <View style={styles.popfirst}>
                        <View style={styles.popsecond}>
                            {dataDisplay}
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
    input: {
        height: 40,
        width: '70%',
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
        flex: 1,
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
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popbtn: {
        width: '90%',
        flexDirection: 'row',
        paddingTop: 15,
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
        paddingTop: 10,
    },
    bigbtn: {
        width: 120,
        height: 35,
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center'
    },

})