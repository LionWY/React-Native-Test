/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS
} from 'react-native';

import Root from './Root';

export default class App extends Component {
  render() {
    return (
        // <View style={styles.container}>
        //     <View style={{height: 44, backgroundColor: 'red'}}>
        //     </View>
            // <Navigator
            //
            //     initialRoute={{
            //         component: Root,
            //         title: 'RN 首页',
            //         params: {
            //
            //         }
            //     }}
            //     style={{flex: 1}}
            //
            //     renderScene={(route, navigator)=>{
            //         let Component = route.component;
            //         return <Component {...route.params} navigator = {navigator} />
            //     }}
            //
            // />

            <NavigatorIOS

                initialRoute={{
                    component: Root,
                    title: 'RN 首页',


                }}
                barTintColor= 'cyan'
                style={{flex: 1}}

            />


        // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNJump', () => App);
