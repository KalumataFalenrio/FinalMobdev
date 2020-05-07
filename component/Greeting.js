import React from 'react';
import { View, Text, Image} from 'react-native';

const Greeting = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>Global</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2},
        // shadowOpacity: 0,
        // elevation: 2,
        // position: 'relative'
    },
    textStyle: {
        fontSize: 40,
        fontWeight: 'bold'
    }
}
export default Greeting;