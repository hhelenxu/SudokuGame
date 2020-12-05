import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Box } from './Box';

export const Square = (props) => {
    return (
        <View style={styles.Square}>
            <View style={{ flexDirection: 'row' }}>
                <Box val={props.values[0]} gridRow={0} gridCol={0}/>
                <Box val={props.values[1]} gridRow={0} gridCol={1}/>
                <Box val={props.values[2]} gridRow={0} gridCol={2}/>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Box val={props.values[3]} gridRow={1} gridCol={0}/>
                <Box val={props.values[4]} gridRow={1} gridCol={1}/>
                <Box val={props.values[5]} gridRow={1} gridCol={2}/>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Box val={props.values[6]} gridRow={2} gridCol={0}/>
                <Box val={props.values[7]} gridRow={2} gridCol={1}/>
                <Box val={props.values[8]} gridRow={2} gridCol={2}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Square: {
        borderColor: 'black',
        borderWidth: 5,
        flexDirection: 'column'
    }
})