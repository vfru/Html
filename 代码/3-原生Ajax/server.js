//引入express

const express = require('express')

//创建应用对象
const app = express();

//创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/Hello',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('Hello EXPRESS');
});
app.post('/Hello',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('Hello EXPRESS POST');
});

//可以接收任意类型的请求
app.all('/Hello',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应头  允许使用自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('Hello AJAX ALL');
});

//监听端口启动服务

app.listen(8000,()=>{
    console.log('服务已启动,8000端口监听中')
})