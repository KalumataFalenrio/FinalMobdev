import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>Data Covid-19 Global & Indonesia</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
    },
    textStyle: {
        fontSize: 23,
        fontWeight: 'bold'
    }
}
export default Header;