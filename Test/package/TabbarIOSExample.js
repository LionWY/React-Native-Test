import React, {Component} from 'react';
import {
    TabBarIOS,
    View,
    Text,
    StyleSheet
} from 'react-native';


export default class TabbarIOSExample extends Component {

    static title = 'TabBarIOS';
    static description = 'Tab-based navigation';
    static displayName = 'TabBarExample';

    state = {
        selectedIndex: 1,
        notifiCount: 0,
        presses: 0
    };

    _renderContent = (color: string, pageText: string, num ?: number) => {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>
                    {pageText}
                </Text>
                <Text style = {styles.tabText}>
                    {num} re-renders of the {pageText}
                </Text>
            </View>
        );
    }
    render() {
        return (
            <TabBarIOS unselctedTintColor='red' tintColor='white' barTintColor = 'black'>
                <TabBarIOS.Item
                    title='Blue Tab'
                    renderAsOriginal
                    icon={require('./img/icon1.png')}
                    selected={this.state.selectedIndex === 0} onPress={()=> {
                        if (this.state.selectedIndex === 0) {
                            return null;
                        }
                        this.setState({
                            selectedIndex: 0
                        });
                }}>
                    {this._renderContent('#414A8C', 'Blue Tab')}

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon='history'
                    badge={this.state.notifiCount > 0 ? this.state.notifiCount : undefined}
                    selected={this.state.selectedIndex === 1}
                    onPress= {()=>{
                        if (this.state.selectedIndex === 1) {
                            return null;
                        }
                        this.setState({
                            notifiCount: this.state.notifiCount + 1,
                            selectedIndex: 1,
                        });
                    }} >
                    {this._renderContent('#783E33', 'Red Tab',this.state.notifiCount)}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('./img/icon2.png')}
                    selectedIcon={require('./img/icon3.png')}
                    renderAsOriginal
                    title='More'
                    selected={this.state.selectedIndex === 2}
                    onPress={()=>{
                        if (this.state.selectedIndex === 2) {
                            return null;
                        }
                        this.setState({
                            presses: this.state.presses + 1,
                            selectedIndex: 2
                        });
                    }} >
                    {this._renderContent('#21551C', 'GreenTab', this.state.presses)}
                </TabBarIOS.Item>


            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center'
    },
    tabText: {
        color: 'white',
        margin: 50
    }
})
