import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Box } from './Box';

export const Square = (props) => {
    return (
        <View style={styles.Square}>
            <View style={{ flexDirection: 'row' }}>
                <Box val={props.values[0]} gridRow={props.num} gridCol={0}/>
                <Box val={props.values[1]} gridRow={props.num} gridCol={1}/>
                <Box val={props.values[2]} gridRow={props.num} gridCol={2}/>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Box val={props.values[3]} gridRow={props.num} gridCol={3}/>
                <Box val={props.values[4]} gridRow={props.num} gridCol={4}/>
                <Box val={props.values[5]} gridRow={props.num} gridCol={5}/>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Box val={props.values[6]} gridRow={props.num} gridCol={6}/>
                <Box val={props.values[7]} gridRow={props.num} gridCol={7}/>
                <Box val={props.values[8]} gridRow={props.num} gridCol={8}/>
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