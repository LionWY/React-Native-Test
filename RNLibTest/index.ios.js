/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Navigation} from 'react-native-navigation';
import {registerScenes} from './src/Scene';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

registerScenes();


Navigation.startTabBasedApp({
    tabs:[
        {
            label: 'One',
            screen: 'Scene.FirstScene',
            icon: require('./img/1.png'),
            selectedIcon: require('./img/1-1.png'),
            title: 'Scene One',

        },
        {
            label: 'Two',
            screen: 'Scene.SecondScene',
            icon: require('./img/2.png'),
            selectedIcon: require('./img/2-1.png'),
            title: 'Scene Two'
        },
        // {
        //     label: 'Two',
        //     screen: 'Scene.SecondScene',
        //     icon: require('./img/3.png'),
        //     selectedIcon: require('./img/3-1.png'),
        //     title: 'Scene Two'
        // },
        {
            label: 'HN',
            screen: 'Scene.HN',
            icon: require('./img/4.png'),
            selectedIcon: require('./img/4-1.png'),
            // icon:()=> <Icon name='4.png' size={30} color='#333'/>,
            // selectedIcon: ()=> <Icon name='4.png' size={30} color='#d81e06'/>,
            title: '干活集中营'
        },

    ],
    tabsStyle: { // optional, add this if you want to style the tab bar beyond  the defaults
        // tabBarButtonColor: '#FF2600', // optional, change the color of the tab icons and text (also unselected)
        // tabBarSelectedButtonColor: '#FF2600', // optional, change the color of the selected tab icon and text (only selected)
        // tabBarBackgroundColor: '#800EE8' // optional, change the background color of the tab bar
    },
    drawer: { // optional, add this if you want a side menu drawer in your app
        left: { // optional, define if you want a drawer from the left
          screen: 'Scene.LeftScene' // unique ID registered with Navigation.registerScreen
        },
        right: { // optional, define if you want a drawer from the right
          screen: 'Scene.RightScene' // unique ID registered with Navigation.registerScreen
        },
        disableOpenGesture: true // optional, can the drawer be opened with a swipe instead of button
    },
})
//
// export default class RNLibTest extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//
// });
//
// AppRegistry.registerComponent('RNLibTest', () => RNLibTest);
