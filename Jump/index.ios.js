import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {NativeModules} from 'react-native';

var Native = NativeModules.NativeVC;

class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={()=>{
            Native.goToNextVCWith('我是从js传过来的', (error, result) => {
                console.log('回调结果是=========' + result);
            });
        }}>
            再跳转回Native
        </Text>
        <Text style={styles.text}>
            收到的参数为：{this.props.paramsString}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E03232',
    },
    text: {
        color: 'cyan',
        marginTop: 20
    }

});

// 整体js模块的名称
AppRegistry.registerComponent('Jump', () => App);
