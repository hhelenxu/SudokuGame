import React, { useRef } from "react";
import { Animated, Text, View, Image, StyleSheet, Button } from "react-native";

var images = [require("./x.png"),require("./check.png")];

export const Checkmark = (props) => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 5000
        }).start();
    };

    return (
        <Animated.Image
            style={[
            styles.fadingContainer, {
                opacity: fadeAnim // Bind opacity to animated value
            }]}
            source={images[boxCorrect(props.gridRow, props.gridCol)]}
        />
        // <View style={styles.container}>
        //     <Animated.Image
        //         style={[
        //         styles.fadingContainer, {
        //             opacity: fadeAnim // Bind opacity to animated value
        //         }]}
        //         source={require('./check.png')}
        //     />
        //     {/* <Text style={styles.fadingText}>Fading View!</Text> */}
        // {/* </Animated.Image> */}
        // {/* <View style={styles.buttonRow}>
        //     <Button title="Fade In" onPress={fadeIn} />
        //     <Button title="Fade Out" onPress={fadeOut} />
        // </View> */}
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
    buttonRow: {
        flexDirection: "row",
        marginVertical: 16
    }
});