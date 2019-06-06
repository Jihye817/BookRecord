import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import {Select, Option} from 'react-native-chooser';
import cstyle from './Styles';
import {withNavigationFocus} from 'react-navigation';

class Mybooks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : '년도 ',
            value2: '전체',
            countData : [],
            apiData : [],
            pass_two : 0,
            name : 'Ashely',
        }
    }

    onSelect(value, label) { //년도 select를 위한 함수
        this.setState({value : value})
    }
    onSelect2(value, label) { //분류 select를 위한 함수
        this.setState({value : value})
    }
    componentDidMount() {
        //읽은 책 수 fetch
        fetch('http://220.149.242.12:10001/readBook/'+(this.state.name), {
            method: 'GET'
        }).then((responseData2) => {
            return responseData2.json();
        }).then((jsonData2) => {
            console.log("start mybooks fetch");
            this.setState({ countData: jsonData2})
            this.setState({ pass_two : 1})
            console.log(this.state.countData)
        }).done();
        // 읽은 책 제목들 fetch
        fetch('http://220.149.242.12:10001/myreadBook/'+(this.state.name), {
            method: 'GET'
        }).then((responseData1) => {
            return responseData1.json();
        }).then((jsonData1) => {
            console.log("start myreadBook fetch");
            this.setState({ apiData: jsonData1})
            this.setState({ pass_two : 1})
            console.log(this.state.apiData)
        }).done();
    }

    componentDidUpdate(previousProps) { //탭이 바뀌면 새로고침
        if (!previousProps.isFocused && this.props.isFocused) {
            this.componentDidMount()
        }
    }

    render() {
        var booklists = []; //읽은 책 list
        var count_data = this.state.apiData;

        /*if (this.state.pass_one && this.state.pass_two) {
            image = data[0].img_src;
            //temp = data[0].img_src;
            //image = "\'" + temp + "\'";
            title = data[0].book_name;
            author = data[0].author;
            publisher = data[0].publisher;
            pubdate = data[0].public_date;
            real_pubdate = pubdate.substring(0,10);
            link_url = data[0].more_url;
        }*/

        if(this.state.pass_two){
            bookread = count_data.length;
        }
        else{
            var bookread = 0;
        }

        for(let i=0; i<bookread; i++) //읽은 책 권 수 만큼 list에 출력
        {
            booklists.push(
                <TouchableOpacity key={i} style = {styles.greybox2} onPress = {() => this.props.navigation.navigate('MybookinfoScreen')}>
                        <View style = {styles.bookinfobox}>
                            <View style = {styles.infodate}>
                                <Text>3/22</Text>
                            </View>
                            
                            <View style = {styles.infoimage}>
                                <Image style = {styles.image} source={require('./images/for_i.jpg')}></Image>
                            </View>
                            
                            <View style = {styles.infotext}>
                                <Text style = {styles.textitle}>{bookread}</Text>
                                <Text style = {styles.textinfos}>김소연 | 아침달 시집 | 2018-09-10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
            )
        }
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
                            <Option value = "2">소설</Option>
                            <Option value = "3">시/에세이</Option>
                            <Option value = "4">경제/경영</Option>
                            <Option value = "5">자기계발</Option>
                            <Option value = "6">인문</Option>
                            <Option value = "7">역사/문화</Option>
                            <Option value = "8">국어/외국어</Option>
                            <Option value = "9">가정/생활/요리</Option>
                            <Option value = "10">청소년</Option>
                            <Option value = "11">사회</Option>
                            <Option value = "12">여행/지도</Option>
                            <Option value = "13">과학/공학</Option>
                            <Option value = "14">예술/대중문화</Option>
                            <Option value = "15">컴퓨터/IT</Option>
                            <Option value = "16">종교</Option>
                            <Option value = "17">학습/참고서</Option>
                            <Option value = "18">취업/수험서</Option>
                            <Option value = "19">건강</Option>
                            <Option value = "20">취미/레저</Option>
                            <Option value = "21">사전</Option>
                            <Option value = "22">만화</Option>
                            <Option value = "23">잡지</Option>
                            <Option value = "24">해외도서</Option>
                            <Option value = "25">유아</Option>
                            <Option value = "26">어린이</Option>
                        </Select>
                        </View>

                        <TouchableOpacity style = {styles.greenbtn}>
                            <Text style = {{color:'#FFF'}}>검색</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.secondcontainer}>
                    {booklists}
                </View>
            </View>
        );
    }
}

export default withNavigationFocus(Mybooks)

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
        width: '35%',
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

/*

                            <TouchableOpacity style = {styles.read}>
                                <Text style = {{color:'#FFF'}}>완독</Text>
                            </TouchableOpacity>

                                                    <View style = {styles.pickerstyle1}>
                        <Select onSelect3 = {this.onSelect3.bind(this)}
                            defaultText = {this.state.value3}
                            style = {styles.pickerstyle}
                            optionListStyle = {styles.pickeroptionstyle}>
                            <Option value = "읽는중">읽는중</Option>
                            <Option value = "완독">완독</Option>
                        </Select>
                        </View>
*/