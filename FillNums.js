import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { changeSelected } from './Sudoku';

export const FillNums = (props) => {
    const [selected, setSelected] = useState(props.selected);

    return (
        <TouchableHighlight onPress={() => {
            changeSelected(props.num);
            setSelected(!selected);
            props.onChange(props.num);
        }} style={[styles.Box, props.selected ? styles.selected : styles.unselected]}>
            <Text style={props.num=='-1' ? styles.small : styles.text}>
                {props.num==-1 ? 'erase' : props.num}
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
        borderColor: 'black',
        width: 50,
        justifyContent: 'center'
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
    },
    small: {
        fontSize: 20,
        color: '#007AFF',
        textAlign: 'center',
        
    }
})