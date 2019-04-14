/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Splash from './Splash';
import App from './App';
import {name as appName} from './app.json';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen: 'Splash'};
        setTimeout(()=> {
            this.setState({currentScreen:'Login'})
        }, 2000)
    }
    render(){
        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <App />
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Index);
