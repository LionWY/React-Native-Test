import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TabBarIOS
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/Ionicons';

import {Button, SocialIcon} from 'react-native-elements';


export default class IconExample extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedState: 'home'
        };
    }

    static navigatorStyle = {
        tabBarHidden: true
    }

    // const myIcon = (<Icon name='rocket' size ={30} color='#900'/>)
    //
    // const myButton = (
    //     <Icon.button name='facebook' backgroundColor='#3b5998' onPress={this.loginWithFacebook}>
    //         LoginWithFacebook
    //
    //     </Icon.button>
    //
    // )
    //
    // const customTextButton = (
    //     <Icon.button name='facebook' backgroundColor = '#3b5998'>
    //         <Text style={{fontFamily: 'Arial', fontSize: 15}}>
    //             Login with facebook
    //         </Text>
    //
    //     </Icon.button>
    // )
    render() {
        return (


            <View style={styles.container}>



                <Button
                  title='BUTTON'

               />

                <Button
                  raised
                  icon={{name: 'cached'}}
                  title='BUTTON WITH ICON' />

                <Button
                  large
                  iconRight
                  icon={{name: 'code'}}
                  title='LARGE WITH RIGHT ICON' />

                <SocialIcon
                    type='twitter'
                />
                <SocialIcon
                    title='Some Twitter Message'
                    button
                    type='twitter'
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#58134A',
        justifyContent: 'space-around',
        // alignItems: 'center',

    }
})
