import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { update, getSelectedNumber } from './Sudoku';

export const Box = (props) => {
    const [value, setValue] = useState(props.val);

    return (
        <TouchableHighlight onPress={() => {
            if (!value) {
                update(props.gridRow,props.gridCol);
                setValue(getSelectedNumber());
            }
        }} style={styles.Box}>
            <Text style={styles.sudokuText}>
                {value ? value : ""}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor: '#007AFF',
        borderColor: 'black',
        borderWidth: 1,
        width: 40,
        height: 50,
        justifyContent: 'center'
    },
    UnfilledBox: {
        backgroundColor: '#87c0ff',
        borderColor: 'black',
        borderWidth: 1,
        width: 40,
        height: 50,
        justifyContent: 'center'
    },
    sudokuText: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center'
    }
})