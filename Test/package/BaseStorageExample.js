import React, {Component} from 'react';
import {
    AsyncStorage,
    PickerIOS,
    Text,
    View
} from 'react-native';

var PickerItemIOS = PickerIOS.Item;

var STORAGE_KEY = '@AsyncStorageExampleKey';
var COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];

export default class BaseStorageExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: COLORS[0],
            messages: [],
        };
    }

    componentDidMount() {
        this._loadInitailState().done();
    }

    _loadInitailState = async() => {
        try {
            var value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null) {
                this.setState({selectedValue: value});
                this._appendMessage('Recovered selection from disk:' + value);
            }
            else {
                this._appendMessage('Initialized with no selection on disk.');
            }
        } catch (error) {
            this._appendMessage('AsyncStorage error: ' + error.message);

        } finally {

        }
    }

    render () {
        var color = this.state.selectedValue;
        return(
            <View>
                <PickerIOS
                    selectedValue={color}
                    onValueChange={this._onValueChange}
                    style={{backgroundColor: 'cyan', marginTop: 84}} >

                    {COLORS.map((value) => (
                        <PickerItemIOS
                            key={value}
                            value={value}
                            label={value}
                        />
                    ))}
                </PickerIOS>
                <Text>
                    {'Selcted: '}
                    <Text style={{color}}>
                        {this.state.selectedValue}
                    </Text>
                </Text>
                <Text>
                    {' '}
                </Text>
                <Text onPress={this._removeStorage}>
                    Press here to remove from storage.
                </Text>
                <Text>
                    {' '}
                </Text>
                <Text>
                    Messges:
                </Text>
                {/* 这里为什么要map(m,i)，实际是在按索引进行输出 */}
                {this.state.messages.map((m, i)=>
                    <Text key={i}>
                        {m}

                    </Text>)}
            </View>

        );
    }

    _onValueChange = async(selectedValue) => {
        this.setState({selectedValue});
        try {

            await AsyncStorage.setItem(STORAGE_KEY, selectedValue);
            this._appendMessage('Saved selection to disk: ' + selectedValue);
        } catch (e) {
            this._appendMessage('AsyncStorage error: ' + e.message);
        } finally {

        }
    }

    _removeStorage = async() => {
        try {
            await AsyncStorage.clear();
            await AsyncStorage.removeItem(STORAGE_KEY);
            this._appendMessage('selection removed from disk');
        } catch (e) {
            this._appendMessage('AsyncStorage error: ' + e.message);

        } finally {

        }
    }



    _appendMessage = (message) => {
        this.setState({messages: this.state.messages.concat(message)});
        console.log('====' + this.state.messages);
    }
}
