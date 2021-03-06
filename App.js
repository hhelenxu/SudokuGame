import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Linking, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Grid } from './Grid.js';
import { NumChoices } from './NumChoices.js';
import { generatePuzzle, changeSelected } from './Sudoku.js';

const Stack = createStackNavigator();
const image = require("./background.png");
var level;

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title:"Home Screen" }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title:"Instructions" }} />
        <Stack.Screen name="Sudoku" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const WelcomeScreen = ({ navigation }) => {
  return ( 
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.titleText}> Welcome to Sudoku! </Text>
      <Text style={styles.subtitleText}> Choose a level to begin: </Text>
      
      <TouchableOpacity style={styles.levelButton}
          onPress={() => {navigation.navigate('Sudoku'), level='easy'}}>
          <Text style={styles.buttonText}>Easy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.levelButton}
          onPress={() => {navigation.navigate('Sudoku'), level='medium'}}>
          <Text style={styles.buttonText}>Medium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.levelButton}
          onPress={() => {navigation.navigate('Sudoku'), level='hard'}}>
          <Text style={styles.buttonText}>Hard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.levelButton}
          onPress={() => navigation.navigate('Help')}>
          <Text style={styles.buttonText}>?</Text>
      </TouchableOpacity>

      <Text style={styles.author}> Made by Helen Xu. </Text>
      <TouchableOpacity style={styles.link}
          onPress={() => Linking.openURL('https://github.com/hhelenxu/SudokuGame')}>
          <Text style={styles.linkText}>Github repo</Text>
      </TouchableOpacity>
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
        Each row, column, and 3 by 3 square needs to be filled with the numbers
        1-9 without repeats. To play, choose a number at the bottom and then tap
        an empty square to fill it with that number. When you are all done, the computer will
        automatically check if you did it right and give you feedback!
      </Text>
      <Text style={styles.subtitleText}>
        Happy playing!
      </Text>
    </ImageBackground>
  );
};

function numBlank() {
  switch(level) {
    case 'easy': 
      return Math.floor(Math.random()*10+15);
    case 'medium':
      return Math.floor(Math.random()*10+35);
    case 'hard':
      return Math.floor(Math.random()*10+50);
  }
}

const GameScreen = ({ navigation }) => {
  generatePuzzle(numBlank());
  changeSelected(0);
  return (
    <View style={styles.container}>
      <Grid level={level} start={new Date().getTime()}/>
      <NumChoices/>
    </View>
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
    marginTop: 20,
    padding: 10
  },
  subtitleText: {
    fontSize: 35,
    color: '#007AFF',
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 25,
    marginHorizontal: 15,
    padding: 10
  },
  bodyText: {
    fontSize: 25,
    color: 'black',
    marginTop: 25,
    marginHorizontal: 15,
    padding: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  levelButton: {
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
  },
  buttonText: {
    fontSize: 25,
    color: '#007AFF',
    textAlign: 'center'
  },
  author: {
    fontSize: 15,
    color: '#007AFF',
    marginTop: 50,
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  link: {
      marginTop: 10,
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: 'white',
      borderColor: 'white',
      width: 100,
  },
  linkText: {
    fontSize: 15,
    color: '#007AFF',
    padding: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
});

export default App;
