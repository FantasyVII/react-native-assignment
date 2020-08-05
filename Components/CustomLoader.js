import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function CustomLoader(props) {
    return props.show ? <ActivityIndicator size="large" color="#00ff00" /> : null
}