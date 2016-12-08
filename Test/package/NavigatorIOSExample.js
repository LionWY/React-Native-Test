import React, {Component} from 'react';
import {
    AlertIOS,
    NavigatorIOS,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import SampleComponent from '../index.ios';

class EmptyPage extends Component {
    render () {
        return (
            <View style={styles.emptyPage}>
                <Text style={styles.emptyPageText}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

export default class NavigatorIOSExample extends Component {
    render () {

        var recurseTitle = 'Recurse Naviagtion';

        if (!this.props.depth || this.props.depth === 1) {
            recurseTitle += ' - more examples here';
        }

        return (
            <ScrollView style={styles.list}>
                <View style={styles.line}>
                </View>
                <View style={styles.group}>
                    {
                        this._renderRow(recurseTitle, ()=> {
                            this.props.navigator.push({
                                title: SampleComponent.title,
                                component: NavigatorIOSExample,
                                backButtonTitle: 'custom back',
                                passProps: {
                                    depth: this.props.depth ? this.props.depth + 1 : 2
                                }
                            });
                        })
                    }
                    {
                        this._renderRow('Custom right button', () => {
                            this.props.navigator.push({
                                titlt: SampleComponent.title,
                                component: EmptyPage,
                                titleImage: require('./img/icon1.png'),
                                rightButtonTitle: 'cancel',
                                onRightButtonPress: ()=>this.props.navigator.pop(),
                                passProps: {
                                    text: 'this page has a right button in the navigator bar'
                                }
                            });
                        })
                    }
                    {
                        this._renderRow('Custom right system button', () => {
                            this.props.navigator.push({
                                title: SampleComponent.title,
                                component: EmptyPage,
                                rightButtonSystemIcon: 'bookmarks',
                                onRightButtonPress: ()=>this.props.navigator.pop(),
                                passProps: {
                                    text: 'this page has a right system button in the navigator bar'
                                }
                            });
                        })
                    }
                    {
                        this._renderRow('Custom Left & right system Icon', ()=> {
                            this.props.navigator.push({
                                title: SampleComponent.title,
                                component: EmptyPage,
                                leftButtonSystemIcon: 'cancel',
                                onLeftButtonPress: ()=> this.props.navigator.pop(),
                                rightButtonSystemIcon: 'search',
                                onRightButtonPress: ()=> {
                                    AlertIOS.alert(
                                        'Bar Button Action',
                                        'Recognized a tap on the bar button icon',
                                        [
                                            {
                                                text: 'oK',
                                                onPress:()=> console.log('tapped OK'),
                                            },
                                            {
                                                text: 'cancel',
                                                onPress: ()=> console.log('tapped cancel'),
                                            }
                                        ]
                                    );
                                },
                                passProps: {
                                    text: 'this page has an icon for the right button in navigator bar'
                                }
                            });
                        })

                    }
                    {
                        this._renderRow('popN(2)', ()=>{
                            if (this.props.depth > 1) {
                                this.props.navigator.popN(2);
                            }
                            else {
                                alert('depth<=1')
                            }

                        })
                    }
                    {
                        this._renderRow('pop to top', ()=> {
                            this.props.navigator.popToTop();
                        })
                    }
                    {this._renderReplace()}
                    {this._renderReplacePrevious()}
                    {this._renderReplacePreviousAndPop()}
                    {this._renderRow('exit navigator', this.props.onExampleExit)}
                </View>
                <View style={styles.line}>
                </View>
            </ScrollView>

        );

    }

    _renderReplace = ()=>{
        if (!this.props.depth) {
            return null;
        }

        return this._renderRow('replace here', ()=>{
            var preRoute = this.props.route;
            this.props.navigator.replace({
                title: 'New navigator',
                component: EmptyPage,
                rightButtonTitle: 'Undo',
                onRightButtonPress: ()=> this.props.navigator.replace(preRoute),
                passProps: {
                    text: 'the component is replaceed,'
                }
            });
        });
    }
    _renderReplacePrevious = ()=> {
        if (!this.props.depth || this.props.depth < 2) {
            return null;
        }
        return this._renderRow('replace previous', ()=> {
            this.props.navigator.replacePrevious({
                title: 'replaced',
                component: EmptyPage,
                passProps: {
                    text: 'this is a replaced previous page',
                },
                wrapperStyle: styles.customWrapperStyle,
            });
        });
    }
    _renderReplacePreviousAndPop = ()=> {
        if (!this.props.depth || this.props.depth < 2) {
            return null;
        }
        return this._renderRow('replace previous and pop', ()=> {
            this.props.navigator.replacePreviousAndPop({
                title: 'replace and pop',
                component: EmptyPage,
                passProps: {
                    text: 'this is a replaced previous page',
                },
                wrapperStyle: styles.customWrapperStyle,
            });
        });
    }
    _renderRow = (title: string, onPress: Function) => {
        return (
            <View>
                <TouchableHighlight onPress={onPress}>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>
                            {title}
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.separator}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    emptyPage: {
        flex: 1,
        paddingTop: 64,
    },
    emptyPageText: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    },
    list: {
        backgroundColor: '#eeeeee',
        marginTop: 10,
    },
    line: {
        backgroundColor: '#bbbbbb',
        height: StyleSheet.hairlineWidth
    },
    group: {
        backgroundColor: 'white'
    },
    customWrapperStyle: {
        backgroundColor: '#bbdddd'
    },
    row: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    rowText: {
        fontSize: 17,
        fontWeight: '500'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#bbbbbb',
        marginLeft: 15,
    }

});
