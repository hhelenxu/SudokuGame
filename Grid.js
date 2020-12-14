import React, {useState} from 'react';
import { View, Modal, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Square } from './Square';
import { generatePuzzle, getGrid } from './Sudoku.js';

export const Grid = (props) => {
    var numBlank;
    const [feedback, setFeedback] = useState(true);
    const [modalVisible, setModalVisible] = useState(true);
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
        <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed."); 
                }}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Would you like to receive immediate feedback on your answers?</Text>
                        <View style={styles.row}>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setFeedback(true);
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Yes</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setFeedback(false);
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>No</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                </Modal> 
            </View>
        <View>
            <View style={{ borderLeftWidth:5, borderRightWidth:5, borderTopWidth:5, flexDirection: 'row' }}>
                <Square num={0} values={getGrid(0)} start={props.start} feedback={feedback}/>
                <Square num={1} values={getGrid(1)} start={props.start} feedback={feedback}/>
                <Square num={2} values={getGrid(2)} start={props.start} feedback={feedback}/>       
            </View>

            <View style={{ borderLeftWidth:5, borderRightWidth:5, flexDirection: 'row' }}>
                <Square num={3} values={getGrid(3)} start={props.start} feedback={feedback}/>
                <Square num={4} values={getGrid(4)} start={props.start} feedback={feedback}/>
                <Square num={5} values={getGrid(5)} start={props.start} feedback={feedback}/>
            </View>

            <View style={{ borderLeftWidth:5, borderRightWidth:5, borderBottomWidth:5, flexDirection: 'row' }}>
                <Square num={6} values={getGrid(6)} start={props.start} feedback={feedback}/>
                <Square num={7} values={getGrid(7)} start={props.start} feedback={feedback}/>
                <Square num={8} values={getGrid(8)} start={props.start} feedback={feedback}/>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '80%',
        marginBottom: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#007AFF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        elevation: 2,
        marginRight: 10,
        marginLeft: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center"
    },
    row: {
        flexDirection: "row"
    }
})

