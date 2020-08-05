import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('window')

const checkboxSize = (width + height) * 0.015;

export default function CustomInputfield(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const [color, setColor] = useState('rgba(0, 0, 0, 0)');

    const toggleSwitch = () => {
        let isBoxEnabled = !isEnabled
        setColor(isBoxEnabled ? '#6495ED' : 'rgba(0, 0, 0, 0)')
        setIsEnabled(isBoxEnabled);
        props.value(isBoxEnabled)
    }

    return (
        <View style={styles.main}>
            <Text style={styles.text}>{props.title}</Text>

            <TouchableWithoutFeedback onPress={toggleSwitch}>
                <View style={{ ...styles.checkBox, backgroundColor: color }} />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkBox: {
        width: checkboxSize,
        height: checkboxSize,
        borderWidth: 1
    },
    text: {
        fontSize: (width + height) * 0.015
    }
});