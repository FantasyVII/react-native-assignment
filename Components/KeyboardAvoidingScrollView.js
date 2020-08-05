import React from 'react'
import { Platform, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window')

export default function KeyboardAvoidingScrollView(props) {
    if (Platform.OS === 'ios') {
        return (
            <KeyboardAvoidingView style={{ ...props.style, flex: 1 }} behavior={'padding'}>
                {props.children}
            </KeyboardAvoidingView>
        )
    } else if (Platform.OS === 'android') {
        return (
            <ScrollView style={props.style} contentContainerStyle={{ ...props.contentContainerStyle, height: height - Constants.statusBarHeight - 56 }}>
                {props.children}
            </ScrollView>
        )
    }
}