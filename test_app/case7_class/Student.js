/**
 * Created by asus on 2018/1/7.
 */

/*
定义类
export:导出这个类
default：类似于Java中的public，表示js文件的默认类
 */
export default class Student{

    constructor(name,sex,age){
        this.name=name;
        this.sex=sex;
        this.age=age;
    }

    getInfo(){
        return 'name is '+this.name+"\n"+"sex is "+this.sex+"\n"+"age is "+this.age;
    }

}