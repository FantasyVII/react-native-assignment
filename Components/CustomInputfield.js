import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function CustomInputfield(props) {
    const [originalErrorMessage] = useState(props.errorMessage);
    const [currentErrorMessage, SetErrorMessage] = useState(originalErrorMessage);

    useEffect(() => {
        const handleProps = () => {
            if (props.showErrorMessage) {
                SetErrorMessage(originalErrorMessage)
            } else {
                SetErrorMessage('')
            }
        };

        handleProps();
        return () => {
            handleProps();
        }
    }, [props.showErrorMessage]);

    return (
        <View style={props.style}>
            <TextInput
                style={styles.textInput}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                multiline={props.multiline}
            />
            <Text style={styles.errorText}>{currentErrorMessage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        fontSize: (width + height) * 0.015
    },
    errorText: {
        color: 'red',
        fontSize: (width + height) * 0.011
    }
});