//To do:
// fix spacing at top: https://stackoverflow.com/questions/45170712/margin-top-for-header-bar-in-react-native-navigation
// modal for finish
// size margins/buttons based on percentage/screen space
//need props gridRow and gridCol corresponding to byGrid array indices for each Box
//need to add prop to Square for square number ^

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Constants } from 'expo';
import { Grid } from './Grid.js';
import { FillNums } from './FillNums.js'

const Stack = createStackNavigator();
const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/1200px-Sudoku-by-L2G-20050714.svg.png"}
var level;

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title:"Welcome" }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title:"Instructions" }} />
        <Stack.Screen name="Sudoku" component={GameScreen} />
        {/* <Stack.Screen name="Final" component={EndScreen} options={{ title: 'Congrats' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titleText: {
    fontSize: 60,
    fontWeight: "bold",
    // fontFamily: (name of font),
    color: "white",
    backgroundColor: '#007AFF',
    textAlign: "center",
    marginTop: 0,
    marginHorizontal: 15
  },
  subtitleText: {
    fontSize: 35,
    color: '#007AFF',
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 25,
    marginHorizontal: 15
  },
  bodyText: {
    fontSize: 25,
    color: 'black',
    marginTop: 25,
    marginHorizontal: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  levelButton: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonText: {
    fontSize: 25,
    color: '#007AFF',
    textAlign: 'center'
  },
  userText: {
    fontSize: 35,
    color: '#007AFF',
    textAlign: 'center'
  },
  Numbers: {
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    width: 50,
    height:50,
    marginTop: 10
  }
});

const WelcomeScreen = ({ navigation }) => {
  return ( 
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.titleText}> Welcome to Sudoku! </Text>
      <Text style={styles.subtitleText}> Choose a level to begin: </Text>
      
      {/* buttons */}
      <TouchableOpacity
          style={styles.levelButton}
          onPress={() => {navigation.navigate('Sudoku'), level='easy'}}>
          <Text style={styles.buttonText}>Easy</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.levelButton}
          onPress={() => {navigation.navigate('Sudoku'), level='medium'}}>
          <Text style={styles.buttonText}>Medium</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.levelButton}
          onPress={() => {navigation.navigate('Sudoku'), level='hard'}}>
          <Text style={styles.buttonText}>Hard</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.levelButton}
          onPress={() => navigation.navigate('Help')}>
          <Text style={styles.buttonText}>?</Text>
      </TouchableOpacity>
      {/* <Button title="Easy" color="black"  onPress={() => navigation.navigate('Sudoku')} /> */}
      {/* <Button title="Medium" color="black" onPress={() => navigation.navigate('Sudoku')} /> */}
      {/* <Button title="Hard" color="black" onPress={() => navigation.navigate('Sudoku')} /> */}
      {/* <Button title="?" onPress={() => navigation.navigate('Help')} /> */}
    </ImageBackground>    
  );
};

const HelpScreen = ({ navigation }) => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.titleText}>
        How to Play:
      </Text>
      <Text style={styles.bodyText}>
        Each row, column, and (3 by 3) square needs to be filled with the numbers
        1-9 without repeats. To play, choose a number at the bottom and then tap
        an empty square to fill it with that number. When you are done, click the 
        "I'm done!" button and the computer will check if you did it right.
      </Text>
      <Text style={styles.subtitleText}>
        Happy playing!
      </Text>
    </ImageBackground>
  );
};

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Grid level={level}/>
      
      <View style={{marginTop: 25, flexDirection: 'row'}}>
        <FillNums num='1'/>
        <FillNums num='2'/>
        <FillNums num='3'/>
        <FillNums num='4'/>
        <FillNums num='5'/>
      </View>
      <View style={{marginTop: 15, flexDirection: 'row'}}>
        <FillNums num='6'/>
        <FillNums num='7'/>
        <FillNums num='8'/>
        <FillNums num='9'/>
      </View>
    </View>
  );
};

export default App;
