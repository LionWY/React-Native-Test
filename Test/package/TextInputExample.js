import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TextInput
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            // value: 'default'
        };
    }
    getValue(text) {
        this.setState({
            show: true,
            value: text
        });
    }

    hide(value) {
        this.setState({
            show: false,
            value: value
        });
    }

    render() {
        return (
            <View style = {[styles.flex, {marginTop: 80}]}>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                    <View style={styles.flex}>
                        <TextInput
                            clearButtonMode='unless-editing'
                            autoCapitalize='characters'
                            style={styles.input}
                            returnKeyType="search"
                            placeholder="请输入关键字"
                            onEndEditing={this.hide.bind(this,this.state.value)}
                            value={this.state.value}
                            onChangeText={this.getValue.bind(this)}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={this.hide.bind(this, this.state.value)}>
                            搜索
                        </Text>

                    </View>
                </View>

                {this.state.show ?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this, this.state.value + '庄')}
                            style ={styles.item}
                            numberOfLines={1}>
                            {this.state.value}庄
                        </Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '园')}
                            style ={styles.item}
                            numberOfLines={1}>
                            {this.state.value}园
                        </Text>
                        <Text onPress={this.hide.bind(this, 80 + this.state.value + '综合商店')}
                            style ={styles.item}
                            numberOfLines={1}>
                            80{this.state.value}综合商店
                        </Text>

                    </View>
                    : null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexDirection: {
        flexDirection: 'row'
    },
    topStatus: {
        marginTop: 25
    },
    inputHeight: {
        height: 45
    },
    input: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },

    result: {
        marginTop: onePT,
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        borderColor: '#ccc',
        borderTopWidth: onePT

    },
    item: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: onePT,
        borderColor: '#ddd',
        borderTopWidth: 0
    }
})
