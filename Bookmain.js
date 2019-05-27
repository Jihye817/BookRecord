import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import cstyle from './Styles';
import Pie from 'react-native-pie';

import { withNavigationFocus } from 'react-navigation';

var SQLite = require('react-native-sqlite-storage')
//var db = SQLite.openDatabase({name: 'bookDB.db', createFromLocation: '..\android\app\src\main\assets\www\bookDB.db'}, this.openCB, this.errorCB)

class Bookmain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            booknum: 0,
            bookpercent: 0,
            apiData: [],
            pass: 0,
        };
    }

    componentDidMount() {
        var db = SQLite.openDatabase({ name: 'bookDB.db', createFromLocation: 1 }, this.openCB, this.errorCB);
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM readingoal', [], (tx, results) => {
                var len = results.rows.length;
                if (len == 0) { console.log("LENIS0") }
                //else
                //{console.log("ITISNOT0")}
                //for (let i = 0; i < len; i++) {
                //    let row = results.rows.item(i);
                //    console.log(`Book num: ${row.books}`);
                //}
                let row = results.rows.item(0);
                console.log(`Book num: ${row.books}`);
                this.setState({ booknum: row.books });
                let per = (1 / row.books) * 100;
                per = per.toFixed(0);
                this.setState({ bookpercent: per });
            });
        });
        fetch('http://220.149.242.12:10001/oneBook/', {
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            //console.log(jsonData);
            this.setState({ apiData: jsonData })
            this.setState({ pass: 1 })
            console.log(this.state.apiData)
        }).done();
    }
    errorCB(err) {
        console.log("SQL Error: " + err);
    }
    successCB() {
        console.log("SQL executed fine");
    }
    openCB() {
        console.log("Database OPENED");
    }
    componentDidUpdate(previousProps) {
        if (!previousProps.isFocused && this.props.isFocused) {
            this.componentDidMount()
        }
    }

    render() {
        var data = this.state.apiData;
        console.log("first data");
        console.log(data);
        console.log("second data");
        //console.log(Array.isArray(data[0]));
        console.log(data[0]);
        if (this.state.pass) {
            console.log("image : " + data[0].img_src);
            image = data[0].img_src;
            title = data[0].book_name;
            author = data[0].author;
            publisher = data[0].publisher;
            pubdate = data[0].public_date;
            real_pubdate = pubdate.substring(0,10);
        }
        else {
            var image = "https://bookthumb-phinf.pstatic.net/cover/113/466/11346623.jpg?type=m5";
            var title = '';
            var author = '';
            var publisher = '';
            var pubdate = '';
            var real_pubdate = '';
        }
        return (
            <View style={cstyle.whitecontainer}>
                <View style={cstyle.middlecontainer} />
                <View style={styles.firstcontainer}>
                    <View style={styles.greybox}>
                        <Text style={styles.greytext}>3월</Text>
                    </View>
                    <View style={styles.greencon}>
                        <View style={styles.greenbox}>
                            <View style={styles.greenboxin}>
                                <View style={styles.smallbox}>
                                    <Text style={styles.smalltext}>읽은 책</Text>
                                    <View style={styles.pieview}>
                                        <Pie radius={40} innerRadius={35} series={[0]} colors={['#FFD966']} backgroundColor='#FFF' />
                                        <View style={styles.pietextview}>
                                            <Text style={styles.pietext}>1권</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.smallbox}>
                                    <Text style={styles.smalltext}>달성량</Text>
                                    <View style={styles.pieview}>
                                        <Pie radius={40} innerRadius={35} series={[this.state.bookpercent]} colors={['#FFD966']} backgroundColor='#FFF' />
                                        <View style={styles.pietextview}>
                                            <Text style={styles.pietext}>{this.state.bookpercent}%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.smallbox}>
                                    <Text style={styles.smalltext}>목표량</Text>
                                    <View style={styles.pieview}>
                                        <Pie radius={40} innerRadius={35} series={[0]} colors={['#FFD966']} backgroundColor='#FFF' />
                                        <View style={styles.pietextview}>
                                            <Text style={styles.pietext}>{this.state.booknum}권</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={cstyle.middlecontainer} />

                <View style={styles.secondcontainer}>
                    <View style={styles.topbox}>
                        <View style={styles.leftbox}>
                            <Text style={styles.leftgreytext}>하루한권 추천도서</Text>
                        </View>
                        <TouchableOpacity style={styles.rightbox}>
                            <Text style={styles.greentext}>추천도서 더보기 ▶</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lowbox}>
                        <View style={styles.imagebox}>
                            <Image style={styles.image} source={{ uri: image }}></Image>
                        </View>
                        <View style={styles.infobox}>
                            <Text style={styles.title}>{title}</Text>
                            <View style={styles.infotexts}>
                                <Text>{author}</Text>
                                <Text> | </Text>
                                <Text>{publisher}</Text>
                            </View>
                            <Text style={styles.date}>{real_pubdate}</Text>
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

export default withNavigationFocus(Bookmain)

const styles = StyleSheet.create({
    firstcontainer: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greybox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        flex: 1,
    },
    greytext: {
        paddingVertical: 5,
        paddingHorizontal: 60,
        fontSize: 20,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    greencon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        flex: 6,
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
        justifyContent: 'space-around',
    },
    smallbox: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smalltext: {
        color: '#FFF',
        fontSize: 18,
        paddingBottom: 15,
    },
    pieview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pietextview: {
        position: 'absolute',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pietext: {
        color: '#FFF',
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
        justifyContent: 'space-between',
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
        width: '100%',
        fontSize: 20,
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
        width: '90%',
        flexDirection: 'row',
    },
    imagebox: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '60%',
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
        fontSize: 20,
        paddingBottom: 10,
    },
    date: {
        paddingBottom: 10,
    },
})