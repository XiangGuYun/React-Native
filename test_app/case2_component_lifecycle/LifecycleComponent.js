/**
 * Created by asus on 2018/1/6.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class LifecycleComponent extends Component<{}> {
    /*
    初始化组件时会调用如下生命周期
     ----------constructor------------
     ----------componentWillMount------------
     ----------render------------
     ----------componentDidMount------------
    */
    constructor(props){//第一个调用的方法，初始化组件
        super(props);
        this.state={
            count:0,
        }
        console.log('----------constructor------------');
    }

    componentWillMount(){//组件装载前调用
        console.log('----------componentWillMount------------');
    }

    componentDidMount(){//组件装载完成
        console.log('----------componentDidMount------------');
    }

    componentWillReceiveProps(nextProps){//组件更新时调用
        console.log('----------componentWillReceiveProps------------');
    }

    shouldComponentUpdate(nextProps, nextState){//组件是否应该更新
        console.log('----------shouldComponentUpdate------------');
        return true;
    }

    componentWillUpdate(nextProps, nextState){//组件更新之前
        console.log('----------componentWillUpdate------------');
    }

    componentDidUpdate(nextProps, nextState){//组件更新之前
        console.log('----------componentDidUpdate------------');
    }

    componentWillUnmount(){//组件被移除之前
        console.log('----------componentWillUnmount------------');
    }

    render() {
        console.log('----------render------------');
        return (
            <View>
                <Text
                    style={{fontSize:20,backgroundColor:'red'}}
                    /*
                    通过点击View刷新视图会调用如下生命周期
                    ----------shouldComponentUpdate------------
                    ----------componentWillUpdate------------
                    ----------render------------
                    ----------componentDidUpdate------------
                     */
                    onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                        }
                        )
                    }}
                >敲击</Text>
                <Text style={{fontSize:20}}>敲击了{this.state.count}次</Text>
            </View>
        );
    }
}
