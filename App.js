/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './Login';
import Mainpage from './Mainpage';
import Registerpage from './Register';
import Registerfinpage from './Registerfin';
import Found from './Found';

const Navigation = createStackNavigator({
  LoginScreen : {screen : Login,
    navigationOptions:{header : null},
  },
  MainScreen : {screen : Mainpage,
    navigationOptions:{title : 'MAIN'},
  },
  RegisterScreen : {screen : Registerpage,
    navigationOptions:{header : null},
  },
  RegisterfinScreen : {screen : Registerfinpage,
    navigationOptions:{header : null},
  },
  FoundScreen : {screen : Found,
    navigationOptions:{header : null},
  },
},{
  initialRouteName: 'LoginScreen'
});

const App = createAppContainer(Navigation);

export default App;