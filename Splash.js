import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Splash extends Component{
    constructor(props){
        super(props)
        this.state={timer:0}
        /*setInterval(() => {
            this.setState({timer: this.state.timer + 1})
        },1000)*/
    }
    render(){
        return (
                <View style={styles.container}>
                    <Text style={styles.logotext}>JAJUS</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#52C8BE',
        justifyContent:'center',
        alignItems:'center'
    },
    logotext:{
        color:'#ffffff',
        fontSize:40,
        fontWeight:'500'
    }
});