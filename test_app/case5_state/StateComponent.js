import React, { Component, PropTypes } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class StateComponent extends Component<{}> {

    /*
    创建state方式1
     在构造方法中初始化组件的state
     */
    constructor(props){
        super(props);
        this.state={
            size:80
        }
    }

    /*
    创建state方式2
     */
    state={
        size:80,
    }

    //调用state属性
    /*<Text style={{fontSize:20,backgroundColor:'red'}}>size is {this.state.size}</Text>*/


    render() {
        return (
           // 通过构造组件传入的props是只读的，不能修改
            <View>
                <Text
                    style={{fontSize:20}}
                        onPress={()=>{
                         this.setState({
                            size:this.state.size+10
                            }
                        )
                        }}
                >blowing</Text>
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                         this.setState({
                            size:this.state.size-10
                            }
                        )
                        }}
                >smaller</Text>
                <Image
                    style={{width:this.state.size, height:this.state.size}}
                    source={require('./ballon.png')}
                />
            </View>
        );
    }
}





