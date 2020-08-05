import * as React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';

export default function Weclome({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Button title={'Go To Form'} onPress={() => navigation.navigate('Form')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});