'use strict';
const React = require('react');
const ReactNative = require('react-native');
const {
    Alert,
    Button,
    View
} = ReactNative;

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
}

exports.displayName = 'BUttonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native Button component.';

exports.examples = [
    {
        title: 'Simple Button',
        description: 'The title and onPress handler are required. It is '+' recommended to set accessibilityLabel to help make your app usable by '+' everyone.',
        render() {
            return(
                <Button
                    onPress={onButtonPress}
                    title='Press me'
                    accessibilityLabel='See an informative alert'
                />
            );
        }
    },
    {
        
    }
]
