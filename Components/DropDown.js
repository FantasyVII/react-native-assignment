import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

function DropDownFlatListItems(props) {
    if (props.show) {
        return (
            props.data.map((item) => (
                <TouchableWithoutFeedback key={item.id} onPress={() => props.onItemSelected(item)}>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            ))
        )
    } else {
        return null
    }
}

export default function CustomInputfield(props) {
    const [showList, onShowList] = useState(false);
    const [selectedItem, onItemSelected] = useState(props.data[0]);

    return (
        <View>
            <Text>{props.title}</Text>

            <TouchableWithoutFeedback onPress={() => onShowList(!showList)}>
                <View style={styles.mainItemView}>
                    <Text style={styles.text}>{selectedItem.name}</Text>
                </View>
            </TouchableWithoutFeedback>

            <DropDownFlatListItems
                data={props.data}
                show={showList}
                onItemSelected={(item) => {
                    onItemSelected(item)
                    onShowList(false)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainItemView: {
        borderWidth: 1
    },
    itemView: {
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        backgroundColor: 'lightgray'
    },
    text: {
        fontSize: (width + height) * 0.015
    }
});