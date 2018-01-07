获取气球大小的实现思路

方式1
①给组件定义ref属性，可以理解为java中的对象引用
 <RefComponent
        ref="refcomponent"
 />

②通过ref获取组件的属性
var size=this.refs.refcomponent.getSize();
或者
var size=this.refs[refcomponent].getSize();

方式2
①给组件定义ref属性，可以理解为java中的对象引用
 <RefComponent
        ref={refcomponent=>this.refcomponent=refcomponent}
 />

②通过ref获取组件的属性
var size=this.refcomponent.getSize();

代码
render() {
    return (
      <View style={styles.container}>
        <Text
          style={{fontSize:20}}
          onPress={()=>{
            var size=this.refs.refcomponent.getSize();
            this.setState({
              size:size,
            })
            //this.refs[refcomponent]
          }}
        >获取气球大小:{this.state.size}</Text>
       <RefComponent
        ref="refcomponent"
       />
      </View>
    );
  }