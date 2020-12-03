import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Box } from './Box';
const GRIDSIZE = 9;
const SUBGRIDSIZE = 3;


//need props gridRow and gridCol corresponding to byGrid array indices for each Box
export class Square extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.Square}>
                <View style={{ flexDirection: 'row' }}>
                    <Box val={this.props.values[0]} gridRow={0} gridCol={0}/>
                    <Box val={this.props.values[1]} gridRow={0} gridCol={1}/>
                    <Box val={this.props.values[2]} gridRow={0} gridCol={2}/>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Box val={this.props.values[3]} gridRow={1} gridCol={0}/>
                    <Box val={this.props.values[4]} gridRow={1} gridCol={1}/>
                    <Box val={this.props.values[5]} gridRow={1} gridCol={2}/>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Box val={this.props.values[6]} gridRow={2} gridCol={0}/>
                    <Box val={this.props.values[7]} gridRow={2} gridCol={1}/>
                    <Box val={this.props.values[8]} gridRow={2} gridCol={2}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Square: {
        borderColor: 'black',
        borderWidth: 5,
        flexDirection: 'column'
    }
})