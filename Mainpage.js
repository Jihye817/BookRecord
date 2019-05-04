import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Animated, TouchableOpacity, TouchableWithoutFeedback, AppRegistry} from 'react-native';
import {DrawerActions, createMaterialTopTabNavigator} from 'react-navigation';
import {Header} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';
import cstyle from './Styles';

export default class Mainpage extends React.Component{
  state = {
    animation: new Animated.Value(0)
  }
  toggleOpen = () => {
    const toValue = this._open ? 0 : 1;

    Animated.timing(this.state.animation, {
      toValue,
      duration: 200
    }).start();

    this._open = !this._open;
  }
    render() {

        const bgStyle = {
          transform: [{
            scale: this.state.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 30]
            })
          }]
        }

        const reloadStyle = {
          transform: [{
            scale: this.state.animation
          },{
            translateY: this.state.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -70]
            })
          }]
        }

        const orderStyle = {
          transform: [{
            scale: this.state.animation
          },{
            translateY: this.state.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -140]
            })
          }]
        }
        
        const lablePositionInterpolate = this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80]
        });

        const opacityInterpolate = this.state.animation.interpolate({
          inputRange: [0, .8, 1],
          outputRange: [0, 0, 1]
        });

        const lableStyle = {
          opacity: opacityInterpolate,
          transform: [{
            translateX: lablePositionInterpolate
          }]
        }

        return (
          <View style={cstyle.whitecontianer}>
          <Header
            statusBarProps={{ barStyle: 'light-content'}}
            leftComponent={{icon:'menu', color:'#FFF', onPress: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}
            centerComponent={{text: 'Mainpage', style:{color:'#FFF'}}}
            containerStyle={{backgroundColor:'#52C8BE', height:45, paddingTop:0}}
            />
            <Animated.View style = {[styles.background, bgStyle]}/>
            <TouchableWithoutFeedback>
              <Animated.View style={[styles.btn, styles.other, orderStyle]}>
                <Animated.Text style={[styles.lable, lableStyle]}>ISBN</Animated.Text>
                <IonIcon name='ios-search' size={30} color='#555' />
              </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Animated.View style={[styles.btn, styles.other, reloadStyle]}>
                <Animated.Text style={[styles.lable, lableStyle]}>바코드</Animated.Text>
                <IonIcon name='ios-barcode' size={30} color='#555' />
              </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.toggleOpen}>
              <View style={[styles.btn, styles.plus]}>
                <Text style={styles.btntext}>+</Text>
              </View>
            </TouchableWithoutFeedback>
            </View>
        );
      }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#AAA',
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    borderRadius: 30
  },
  btn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOpacity: .1,
    shadowOffset:{x:2, y:0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  plus: {
    backgroundColor: '#52C8B2'
  },
  other: {
    backgroundColor: '#FFFFFF',
  },
  btntext: {
    color: '#FFFFFF',
    fontSize: 30
  },
  lable: {
    color: '#FFF',
    position: 'absolute',
    fontSize: 14,
    backgroundColor: 'transparent'
  }
});

AppRegistry.registerComponent("animations", () => animations);