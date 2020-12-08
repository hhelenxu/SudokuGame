import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { update, getSelectedNumber } from './Sudoku';

export const Box = (props) => {
    const [value, setValue] = useState(props.val);
    const [editable, setEditable] = useState(() => {
        const initial = props.val ? false : true;
        return initial;
    });

    return (
        <TouchableHighlight onPress={() => {
            if (editable) {
                update(props.gridRow,props.gridCol);
                setValue(getSelectedNumber());
            }
        }} style={[styles.Box, editable ? styles.editable : styles.uneditable]}>
            <Text style={[styles.sudokuText, editable ? styles.editableText : styles.uneditableText]}>
                {value ? value : ""}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Box: {
        borderColor: 'black',
        borderWidth: 1,
        width: 40,
        height: 50,
        justifyContent: 'center'
    },
    editable: {
        backgroundColor: '#87c0ff'
    },
    uneditable: {
        backgroundColor: '#007AFF'
    },
    sudokuText: {
        fontSize: 35,
        textAlign: 'center'
    },
    editableText: {
        color: '#ad2218'
    },
    uneditableText: {
        color: 'black'
    }
})