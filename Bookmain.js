import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import cstyle from './Styles';
import Pie from 'react-native-pie';
//import console = require('console');

export default class Bookmain extends React.Component{

    constrcutor(props) {
        super(props);
        this.state = {
            apiData : []
        }
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

    oneBook = () => {
        fetch('http://220.149.242.12:10001/oneBook/', {
            method : 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData:jsonData})
            console.log(this.state.apiData)
        }).done();
    }
    
    render() {
        const data = this.state.apiData;
        var image = null;
        if(data && data.items) {
            image = "'" + items.image + "'";    
        }
        else {
            data.items.title = null;
            data.items.author = null;
            data.items.publisher = null;
            data.items.pubdate = null;
        }

        return(
            <View style = {cstyle.whitecontainer}>
                <View style = {cstyle.middlecontainer}/>
                <View style = {styles.firstcontainer}>
                    <View style = {styles.greybox}>
                        <Text style = {styles.greytext}>3월</Text>
                    </View>
                    <View style = {styles.greencon}>
                        <View style = {styles.greenbox}>
                            <View style = {styles.greenboxin}>
                                <View style = {styles.smallbox}>
                                    <Text style = {styles.smalltext}>읽은 책</Text>
                                    <View style = {styles.pieview}>
                                        <Pie radius={40} innerRadius={35} series={[0]} colors={['#FFD966']} backgroundColor='#FFF'/>
                                        <View style = {styles.pietextview}>
                                            <Text style = {styles.pietext}>6권</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style = {styles.smallbox}>
                                    <Text style = {styles.smalltext}>달성량</Text>
                                    <View style = {styles.pieview}>
                                        <Pie radius={40} innerRadius={35} series={[60]} colors={['#FFD966']} backgroundColor='#FFF'/>
                                        <View style = {styles.pietextview}>
                                            <Text style = {styles.pietext}>60%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style = {styles.smallbox}>
                                    <Text style = {styles.smalltext}>목표량</Text>
                                    <View style = {styles.pieview}>
                                        <Pie radius={40} innerRadius={35} series={[0]} colors={['#FFD966']} backgroundColor='#FFF'/>
                                        <View style = {styles.pietextview}>
                                            <Text style = {styles.pietext}>10권</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style = {cstyle.middlecontainer}/>

                <View style = {styles.secondcontainer}>
                    <View style = {styles.topbox}>
                        <View style = {styles.leftbox}>
                            <Text style = {styles.leftgreytext}>하루한권 추천도서</Text>
                        </View>
                        <TouchableOpacity style = {styles.rightbox}>
                            <Text style = {styles.greentext}>추천도서 더보기 ▶</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.lowbox}>
                        <View style = {styles.imagebox}>
                            <Image style = {styles.image} source={{ uri : }}></Image>
                        </View>
                        <View style = {styles.infobox}>
                            <Text style = {styles.title}>{data.items.title}</Text>
                            <View style = {styles.infotexts}>
                                <Text>{data.items.author}</Text>
                                <Text> | </Text>
                                <Text>{data.items.publisher}</Text>
                            </View>
                            <Text style = {styles.date}>{data.items.pubdate}</Text>
                            <TouchableOpacity>
                                <Text>+ 자세히보기</Text>
                            </TouchableOpacity>
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
    },
    greybox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        flex:1,
    },
    greytext: {
        paddingVertical: 5,
        paddingHorizontal: 60,
        fontSize:20,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    greencon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        flex:6,
    },
    greenbox: {
        backgroundColor: '#52C8B2',
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenboxin: {
        backgroundColor: '#52C8B2',
        borderWidth: 1.5,
        borderColor: '#FFF',
        width: '95%',
        height: '90%',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    smallbox: {
        width:'30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smalltext: {
        color: '#FFF',
        fontSize: 18,
        paddingBottom: 15,
    },
    pieview:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    pietextview:{
        position: 'absolute',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pietext: {
        color:'#FFF',
        fontSize: 18,
    },
    secondcontainer: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topbox: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    leftbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    leftgreytext: {
        paddingVertical: 5,
        width:'100%',
        fontSize:20,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    rightbox: {
        alignItems: 'center',
        textAlign: 'right'
    },
    greentext: {
        color: '#52C8B2',
    },
    lowbox: {
        flex: 5,
        width:'90%',
        flexDirection: 'row',
    },
    imagebox: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:'60%',
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infobox: {
        width: '55%',
        justifyContent: 'center',
    },
    infotexts: {
        flexDirection: 'row',
    },
    title: {
        fontSize : 20,
        paddingBottom: 10,
    },
    date: {
        paddingBottom: 10,
    },
})