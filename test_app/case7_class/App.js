/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Student from './Student.js'
import MidStudent from './MidStudent.js'

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state=({
      remove:false,
      size:0
    })
    this.student = new Student('小花','女',15);
    this.mid_student = new MidStudent();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{fontSize:20}}
        >{this.student.getInfo()}</Text>
        <Text
            style={{fontSize:20}}
        >{this.mid_student.getInfo()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
