import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Select, Option} from 'react-native-chooser';
import cstyle from './Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LineChart from 'react-native-responsive-linechart';
//import console = require('console');

var data = [0,0,0,0,0,0,0,0,0,0,0,0];
const labels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
const config = {
    line: {
        visible: true,
        strokeWidth: 2,
        strokeColor: '#FFBB00'
    },
    area: {
        visible: false
    },
    yAxis: {
        visible: true,
        labelFormatter: v => String(v)
    },
    xAxis: {
        visible: true,
    },
    grid: {
        stepSize: 1,
    },
    insetY: 10,
    insetX: 10
};

export default class Mystat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : 2019,
            name : 'Ashely',
            pass_one : 0,
            pass_two : 0,
            cateData: [],
            monthData: [],
        }
    }

    onSelect(value, label) { //년도 select를 위한 함수
        this.setState({value : value})
    }

    componentDidMount() {
        
        fetch('http://220.149.242.12:10001/statMonthly/', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({user_name : this.state.name, year : this.state.value})
        }).then((responseData2) => {
            return responseData2.text();
        }).then((jsonData2) => {
            this.setState({monthData : jsonData2})
            this.setState({ pass_two : 1 })
            console.log(this.state.monthData)
        }).done();
        fetch('http://220.149.242.12:10001/statCategory/'+(this.state.name),{
            method: 'GET'
            }).then((responseData1) => {
                return responseData1.json();
            }).then((jsonData1) => {
                //console.log(jsonData1);
                this.setState({ cateData : jsonData1 })
                this.setState({ pass_one : 1 })
                console.log(this.state.cateData)
            }).done();
    }

    render() {
        var catedata = this.state.cateData;
        var category = ['sample', 'sample', 'sample'];
        var cateCount = [0,0,0];
        var monthData = this.state.monthData;
        if(this.state.pass_one && this.state.pass_two) {
            //update 필요
            data[0] = monthData[0].month_count;
            data[1] = monthData[1].month_count;
            data[2] = monthData[2].month_count;
            data[3] = monthData[3].month_count;
            data[4] = monthData[4].month_count;
            data[5] = monthData[5].month_count;
            function returnCate(cate) {
                var category = cate;
                switch (category) {
                    case 2:
                        return "소설";
                    case 3:
                        return "시/에세이";
                    case 4:
                        return "경제/경영";
                    case 5:
                        return "자기계발";
                    case 6:
                        return "인문";
                    case 7:
                        return "역사/문화";
                    case 8:
                        return "국어/외국어";
                    case 9:
                        return "가정/생활/요리";
                    case 10:
                        return "청소년";
                    case 11:
                        return "사회";
                    case 12:
                        return "여행/지도";
                    case 13:
                        return "과학/공학";
                    case 14:
                        return "예술/대중문화";
                    case 15:
                        return "컴퓨터/IT";
                    case 16:
                        return "종교";
                    case 17:
                        return "학습/참고서";
                    case 18:
                        return "취업/수험서";
                    case 19:
                        return "건강";
                    case 20:
                        return "취미/레저";
                    case 21:
                        return "사전";
                    case 22:
                        return "만화";
                    case 23:
                        return "잡지";
                    case 24:
                        return "해외도서";
                    case 25:
                        return "유아";
                    case 26:
                        return "어린이";
                    default:
                        return "미정";
                }
            }
            category[0] = returnCate(catedata[0].category);
            cateCount[0] = catedata[0].ca_count;
            category[1] = returnCate(catedata[1].category);
            cateCount[1] = catedata[1].ca_count;
            category[2] = returnCate(catedata[2].category);
            cateCount[2] = catedata[2].ca_count;
        }
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
                            <Text style = {styles.yellowtext}>{this.state.name}</Text>
                            <Text style = {styles.whitetext}> 님의 기록</Text>
                        </View>
                        
                    </View>

                    <View style = {styles.graphcontainer}>
                        <View style = {styles.graphbox}>
                            <LineChart style={{width:'95%', height:180}} xLabels={labels} config={config} data={data} />
                        </View>
                    </View>

                    <View style = {styles.greencontainer}>
                        <View style = {styles.inbox}>
                            <View style = {{paddingLeft:10,}}/>
                            <Text style = {styles.yellowtext}>{this.state.name}</Text>
                            <Text style = {styles.whitetext}> 님의 선호분야</Text>
                        </View>
                        
                    </View>

                    <View style = {styles.boxcontainer}>
                        <View style = {styles.inbox2}>
                            <View style = {styles.icons}>
                                <IonIcon name = "ios-paper" size={40} color='#52C8B2' />
                            </View>
                            <View style = {styles.rightbox}>
                                <Text style = {styles.greytext}>{category[0]}</Text>
                                <View style = {styles.textbox}><Text style = {styles.greentext}>{cateCount[0]}권</Text></View>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.boxcontainer}>
                        <View style = {styles.inbox2}>
                            <View style = {styles.icons}>
                                <IonIcon name = "ios-map" size={40} color='#52C8B2' />
                            </View>
                            <View style = {styles.rightbox}>
                                <Text style = {styles.greytext}>{category[1]}</Text>
                                <View style = {styles.textbox}><Text style = {styles.greentext}>{cateCount[1]}권</Text></View>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.boxcontainer}>
                        <View style = {styles.inbox2}>
                            <View style = {styles.icons}>
                                <IonIcon name = "ios-flask" size={40} color='#52C8B2' />
                            </View>
                            <View style = {styles.rightbox}>
                                <Text style = {styles.greytext}>{category[2]}</Text>
                                <View style = {styles.textbox}><Text style = {styles.greentext}>{cateCount[2]}권</Text></View>
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
        justifyContent: 'center',
        alignItems: 'center',
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