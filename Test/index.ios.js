
import React, {Component} from 'react';
import {
    AppRegistry,
    AsyncStorage,
    View,
    Navigator,
    StatusBar,
    TouchableHighlight,
    Text,
    NavigationBar,
    NavigatorIOS,
    AppState

} from 'react-native';
// import FirstPageComponent from './FirstPageComponent';
// import ToggleAnimatingActivityIndicator from './package/hud';
//
// import DatePickerIOSExample from './package/DatePickerIOSExample';
// import ImageExample from './package/ImageExample';
// // import ListViewExample from './package/ListViewExample';
// import NavigatorIOSExample from './package/NavigatorIOSExample';
//
// import TouchableExample from './package/TouchableExample';
// import TabbarIOSExample from './package/TabbarIOSExample'
// import Search from './package/TextInputExample';
// import BaseStorageExample from './package/BaseStorageExample';
// import AlertExample from './package/AlertExample';
// import ActionSheetIOSExample from './package/ActionSheetIOSExample';
// import RequestExample from './package/RequestExample';
// import GeolocationExample from './package/GeolocationExample';
import CameraExample from './package/CameraExample';

// let UID123_object = {
//     name: 'Charis',
//     age: 30,
//     traits: {hair: 'brown', eye: 'brown'},
// };
//
// let UID123_delta = {
//     age: 31,
//     traits: {eye: 'blue', shoe_size: 10}
// };
//
// AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), ()=>{
//     AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), ()=>{
//         AsyncStorage.getItem('UID123', (err, result)=> {
//             console.log(result);
//             console.log(AppState.currentState);
//         });
//     });
// });



export default class SampleComponent extends Component {

    static title = 'NavigatorIOS';
    static description = 'iOS navigation capabilities';
    static external = true;
    render() {
        // let defaultTitle = '首页';
        // let defaultComponent = ImageExample;
        const {onExampleExit} = this.props;
        return (
            <NavigatorIOS
                style= {{flex: 1}}
                initialRoute={{
                    title: SampleComponent.title,
                    component: CameraExample,
                    passProps: {onExampleExit},
                    interactivePopGestureEnabled: false,
                    tintColor: "#008888"
                }}


            />
    // render() {
    //
    //     const {onExampleExit} = this.props;
    //     return (
    //         // <View style={{flex:1}}>
    //         //     <StatusBar
    //         //         hidden={true}
    //         //     />
    //
    //             <Navigator
    //                 style ={{flex: 1}}
    //                 initialRoute={{
    //                     title: "首页",
    //                     component: NavigatorIOSExample,
    //                     params: {onExampleExit}
    //                 }}
    //                 configureScene = {(route) => {
    //                     return Navigator.SceneConfigs.VerticalDownSwipeJump;
    //                 }}
    //
    //                 renderScene={(route, navigator) => {
    //                     let Component = route.component;
    //                     return <Component {...route.params} navigator={navigator} />
    //                 }}
    //             />
            // </View>

                // {/* <Navigator
                //     initialRoute={routes[0]}
                //     initialRouteStack={routes}
                //     renderScene={(route, navigator) => {
                //         <TouchableHighlight onPress={() => {
                //             if (route.index == 0) {
                //                 navigator.push([routes[1]]);
                //             }
                //             else {
                //                 navigator.pop();
                //             }
                //             }}>
                //             <Text>
                //                 Hello {route.title} !
                //             </Text>
                //
                //         </TouchableHighlight>
                //     }}
                //
                //     style={{padding: 100}}
                //
                //     navigationBar = {
                //         <Navigator.navigationBar
                //
                //             routeMapper = {{
                //                 LeftButton: (route, navigator, index, navState) => {
                //                     return (<Text>Cancel</Text>);
                //                 },
                //             }}
                //
                //         />
                //     }
                //
                //
                // /> */}





        );
    }
}


AppRegistry.registerComponent('Test', () => SampleComponent);

/***

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
const BoxStyles = StyleSheet.create({

    container: {
        height: 300,
        top: 100,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'blue',
    },

    label: {
        backgroundColor: 'orange',
        width: 55,
        top: 0,
        left: 0,
    },
    text: {
        color: 'white',

    },

    height50: {
        height: 50
    },




});

class BoxContainer extends Component {
    render() {
        return(

            <View style={BoxStyles.container}>

                <Text style={[BoxStyles.text, BoxStyles.label]}>
                    margin
                </Text>

                <View style={{backgroundColor: 'red', flex: 1, margin: 20, padding: 30}}>
                    <Text style={[BoxStyles.text, BoxStyles.label]}>
                        border
                    </Text>
                    <View style={{backgroundColor: 'black', flex: 1}}>
                        <Text style={[BoxStyles.text, BoxStyles.label]}>
                            padding
                        </Text>
                        <View style={{left: 50, top: 50, width: 50, height: 50, backgroundColor: 'yellow'}}>
                            <Text style={[BoxStyles.text, BoxStyles.label]}>
                                element
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}


AppRegistry.registerComponent('Test', ()=> BoxContainer);

**/
