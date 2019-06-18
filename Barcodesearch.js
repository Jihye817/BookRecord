import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker } from 'react-native';
import cstyle from './Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { RNcamera, RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal';
import SwitchButton from 'switch-button-react-native';


export default class Barcodesearch extends React.Component {
    constructor(props) {
        super(props);
        this.camera = null;
        this.barcodeCodes = [];

        this.state = {
            camera: {
                type: RNCamera.Constants.Type.back,
                barcodeFinderVisible: true
            },
            isPopVisible: false,
            isbn: null,
            name: 'Ashely'
        };
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
        this.togglePopoff = this.togglePopoff.bind(this);
        this.saveBook = this.saveBook.bind(this);
    }

    togglePop = () => {
        //this.setState({ isPopVisible : !this.state.isPopVisible});
        this.setState({ isPopVisible: true });
        if (this.ISBN == null) {
            this.setState({ isPopVisible: false });
            alert("바코드를 다시 확인해주세요");
            //return 0;
        }
        else {
            fetch('http://220.149.242.12:10001/search/book/' + (this.state.isbn), {
                method: 'GET'
            }).then((responseData) => {
                return responseData.json();
            }).then((jsonData) => {
                //console.log(jsonData);
                this.setState({ apiData: jsonData })
                //console.log(this.state.apiData)
            }).done();
            //this.ISBN = null;
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
        };
    }

    saveBook() {
        this.setState({ isPopVisible: false });
        fetch('http://220.149.242.12:10001/saveBook', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_name: this.state.name, ISBN: this.state.isbn })
        }).then((responseData) => {
            return responseData.text();
        }).then((jsonData) => {
            this.setState({ naData: jsonData })
            console.log(this.state.naData)
        }).done();
        //this.state.name = null;
        //this.state.isbn = null;
        //this.state.val = 1;
    }

    togglePopoff() {
        console.log("working function");
        this.setState({ isPopVisible: false });
    }

    onBarCodeRead(scanResult) {
        console.warn(scanResult.type);
        console.warn(scanResult.data);
        if (scanResult.data != null) {
            if (!this.barcodeCodes.includes(scanResult.data)) {
                this.barcodeCodes.push(scanResult.data);
                this.setState({ isbn: scanResult.data });
                console.warn('onBarCodeRead call');
            }
        }
        return;
    }

    async takePicture() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    }

    render() {
        const data = this.state.apiData;
        var dataDisplay = null;
        if (data && data.items) {
            dataDisplay = data.items.map(item => {
                //var image = "'" + item.image + "'";
                var image = item.image;
                console.log(image);
                return (
                    <View style={styles.popfirst}>
                        <View style={styles.popsecond}>
                            <View style={styles.popthird}>
                                <View style={{ paddingTop: 30, }}>
                                    <Text style={{ color: '#52C8B2', fontSize: 20, }}>도서 정보 확인</Text>
                                </View>
                                <View style={{ paddingTop: 10, }}>
                                    <Image style={{ height: 250, width: 150,  resizeMode: 'contain', }}
                                        source={{ uri: image }}>
                                    </Image>
                                </View>
                                <View style={{ paddingTop: 6, }}>
                                    <Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 18, }}>{item.title}</Text>
                                </View>
                                <View style={{ paddingTop: 10, }}>
                                    <Text style={{ color: '#D7D7D7' }}>{item.author} | {item.publisher} | {item.pubdate}</Text>
                                </View>
                                <View style={styles.popbtn}>
                                    <View style={{ width: 10, }}></View>
                                    <View style={styles.popbtnleft}>
                                        
                                    </View>
                                </View>
                                <View style={styles.popbtnbig}>
                                    <TouchableOpacity style={styles.bigbtn} onPress={()=>this.togglePopoff()}><Text style={{ fontSize: 16, color: '#FFF' }}>취소</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.bigbtn} onPress={()=>this.saveBook()}><Text style={{ fontSize: 16, color: '#FFF' }}>등록하기</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            });
        };

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    barcodeFinderVisible={this.state.camera.barcodeFinderVisible}
                    //barcodeFinderWidth={280}
                    //barcodeFinderHeight={220}
                    //barcodeFinderBorderColor="white"
                    //barcodeFinderBorderWidth={2}
                    defaultTouchToFocus
                    flashMode={this.state.camera.flashMode}
                    mirrorImage={false}
                    onBarCodeRead={this.onBarCodeRead.bind(this)}
                    onFocusChanged={() => { }}
                    onZoomChanged={() => { }}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    style={styles.preview}
                    type={this.state.camera.type}
                />
                <View style={[styles.overlay, styles.topOverlay]}>
                    <Text style={{ color: '#FFF', fontSize: 20 }}>바코드를 인식시켜 주세요</Text>
                </View>
                <View style={[styles.overlay, styles.bottomOverlay]}>
                    <TouchableOpacity style={styles.greenbtn}><Text style={{ color: '#FFF', fontSize: 20 }}>등록 취소</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.greenbtn} onPress={this.togglePop} ><Text style={{ color: '#FFF', fontSize: 20 }}>스캔하기</Text></TouchableOpacity>
                </View>
                <Modal isVisible={this.state.isPopVisible}>
                    {dataDisplay}
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        padding: 70,
        right: 0,
        left: 0,
        alignItems: 'center'
    },
    topOverlay: {
        top: 0,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomOverlay: {
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
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
    searchbtn: {
        backgroundColor: '#52C8B2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    greenbtn: {
        backgroundColor: '#52C8B2',
        width: '40%',
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

// <SwitchButton
//                                             onValueChange={(val) => this.setState({activeSwitch: val})}
//                                             text1 = '읽는 중'
//                                             text2 = '완독'
//                                             switchWidth = {120}
//                                             switchHeight = {30}
//                                             switchdirection = 'ltr'
//                                             switchBorderRadius = {0}
//                                             switchSpeedChange = {500}
//                                             switchBorderColor = '#52C8B2'
//                                             switchBackgroundColor = '#F2F2F2'
//                                             btnBorderColor = '#52C8B2'
//                                             btnBackgroundColor = '#52C8B2'
//                                             fontcolor = '#333'
//                                             activeFontColor = '#FFF'
//                                         />