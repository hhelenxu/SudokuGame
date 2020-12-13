import React from 'react';
import { View } from 'react-native';
import { Square } from './Square';
import { generatePuzzle, getGrid } from './Sudoku.js';

var numBlank;

export const Grid = (props) => {
    switch(props.level) {
        case 'easy': 
            numBlank = Math.floor(Math.random()*10+15);
            break;
        case 'medium':
            numBlank = Math.floor(Math.random()*10+35);
            break;
        case 'hard':
            numBlank = Math.floor(Math.random()*10+50);
            break;
    }
    generatePuzzle(numBlank);

    return (
        <View>
            <View style={{ borderLeftWidth:5, borderRightWidth:5, borderTopWidth:5, flexDirection: 'row' }}>
                <Square num={0} values={getGrid(0)} start={props.start}/>
                <Square num={1} values={getGrid(1)} start={props.start}/>
                <Square num={2} values={getGrid(2)} start={props.start}/>       
            </View>

            <View style={{ borderLeftWidth:5, borderRightWidth:5, flexDirection: 'row' }}>
                <Square num={3} values={getGrid(3)} start={props.start}/>
                <Square num={4} values={getGrid(4)} start={props.start}/>
                <Square num={5} values={getGrid(5)} start={props.start}/>
            </View>

            <View style={{ borderLeftWidth:5, borderRightWidth:5, borderBottomWidth:5, flexDirection: 'row' }}>
                <Square num={6} values={getGrid(6)} start={props.start}/>
                <Square num={7} values={getGrid(7)} start={props.start}/>
                <Square num={8} values={getGrid(8)} start={props.start}/>
            </View>
        </View>
    );
}

