import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,ImageBackground} from 'react-native';
import {Select, Option} from 'react-native-chooser';
import cstyle from './Styles';
import {withNavigationFocus} from 'react-navigation';

class Bookrecom extends React.Component{
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
                    <View style = {styles.whitebox}>
                        <Text style = {{color: '#52C8B2', fontSize: 24,}}>{this.state.value}</Text>
                        <Text>추천작</Text>
                    </View>
                </View>

                <View style = {styles.thirdcontainer}>
                    <View style = {styles.greybox}>
                        <View style = {styles.boxline}>
                            <View style = {styles.recoms}>
                                <Image style = {styles.image} source={require('./images/book1.jpg')}></Image>
                                <Text style = {styles.booktitle}>서울, 1964년 겨울</Text>
                                <Text style = {styles.bookinfo}>김승옥 | 맑은소리</Text>
                            </View>
                            <View style = {styles.recoms}>
                                <Image style = {styles.image} source={require('./images/book2.jpg')}></Image>
                                <Text style = {styles.booktitle}>종의 기원</Text>
                                <Text style = {styles.bookinfo}>정유정 | 은행나무</Text>
                            </View>
                        </View>
                        
                        <View style = {styles.boxline}>
                            <View style = {styles.recoms}>
                                <Image style = {styles.image} source={require('./images/book3.jpg')}></Image>
                                <Text style = {styles.booktitle}>이방인</Text>
                                <Text style = {styles.bookinfo}>알베르 카뮈 | 민음사</Text>
                            </View>
                            <View style = {styles.recoms}>
                                <Image style = {styles.image} source={require('./images/book4.jpg')}></Image>
                                <Text style = {styles.booktitle}>코스모스</Text>
                                <Text style = {styles.bookinfo}>칼 세이건 | 사이언스북스</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigationFocus(Bookrecom)

const styles = StyleSheet.create({
    firstcontainer: {
        backgroundColor: '#FFF',
        flex : 0.8,
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
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
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
    whitebox: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    boxline: {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    recoms: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height:120,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    booktitle: {
        paddingTop:5,
        fontSize: 16,
    },
    bookinfo: {
        fontSize: 14,
        color:'#B2B2B2'
    },
})