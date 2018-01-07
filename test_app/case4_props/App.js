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

import PropsComponent from './PropsComponent.js'

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state=({
      remove:false,
      result:''
    })
  }

  render() {

    var params={name:'校长',age:58, sex:'男'};//定义一组属性
    var {name,sex}=params;//结构赋值
    return (
      <View style={styles.container}>
       <PropsComponent
           //结构赋值
           name={name}
           sex={sex}

           //圆角操作符，ES6方式
           //{...params}

           //传统方式
           //name={param.name}
           //age={param.age}
           //sex={param.sex}

           //name="小明"
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
