import React, {Component} from 'react';

export default class Mainpage extends Component{
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>
        );
      }
}