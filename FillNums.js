//figure out how to unhighlight when next one pressed
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { changeSelected } from './Sudoku';

export const FillNums = (props) => {
    const [selected, setSelected] = useState(false);

    return (
        <TouchableHighlight onPress={() => {
            changeSelected(props.num);
            setSelected(!selected);
        }} style={[styles.Box, selected ? styles.selected : styles.unselected]}>
            <Text style={styles.text}>
                {props.num}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Box: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    selected: {
        backgroundColor: 'grey',
    },
    unselected: {
        backgroundColor: 'white',
    },
    text: {
        fontSize: 40,
        color: '#007AFF',
        textAlign: 'center'
    }
})