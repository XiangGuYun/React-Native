import React, { Component, PropTypes } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class PropsComponent extends Component<{}> {

    //定义默认属性
    static defaultProps={
        name:"小红",
        age:16,
        sex:'男'
    }
    //属性类型约束
    //static propTypes={
    //    name:PropTypes.string,
    //    age:PropTypes.number,
    //    sex:PropTypes.string.isRequired
    //}

    render() {

        return (
           // 通过构造组件传入的props是只读的，不能修改
            <View>
                <Text style={{fontSize:20,backgroundColor:'red'}}>Hello!{this.props.name}</Text>
                <Text style={{fontSize:20,backgroundColor:'red'}}>age is {this.props.age}</Text>
                <Text style={{fontSize:20,backgroundColor:'red'}}>sex is {this.props.sex}</Text>
            </View>
        );
    }
}


