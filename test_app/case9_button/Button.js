import React, { Component, PropTypes } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

export default class Button extends Component<{}> {

    constructor(props){
        super(props);
        this.state={
            tapCount:0,
            text:'',
            //startTime:0
        }
    }

    render() {

        return (
           <View>
               <Text style={styles.title}>case1:onPress和onLongPress方法</Text>
               <TouchableWithoutFeedback
                   onPress={()=>{
                        this.setState({tapCount:this.state.tapCount+1})
                    }
                }
                   onLongPress={()=>{
                        Alert.alert('提示','确认删除吗？',[
                            {text:'cancel',onPress:()=>{},style:'cancel'},
                            {text:'confirm',onPress:()=>{}},
                        ])
                    }
                }
               >
                   <View style={styles.button}>
                       <Text style={styles.buttonText}>
                           我是TouchableWithoutFeedback，单击我
                       </Text>
                   </View>
               </TouchableWithoutFeedback>
               <Text style={styles.text}>你单击了：{this.state.tapCount}次</Text>


               <Text style={styles.title}>case2:disabled属性</Text>
               <TouchableWithoutFeedback
                   disabled={this.state.waiting}//类似于Android中的enabled
                   onPress={()=>{
                         //点击后设置文本'正在登陆'，并让按钮不可用
                         this.setState({text:'正在登陆...',waiting:true})
                         setTimeout(()=>{
                         //连接超市后让按钮可用
                         this.setState({text:'连接超时',waiting:false})
                         },2000)
                         }}
               >
                   <View style={styles.button}>
                       <Text style={styles.buttonText}>
                           登录
                       </Text>
                   </View>
               </TouchableWithoutFeedback>
               <Text style={styles.text}>{this.state.text}</Text>


               <Text style={styles.title}>case3:onPressIn和onPressOut</Text>
               <TouchableWithoutFeedback
                           onPressIn={()=>{
                                this.setState({text:'触摸开始'});
                           }}
                           onPressOut={()=>{
                                this.setState({text:'触摸结束'})
                           }}
                           //onPressIn={()=>{
                           // this.setState({text:'触摸开始',startTime:new Date().getTime()});
                           //}}
                           //onPressOut={()=>{
                           //  this.setState({text:'触摸结束，触摸时间为：'}+(new Date().getTime()-this.state.startTime)+"ms")
                           //}}
               >
                   <View style={styles.button}>
                       <Text style={styles.buttonText}>
                           点我
                       </Text>
                   </View>
               </TouchableWithoutFeedback>
               <Text style={styles.text}>{this.state.text}</Text>
           </View>
        );
    }
}

const styles=StyleSheet.create({
    button:{
        borderWidth:1
    },
    buttonTest:{
        fontSize:18
    },
    text:{
        fontSize:20
    },
    title:{
       fontSize:22, backgroundColor:'green'
    }
});

//类似于Android中的Touch事件

