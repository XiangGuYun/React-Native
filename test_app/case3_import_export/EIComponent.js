import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
/*
导出单个变量
 */
//export var name='小明';
var name='小明';
var age = 22;
/*
批量导出变量
 */
export {name, age};

/*
导出方法
 */
export function sum(a,b){
    return a+b;
}

/*
导出ES6组件
 */
export default class EIComponent extends Component<{}> {
    render() {
        return (
           <Text style={{fontSize:20,backgroundColor:'red'}}>Hello RN By ES6!!!</Text>
        );
    }
}

/*
 导出ES5组件
 */
//var EIComponent=React.createClass({
//
//})
//module.exports=EIComponent;

