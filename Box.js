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
                    if (finished()) {
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
                            {isCorrect ? "Congrats!!!" : "Incorrect :("}
                        </Text>
                        <Text style={styles.smallModalText}>
                            {isCorrect ? "You correctly completed this Sudoku puzzle!" : "Try again!"}
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
        fontSize: 30,
        marginBottom: 15,
        textAlign: "center"
    },
    smallModalText: {
        fontSize: 20,
        marginBottom: 25,
        textAlign: "center"
    }
})