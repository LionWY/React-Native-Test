import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';


import ScrollableTabView from 'react-native-scrollable-tab-view';
import ImagePickerExample from './ImagePickerExample';
import CameraPicture from './CameraPicture';
// import DefaultTabBar from './DefaultTabBar';


export default class SecondScene extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigatorStyle = {

        navBarHidden: true,
        // tabBarHidden: true
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView>
                    <ImagePickerExample tabLabel='camera'/>
                    <CameraPicture tabLabel='third'/>

                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95DAC1'
    }
})
