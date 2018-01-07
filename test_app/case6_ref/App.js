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

import RefComponent from './RefComponent.js'

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state=({
      remove:false,
      size:0
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{fontSize:20}}
          onPress={()=>{
            var size=this.refs.refcomponent.getSize();
            //var size=this.refs[refcomponent].getSize();
            this.setState({
              size:size,
            })
          }}
        >获取气球大小:{this.state.size}</Text>
       <RefComponent
        ref="refcomponent"
       />
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
