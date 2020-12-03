//figure out how to unhighlight when next one pressed
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { changeSelected } from './Sudoku';

export class FillNums extends Component {
    state = { isSelected : false };
    onPress = () => {
        changeSelected(this.props.num);
        this.setState({
            isSelected: !this.state.isSelected
        });
    };
    render() {
        return (
            <TouchableHighlight onPress={this.onPress} style={this.state.isSelected ? styles.selected : styles.unselected}>
                <Text style={styles.text}>
                    {this.props.num}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    selected: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    unselected: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        fontSize: 40,
        color: '#007AFF',
        textAlign: 'center'
    }
})