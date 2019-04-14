import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import cstyle from './Styles';

export default class Mainpage extends React.Component{
    render() {
        return (
          <View style = {cstyle.greencontainer}>
            <Text>Register page</Text>
          </View>
        );
      }
}