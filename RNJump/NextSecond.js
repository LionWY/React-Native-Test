import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text
} from 'react-native';
import {NativeModules} from 'react-native';

var native = NativeModules.NativeVC;

export default class NextSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#D733CC', justifyContent: 'center', alignItems: 'center'}}>
                <Text onPress={()=>{
                    alert('回来了');
                }}>
                    终于又回来了,带过来的参数是：{this.props.text}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('NextSecond', ()=> NextSecond);
