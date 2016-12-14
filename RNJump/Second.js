import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {NativeModules} from 'react-native';

var native = NativeModules.NativeVC;

export default class Second extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#45D733', justifyContent: 'center', alignItems: 'center'}}>
                <Text onPress={()=>{
                    native.goToNextWith('我是从js过来的');
                }}>
                    跳到Native
                </Text>
                <Text style={{margin: 30}}>
                    从Root传过来的参数为：{this.props.text}
                </Text>
            </View>
        );
    }
}
