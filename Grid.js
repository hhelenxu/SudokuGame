import React, { Component } from 'react';
import { View } from 'react-native';
import { Square } from './Square';
import { generatePuzzle, getGrid } from './Sudoku';

var numBlank;

export class Grid extends Component {
    constructor (props) {
        super(props);
        switch(props.level) {
            case 'easy': 
                numBlank = Math.floor(Math.random()*10+15);
                break;
            case 'medium':
                numBlank = Math.floor(Math.random()*10+35);
                break;
            case 'hard':
                numBlank = Math.floor(Math.random()*10+55);
                break;
        }
        generatePuzzle(numBlank);
    }
    render () {
        return (
            <View>
                <View style={{ borderLeftWidth:5, borderRightWidth:5, borderTopWidth:5, flexDirection: 'row' }}>
                    <Square num={0} values={getGrid(0)}/>
                    <Square num={1} values={getGrid(1)}/>
                    <Square num={2} values={getGrid(2)}/>       
                </View>

                <View style={{ borderLeftWidth:5, borderRightWidth:5, flexDirection: 'row' }}>
                    <Square num={3} values={getGrid(3)}/>
                    <Square num={4} values={getGrid(4)}/>
                    <Square num={5} values={getGrid(5)}/>
                </View>

                <View style={{ borderLeftWidth:5, borderRightWidth:5, borderBottomWidth:5, flexDirection: 'row' }}>
                    <Square num={6} values={getGrid(6)}/>
                    <Square num={7} values={getGrid(7)}/>
                    <Square num={8} values={getGrid(8)}/>
                </View>
            </View>
        );
    }
}

