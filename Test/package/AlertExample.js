import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    AlertIOS
} from 'react-native';

export default class AlertExample extends Component {

    state: any;
    customButtons: Array<Object>;

    constructor(props) {
        super(props);
        this.saveResponse = this.saveResponse.bind(this);
        this.customButtons = [{
                text: 'Custom OK',
                onPress: this.saveResponse
            },
            {
                text: 'Custom cancel',
                style: 'destructive',
            }
        ];
        this.state = {
            promptValue: undefined,
        };
    }

    render() {
        return(
            <View style={{marginTop: 64}}>
                <Text style={{marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold'}}>
                        Prompt value:
                    </Text>
                    {this.state.promptValue}
                </Text>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={()=>AlertIOS.alert('Type a value', '12312', this.customButtons)} >
                    <View style={styles.button}>
                        <Text>
                            prompt with title & callback
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={()=> AlertIOS.alert('Type a value', null, this.customButtons)} >
                    <View style={styles.button}>
                        <Text>
                            prompt with title & custom buttons
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={()=> AlertIOS.prompt('Type a value', 'userName', this.saveResponse, 'secure-text')} >
                    <View style={styles.button}>
                        <Text>
                            prompt with title, callback & default value
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={()=> AlertIOS.prompt(
                        'Input your password',
                        '12312',
                        this.customButtons,
                        'login-password',
                        'admin@site.com')} >
                    <View style={styles.button}>
                        <Text>
                            prompt with title, customButtons, login/password & default value
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    saveResponse(promptValue) {
        this.setState({promptValue: JSON.stringify(promptValue)});
    }



}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    }
})
