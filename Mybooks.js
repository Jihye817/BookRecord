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
            value2: 1,
            apiData : [],
            pass_one : 0,
            name : 'Ashely',
        }
    }

    onSelect(value, label) { //년도 select를 위한 함수
        this.setState({value : value})
    }
    onSelect2(value, label) { //분류 select를 위한 함수
        this.setState({value2 : value})
    }
    onChange(){
        if (value2 == 1) {
            fetch('http://220.149.242.12:10001/myreadBook/'+(this.state.name), {
                method: 'GET'
            }).then((responseData1) => {
                return responseData1.json();
            }).then((jsonData1) => {
                console.log("start myreadBook fetch");
                this.setState({ apiData: jsonData1})
                this.setState({ pass_one : 1})
                console.log(this.state.apiData)
            }).done();
        }
        else {
            fetch('http://220.149.242.12:10001/myreadBookKind/', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({user_name : this.state.name, value: this.state.value2})
            }).then((responseData1) => {
                return responseData1.json();
            }).then((jsonData1) => {
                console.log("start myreadBook fetch");
                this.setState({ apiData: jsonData1})
                this.setState({ pass_one : 1})
                console.log(this.state.apiData)
            }).done();
        } 
    }

    componentDidMount() {
        // 읽은 책 isbn fetch
            fetch('http://220.149.242.12:10001/myreadBook/'+(this.state.name), {
                method: 'GET'
            }).then((responseData1) => {
                return responseData1.json();
            }).then((jsonData1) => {
                console.log("start myreadBook fetch");
                this.setState({ apiData: jsonData1})
                this.setState({ pass_one : 1})
                console.log(this.state.apiData)
            }).done();
        //isbn으로 책 정보 가져오기
    }

    componentDidUpdate(previousProps) { //탭이 바뀌면 새로고침
        if (!previousProps.isFocused && this.props.isFocused) {
            this.componentDidMount()
        }
    }

    renderItem = ({item}) =>{ //flatlist에 list만들기 위한 renderItem
        return (
            <TouchableOpacity style = {styles.greybox2} onPress = {() => this.props.navigation.navigate('MybookinfoScreen',
                {
                    read_date1 : item.read_date.substring(5,7),
                    read_date2 : item.read_date.substring(8,10),
                    image : item.img_src,
                    title : item.book_name,
                    author : item.author,
                    publisher : item.publisher,
                    public_date : item.public_date.substring(0,10),
                    link_url : item.more_url 
                })}>
                        <View style = {styles.bookinfobox}>
                            <View style = {styles.infodate}>
                                <Text>{item.read_date.substring(5,7)} / {item.read_date.substring(8,10)}</Text>
                            </View>
                            
                            <View style = {styles.infoimage}>
                                <Image style = {styles.image} source={{uri : item.img_src}}></Image>
                            </View>
                            
                            <View style = {styles.infotext}>
                                <Text  ellipsizeMode='tail' numberOfLines={1} style = {styles.textitle}>{item.book_name}</Text>
                                <Text style = {styles.textinfos}>{item.author} | {item.publisher} | {item.public_date.substring(0,10)}</Text>
                            </View>
                        </View>
            </TouchableOpacity>
        )
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
                            <Option value = "1">전체</Option>
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

                        <TouchableOpacity style = {styles.greenbtn} onPress={()=>this.onChange()}>
                            <Text style = {{color:'#FFF'}}>검색</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.secondcontainer}>
                    <View style = {{width:'90%'}}>
                        <FlatList data={this.state.apiData} 
                            renderItem={this.renderItem}/>
                    </View>
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
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        width: '100%',
        flex:1,
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
        width:'15%',
    },
    infoimage: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'20%',
    },
    image: {
        width:65,
        height:90,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infotext: {
        justifyContent: 'center',
        width:'65%',
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