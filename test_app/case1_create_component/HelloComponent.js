import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

/*
ES6的方式创建组件
 */
export default class HelloComponent extends Component<{}> {
    render() {
        return (
           <Text style={{fontSize:20,backgroundColor:'red'}}>Hello RN By ES6!!!{this.props.name}</Text>
        );
    }
}

/*
ES5的方式创建组件
 */
//var HelloComponent=React.createClass({
//    render() {
//        return (
//            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello RN By ES5!!!</Text>
//        )
//    }
//});
//
////使用module导出组件
//module.exports=HelloComponent;


/*
使用函数式来定义组件
无状态，不能使用this
 */
//function HelloComponent(props){
//    return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{props.name}</Text>;
//}
//
//module.exports=HelloComponent;