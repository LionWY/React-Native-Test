import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Alert,
    TouchableOpacity
} from 'react-native';

export default class TouchableExample extends Component {
    show(text) {
        alert(text);
    }
    render() {
        return (
            <View style={styles.flex}>
                <View>
                    <TouchableHighlight
                        onPress={this.show.bind(this, 'React Native123')}
                        underlayColor='#E1F6FF'>
                        <Text style={styles.item}>
                            React Native 123
                        </Text>

                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.show.bind(this, 'React Native123')}
                        underlayColor='#E1F6FF'>
                        <Text style={styles.item}>
                            React Native 123
                        </Text>

                    </TouchableHighlight>
                    <TouchableOpacity onPress={this.show.bind(this, 'React Native123')}>
                        <View style={styles.btn}>
                            <Text style={{fontSize: 25, color: '#fff'}}>
                                按钮
                            </Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 25,
        padding: 64
    },
    item: {
        fontSize: 18,
        marginLeft: 5,
        color: '#434343'
    },
    btn: {
        marginLeft: 30,
        marginTop: 30,
        width: 100,
        height: 100,
        backgroundColor: '#18B4FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})
