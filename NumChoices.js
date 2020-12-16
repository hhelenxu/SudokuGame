import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FillNums } from './FillNums.js';

export const NumChoices = () => {
    const [selected, setSelected] = useState(0);
    function handleChange(i) {
        setSelected(i);
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <FillNums num='1' selected={selected==1 ? true:false} onChange={handleChange}/>
                <FillNums num='2' selected={selected==2 ? true:false} onChange={handleChange}/>
                <FillNums num='3' selected={selected==3 ? true:false} onChange={handleChange}/>
                <FillNums num='4' selected={selected==4 ? true:false} onChange={handleChange}/>
                <FillNums num='5' selected={selected==5 ? true:false} onChange={handleChange}/>
            </View>
            <View style={styles.row}>
                <FillNums num='6' selected={selected==6 ? true:false} onChange={handleChange}/>
                <FillNums num='7' selected={selected==7 ? true:false} onChange={handleChange}/>
                <FillNums num='8' selected={selected==8 ? true:false} onChange={handleChange}/>
                <FillNums num='9' selected={selected==9 ? true:false} onChange={handleChange}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 10
    },
    row: {
        marginTop: 15, 
        flexDirection: 'row'
    }
})