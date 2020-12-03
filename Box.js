import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { update, getSelectedNumber } from './Sudoku';

export class Box extends Component {
    state = { 
        //value : 1
        value : this.props.val===NaN ? "" : this.props.val, 
        editable: this.props.val===NaN ? true : false,
    };
    onPress = () => {
        if (this.editable) {
            update(this.props.gridRow,this.props.gridCol);
            this.setState({
                value : getSelectedNumber()
            });
        }
    };
    render() {
        return (
            <TouchableHighlight onPress={this.onPress} style={styles.Box}>
                <Text style={styles.sudokuText}>
                    {this.state.value}
                </Text>
            </TouchableHighlight>
        )
    }
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