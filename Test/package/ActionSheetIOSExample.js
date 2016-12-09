import React, {Component} from 'react';
import {
    ActionSheetIOS,
    StyleSheet,
    Text,
    View,
    UIManager,
    PixelRatio
} from 'react-native';

var BUTTONS =[
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel'
];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class ActionSheetExample extends Component {
    state = {
        clicked: 'none',
    };

    render() {
        return (
            <View>
                <Text onPress={this.showActionSheet} style={styles.button}>
                    Click to show the ActionSheet
                </Text>
                <View style={{height: 1/PixelRatio.get(), backgroundColor: 'red'}}>
                </View>
                <Text>
                    Clicked button: {this.state.clicked}
                </Text>
                <View style={{height: 1, backgroundColor: 'red'}}>
                </View>
            </View>
        );
    }

    showActionSheet = ()=> {
        ActionSheetIOS.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            tintColor: 'green',
            title: 'action sheet',
            message: 'message'
        },

        (buttonIndex) => {
            this.setState({clicked: BUTTONS[buttonIndex]});
        });
    };
}

class ShereActionSheetExample extends Component {
    state = {
        text: ''
    };

    render() {
        return (
            <View>
                <Text onPress={this.showShareActionSheet} style={styles.button}>
                    Click to Screenshot and show the share ActionSheer
                </Text>
                <Text>
                    {
                        this.state.text
                    }
                </Text>
            </View>

        );
    }

    showShareActionSheet = ()=> {
        UIManager.takeSnapshot('window').then((uri)=> {
            ActionSheetIOS.showShareActionSheetWithOptions({
                url: uri,
                excludedActivityTypes: [
                    'com.baidu.www'
                ]
            },
            (error) => alert(error),
            (success, method) => {
                var text;

                if (success) {
                    text = `Shared via ${method}`;
                } else {
                    text = 'You didn\'t share';
                }
                this.setState({text});
            });
        }).catch((error) => alert(error));
    }

    // showActionSheet = ()=> {
    //     ActionSheetIOS.showShareActionSheetWithOptions({
    //         url: this.props.url,
    //         message: 'message to go with shared url',
    //         subject: 'a subject to go in the email heading',
    //         excludedActivityTypes: [
    //             'com.apple.UIKit.activity.PostToTwitter'
    //         ]
    //     },
    //     (error) => alert(error),
    //     (success, method) => {
    //         var text;
    //         if (success) {
    //             text = 'shared via ${method}';
    //         }
    //         else {
    //             text = 'You didn\'t share';
    //         }
    //         this.setState({text});
    //
    //     });
    // };
}


export default class ActionSheetIOSExample extends Component {

    render() {
        return(
            <View style={{marginTop: 64, flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                <ShereActionSheetExample/>

                <ActionSheetExample />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        fontWeight: '500'
    }
})
