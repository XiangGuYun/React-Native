import React, { Component, PropTypes } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class FlexBoxComponent extends Component<{}> {

    render() {

        return (
            /**
            父视图属性
             flex：弹性元素，即Android中的子视图或子元素
             主轴：子视图排列方向所在轴，例如排列方向为纵向，那么主轴就是Y轴，反之则为X轴
             侧轴：与主轴相对应的轴
             */

            //flexDirection:子视图排列方式
            //flexDirection:'column' 默认属性，子视图按从上到下排列，类似于纵向的线型布局
            //flexDirection:'row' 子视图从左往右排列
            //flexDirection:'row-reverse' 子视图从右往左排列
            //flexDirection:'column-reverse' 子视图从下往上排列
            /*<View style={{flexDirection:'row',backgroundColor:'darkgray',marginTop:20}}>
                <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>1</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>2</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>3</Text>
                </View>
                <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>4</Text>
                </View>
            </View>*/

            //flexWrap:定义了子视图在父视图中是否允许多行排列，默认为nowrap
            /*<View style={{flexDirection:'row',backgroundColor:'darkgray',marginTop:20,flexWrap:'wrap'}}>
                <View style={{width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>1</Text>
                </View>
                <View style={{width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>2</Text>
                </View>
                <View style={{width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>3</Text>
                </View>
                <View style={{width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={{fontSize:16}}>4</Text>
                </View>
            </View>*/

            //justifyContent 定义了浏览器如何分配顺着父容器主轴的弹性元素之间及其周围的空间，默认为flex-start
            //类似于Android中的gravity
            //flex-start:子视图靠左对齐
            //flex-end:子视图靠右对齐
            //center:子视图居中对齐
            //space-between:子视图分散对齐，将父视图切为n部分，每个子视图在每部分的最左侧或最右侧
            //space-around:子视图分散对齐，每个子视图均有相同数值的marginLeft和marginRight
            /*<View style={{flexDirection:'column',backgroundColor:'darkgray',marginTop:20,flexWrap:'wrap',justifyContent:'space-around',height:400}}>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>1</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>2</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>3</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>4</Text>
             </View>
             </View>*/

            //alignItems 在侧轴方向上将当前行上的弹性元素对齐，默认为stretch
            //可以把手机横向反转，此时可以清晰地理解对齐方式
            //flex-start:
            //flex-end:
            //center:
            //stretch:默认属性，子视图在侧轴方向被拉伸到与容器相同的高度和宽度
            /*<View style={{flexDirection:'row',backgroundColor:'darkgray',marginTop:20,flexWrap:'wrap',height:400,alignItems:'flex-start'}}>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>1</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>2</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>3</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>4</Text>
             </View>
             </View>*/

            /**
            子视图属性
             */

            //alignSelf，类似于Android中的layout_gravity
            //flex:定义子视图可伸缩的能力，默认为0，类似于Android中的weight，即决定剩余空间按照的比例进行分配
            //borderWidth:设置边框宽度
            //borderColor:设置边框颜色
            //margin:外边距
            //padding:内边距
            //边缘:left,right,bottom,top,即各个方向上的偏移量
            //position:默认为relative，也可设置为absolute
            <View style={{flexDirection:'row',backgroundColor:'darkgray',marginTop:20,flexWrap:'wrap',height:400,alignItems:'stretch',borderWidth:1}}>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
             <Text style={{fontSize:16}}>1</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:50,alignSelf:'flex-end'}}>
             <Text style={{fontSize:16}}>2</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5,alignSelf:'center'}}>
             <Text style={{fontSize:16}}>3</Text>
             </View>
             <View style={{width:40,height:40,backgroundColor:"darkcyan",margin:5,flex:1}}>
             <Text style={{fontSize:16}}>4</Text>
             </View>
             </View>

        );
    }
}




