/**
 * Created by asus on 2018/1/7.
 */
import Student from './Student'

export default class MidStudent extends Student{
    constructor(){
        super('米德','男',14);
    }

    getInfo(){
        return "调用父类方法："+super.getInfo();
    }
}