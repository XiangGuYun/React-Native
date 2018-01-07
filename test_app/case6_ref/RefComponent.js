import React, { Component, PropTypes } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class RefComponent extends Component<{}> {

    constructor(props){
        super(props);
        this.state={
            size:80
        }
    }


    getSize(){
        return this.state.size;
    }


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





