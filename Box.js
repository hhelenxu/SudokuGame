import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, Alert, Modal, View} from 'react-native';
import { update, getSelectedNumber, finished, correct } from './Sudoku';

export const Box = (props) => {
    const [value, setValue] = useState(props.val);
    const [editable, setEditable] = useState(() => {
        const initial = props.val ? false : true;
        return initial;
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [isCorrect, setCorrect] = useState(false);

    return (
        <View>
            <TouchableHighlight onPress={() => {
                if (editable) {
                    value ? update(props.gridRow,props.gridCol,0) : update(props.gridRow,props.gridCol,1);
                    setValue(getSelectedNumber());
                    // setCorrect(correct());
                    //     setModalVisible(true);
                    if (finished()) {
                        //setValue(correct());
                        setCorrect(correct());
                        setModalVisible(true);
                    }
                }
            }} style={[styles.Box, editable ? styles.editable : styles.uneditable]}>
                <Text style={[styles.sudokuText, editable ? styles.editableText : styles.uneditableText]}>
                    {value ? value : ""}
                </Text>
            </TouchableHighlight>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed."); 
                }}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {isCorrect ? "Congrats!!!\nYou correctly completed this Sudoku puzzle!" : "Incorrect :(\nTry again!"}
                        </Text>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableHighlight>
                    </View>
                </Modal> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Box: {
        borderColor: 'black',
        borderWidth: 1,
        width: 40,
        height: 50,
        justifyContent: 'center'
    },
    editable: {
        backgroundColor: '#87c0ff'
    },
    uneditable: {
        backgroundColor: '#007AFF'
    },
    sudokuText: {
        fontSize: 35,
        textAlign: 'center'
    },
    editableText: {
        color: '#ad2218'
    },
    uneditableText: {
        color: 'black'
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
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
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})