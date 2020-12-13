import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableHighlight, Alert, Modal, View, ImageBackground } from 'react-native';
import { update, getSelectedNumber, finished, correct, boxCorrect } from './Sudoku';
import { Checkmark } from './Checkmark.js';

var startTime = 0, endTime = 0;
var images = [require("./x.png"),require("./check.png")];
function stopTime() {
    var d = new Date();
    endTime = d.getTime();
    var timeInMS = endTime-startTime;
    var formattedTime = "";
    if (timeInMS>3600000) {
        formattedTime += Math.trunc(timeInMS/3600000)+" h, ";
        timeInMS %= 3600000;
    }
    if (timeInMS>60000) {
        formattedTime += Math.trunc(timeInMS/60000)+" min, ";
        timeInMS %= 60000;
    }
    formattedTime += Math.trunc(timeInMS/1000)+" s";
    return formattedTime;
}

export const Box = (props) => {
    const [value, setValue] = useState(props.val);
    const [editable, setEditable] = useState(() => {
        const initial = props.val ? false : true;
        return initial;
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [isCorrect, setCorrect] = useState(false);
    startTime = props.start;

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000
        }).start();
    };

    return (
        <View>
            <TouchableHighlight onPress={() => {
                fadeIn();
                setTimeout(() => { fadeOut(); }, 3000);
                if (editable) {
                    value ? update(props.gridRow,props.gridCol,0) : update(props.gridRow,props.gridCol,1);
                    setValue(getSelectedNumber());
                    if (finished()) {
                        setCorrect(correct());
                        setModalVisible(true);
                    }
                    //image = boxCorrect(props.gridRow, props.gridCol) ? './check.png'  : './x.png';
                    fadeIn();
                    setTimeout(() => {  fadeOut(); }, 2000);
                    
                }
            }} style={[styles.Box, editable ? styles.editable : styles.uneditable]}>
                <View>
                <Animated.Image
                    style={[
                    styles.fadingContainer, {
                        opacity: fadeAnim // Bind opacity to animated value
                    }]}
                    source={images[boxCorrect(props.gridRow, props.gridCol)]}
                    />
                    <Text style={[styles.sudokuText, editable ? styles.editableText : styles.uneditableText]}>
                        {value ? value : ""}
                    </Text>
                    
                </View>
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
                            {isCorrect ? "You correctly completed this Sudoku puzzle in "+stopTime()+"!" : "Try again!"}
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
    },
    fadingContainer: {
        // paddingVertical: 8,
        // paddingHorizontal: 16,
        //backgroundColor: "powderblue",
        height: 50,
        width: 40,
        justifyContent: 'center'
    },
})