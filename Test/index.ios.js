
import React, {Component, PropTypes} from 'react';
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
    AppState,
    StyleSheet,
    Button,
    ScrollView,
    Dimensions,
    PixelRatio

} from 'react-native';
// import FirstPageComponent from './FirstPageComponent';
import ToggleAnimatingActivityIndicator from './package/hud';
// //
import DatePickerIOSExample from './package/DatePickerIOSExample';
// import ImageExample from './package/ImageExample';
// // import ListViewExample from './package/ListViewExample';
import NavigatorIOSExample from './package/NavigatorIOSExample';
import TouchableExample from './package/TouchableExample';
import TabbarIOSExample from './package/TabbarIOSExample';
import Search from './package/TextInputExample';
import BaseStorageExample from './package/BaseStorageExample';
import AlertExample from './package/AlertExample';
import ActionSheetIOSExample from './package/ActionSheetIOSExample';
import RequestExample from './package/RequestExample';
import GeolocationExample from './package/GeolocationExample';
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

class CellView extends Component {

    static propTypes = {
        detailText: PropTypes.string.isRequired,
        route: PropTypes.object.isRequired,

    }

    render() {
        return (
            <TouchableHighlight onPress = {()=>{this._goToAlert(this.props.route)}}>
                <View style={styles.cell}>
                    <Text style={styles.textLabel}>
                        {this.props.route.title}
                    </Text>
                    <Text style = {styles.detailTextLabel}>
                        {this.props.detailText}
                    </Text>
                </View>
            </TouchableHighlight>


        );
    }

    _goToAlert(route) {
        route.navigator.push(route)
    }
}

class HomeView extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <CellView

                    detailText='show AlertExample'
                    route={{component: AlertExample,
                    navigator: this.props.navigator,
                    title: 'AlertExample'
                    }}
                />
                <CellView

                    detailText='show ActionSheet'
                    route={{component: ActionSheetIOSExample,
                    navigator: this.props.navigator,
                    title: 'ActionExample'}}
                />
                <CellView

                    detailText='show storage'
                    route={{component: BaseStorageExample,
                    navigator: this.props.navigator,
                    title: 'BaseStorageExample'}}
                />
                <CellView

                    detailText='show CameraRoll'
                    route={{component: CameraExample,
                    navigator: this.props.navigator,
                    title: 'CameraExample'}}
                />
                <CellView

                    detailText='show DatePicker'
                    route={{component: DatePickerIOSExample,
                    navigator: this.props.navigator,
                    title: 'DatePickerIOSExample'}}
                />
                <CellView

                    detailText='show location'
                    route={{component: GeolocationExample,
                    navigator: this.props.navigator,
                    title: 'GeolocationExample'}}
                />
                <CellView

                    detailText='show hud'
                    route={{component: ToggleAnimatingActivityIndicator,
                    navigator: this.props.navigator,
                    title: 'hud'}}
                />
                {/* <CellView

                    detailText='show image'
                    route={{component: ImageExample,
                    navigator: this.props.navigator,
                    title: 'ImageExample'}}
                /> */}
                {/* <CellView
                    title='ListViewExample'
                    detailText='show tableView'
                    route={{component: ListViewExample,
                    navigator: this.props.navigator}}
                /> */}
                <CellView

                    detailText='show NavigatorIOS'
                    route={{component: NavigatorIOSExample,
                    navigator: this.props.navigator,
                    title: 'NavigatorIOSExample'}}
                />
                {/* <CellView

                    detailText='show request'
                    route={{component: RequestExample,
                    navigator: this.props.navigator,
                    title: 'RequestExample'}}
                /> */}
                <CellView

                    detailText='show tabbar'
                    route={{component: TabbarIOSExample,
                    navigator: this.props.navigator,
                    title: 'TabbarIOSExample'}}
                />
                <CellView

                    detailText='show textInput'
                    route={{component: Search,
                    navigator: this.props.navigator,
                    title: 'TextInputExample'}}
                />
                <CellView

                    detailText='show touchAble'
                    route={{component: TouchableExample,
                    navigator: this.props.navigator,
                    title: 'TouchableExample'}}
                />

            </ScrollView>
        );
    }


}


export default class SampleComponent extends Component {

    render() {
        let defaultTitle = '首页';
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle = 'light-content'>
                </StatusBar>
                <NavigatorIOS
                    style={{flex: 1}}
                    initialRoute={{
                        title: defaultTitle,
                        component: HomeView,

                        passProps: {

                        },

                    }}
                    titleTextColor= 'white'
                    barTintColor= '#00DCF3'
                    tintColor= '#008888'

                />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cell: {
        height: 44,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        borderBottomWidth: 1/PixelRatio.get(),
        borderColor: '#D6D6D6'

    },
    textLabel: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 3,
        // height: 20
    },
    detailTextLabel: {
        fontSize: 15,
        // height: 20,
        marginBottom: 3,
        textAlign: 'center',
    }

})

AppRegistry.registerComponent('Test', () => SampleComponent);
