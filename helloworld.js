
// console.log("hello world");
/*var x = 30;
var y = 40;
console.log(x+"+"+y+"="+(x+y));
for(var i=1;i<10;i++)
{
	for(var j=i;j<10;j++)
	{
		console.log(i+"+"+j+"="+(i+j)+"  ");
	}
	console.log("\n");
}//*/

/*
//Node JS 测试文件 阻塞方式
var fs = require('fs');
var data = fs.readFileSync("input.txt");
// console.log(data);
console.log(data.toString());
console.log("the program over");
//*/

/* NodeJs 测试文件 采用非阻塞方式
var fs = require("fs");
fs.readFile("input.txt",function(err,data){
	if(err)
		return console.err(err);
	console.log("not yet really, aha!!");
	console.log(data.toString());
});
console.log("异步读取文件操作结束！！！r u sure?");
//*/

/* Node JS 测试事件循环
//引入events模块
console.log("测试事件循环");
var event_s = require("events");
//创建 eventEmitter对象
var eventEmitter = new event_s.EventEmitter();
//创建事件处理程序
var connectHander = function connected()
{
	console.log("连接成功！！")
	eventEmitter.emit("data_received");
}
//添加一个connection事件监听
eventEmitter.on("connection",connectHander);
//添加另一个事件监听
eventEmitter.on("data_received",function(){
	console.log("数据接收完成！！！");
})

eventEmitter.emit("connection");
console.log("程序执行完毕！！");
//*/
/* Node Js EventEmitter
//引入events模块
var event_s = require('events');
//创建eventEmitter对象
var eventEmitter = new event_s.EventEmitter();
//event.js文件
console.log("program start");
var EventEmitterClass = require('events').EventEmitter;
var eventEmitterInstance = new EventEmitterClass();

eventEmitterInstance.on("some_event",function(){
	console.log("some_event事件被触发");
});
console.log("some_event事件将在2秒后被激活！！")
setTimeout(function(){
	eventEmitterInstance.emit("some_event");
},2000);
console.log("program end");

eventEmitter.on("test",function(){
	console.log("this is a test by eventEmitter....");
});
setInterval(function(){
	eventEmitter.emit("test");
},1000);
//*/

/*Node Js EventEmitter with arguments
var event_s = require("events");
var eventEmitter = new event_s.EventEmitter();

eventEmitter.on("multiEvent",function(arg1,arg2){
	console.log("multiEvent: arg1->"+arg1+" arg2->"+arg2);
});
console.log("启动事件");
setTimeout(function(){
	console.log("begin start multiEvent");
	eventEmitter.emit("multiEvent","参数1","参数二");
	console.log("start multiEvent over");
},3000);
console.log("主程序运行结束");
//*/

/*Node Js 测试EventEmitter的其他一些方法
var event_s = require('events');
var eventEmitter = new event_s.EventEmitter();
// once
console.log("once event start");
eventEmitter.once("onceEvent",function(stream){
	console.log("i'm onceEvent. what you gave me is "+stream);
});
console.log("第一次触发onceEvent事件");
eventEmitter.emit("onceEvent");
console.log("第二次触发onceEvent事件");
eventEmitter.emit("onceEvent");
console.log("once event over");

//监听器1
var listener1 = function listener1()
{
	console.log("监听器 listener1执行");
}
//监听器2
var listener2 = function listener2()
{
	console.log("监听器 listener2执行");
}//监听器3
var listener3 = function listener3()
{
	console.log("监听器 listener3执行");
}
//绑定 connection事件，处理函数为listener1
eventEmitter.addListener("connection",listener1);
//绑定 connection事件，处理函数为listener2
eventEmitter.addListener("connection",listener2);
//绑定 connection事件，处理函数为listener3
eventEmitter.addListener("connection",listener3);
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners+"个监听器监听连接事件");

//处理connection事件
eventEmitter.emit("connection");
//移除监听listener1函数
eventEmitter.removeListener("connection",listener1);
console.log("listener1不再继续监听");
eventEmitter.emit("connection");
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners+"个监听器监听连接事件");

console.log("程序执行完毕！！");
//*/

/* Node Js Error事件
var event_s = require('events');


var emitter = new event_s.EventEmitter();

// emitter.emit("error");

//*/

/* Node JS Buffer
var buf = new Buffer(10);
console.log(buf.length);
var buf2 = new Buffer([10,20,30,24,9]);
console.log(buf2.length);
for (var i = buf2.length - 1; i >= 0; i--) {
	console.log(i+" "+buf2[i]);
}

buf = new Buffer(256);
len = buf.write("www.123456.com");
console.log("写入字节数: "+len);

console.log("read from buffer");
buf = new Buffer(26);
for(var i=0;i<26;i++)
	buf[i] = i+97;

console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",0,5));
console.log(buf.toString("utf8",0,5));
console.log(buf.toString(undefined,0,5));
//转换成JSON数据格式
console.log(buf.toJSON(buf));
//*/
/* concat
var buffer1 = new Buffer("大神教程");
var buffer2 = new Buffer("www.baidu.com");
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer2 concat buffer1 is "+ buffer3);

console.log(buffer1.compare(buffer2));

var buffer4 = new Buffer(6);
buffer2.copy(buffer4);
console.log("buffer4 content: "+buffer4.toString());

var buffer5 = buffer1.slice(0,6);
console.log("buffer5 content: "+buffer5.toString());
console.log(buffer1.length);
//*/

/* Node JS Stream对象
var fs = require('fs');
var data = "";
//创建可读流
var readerStream = fs.createReadStream("input.txt");
//设置编码为utf-8
readerStream.setEncoding("UTF8");
//处理流事件
readerStream.on("data",function(chunk){
	console.log("recevied data: "+chunk);
	data += chunk;
});

readerStream.on("end",function(){
	console.log("done read and result : "+data);
});

readerStream.on("error",function(err){
	console.log(err.stack);
});
console.log("程序执行完毕！！");

//测试写入流
var data2 = "hfsjkdlfhjdlkshfklsdahfjkldsahfkj很费劲的酸辣粉好瞌睡了恢复健康拉斯";
console.log("测试写入流");
var writeStream = fs.createWriteStream("output.txt");
writeStream.write(data2,"utf8");
writeStream.end();

writeStream.on("finish",function(){
	console.log("写入完成");
});

writeStream.on("error",function(err){
	console.log(err.stack);
});
console.log("程序执行完毕！！");

//测试pipe
var writeStream2 = fs.createWriteStream("pipe.txt");
readerStream.pipe(writeStream2);
console.log("done pipe");

//链式流
var zlib = require('zlib');
//压缩input.txt 为input.txt.gz
//fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
//console.log("文件压缩完成");

//解压input.txt.gz为inputforgz.txt
fs.createReadStream("input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("inputfromgz.txt"));
console.log("文件解压完成");

//*/

/* 创建模块
//var hello = require('./hello');
//hello.world();

var Hello = require("./hello");
var hello = new Hello();
hello.name("老王");
hello.sayHello();

//*/

/* Node Js 函数
function say(word)
{
	console.log(word);
}

function execute(someFunction,value)
{
	someFunction(value);
}

execute(say,"Hello");

//*/
/*
const buf1 = Buffer.from([1,2,3,4]);
console.log(buf1[1]);
//*/

/* Test http model
var http = require('http');
http.createServer(function(request,response){
	response.writeHeader("Content-Type:text/plain");
	response.write("hello world");
	response.end();
	// return "./hello.js";
}).listen(8888);

//*/

/* Test Http Model 2
var http = require('http');
var url  =require('url');

function onRequest(request,response)
{
	//var name = request.get("name");
	// var name = querystring("name");
	// console.log("name: "+name);
	var path = url.parse(request.url).pathname;
	console.log("pathname: "+path);
	response.writeHeader("Content-Type:text/plain");
	response.write("hello world from http2");
	response.end();
}

http.createServer(onRequest).listen(8889);

//*/

/*
console.log(_dirname);
console.log(_filename);
//*/

/*
console.error("error");
console.warn("warn");

console.trace();
//*/

/*
process.stdout.write("process stand out put stream \n");
console.log("execPath: "+process.execPath);
console.log(process.platform);
console.log("【九九乘法表】")
for(var i=1;i<10;i++)
{
	for(var j=i;j<10;j++)
	{
		process.stdout.write(i+"*"+j+"="+(i*j)+"\t");
	}
	process.stdout.write("\n");
}
//*/
/*/
var util = require('util');
function Base()
{
	this.name = "base";
	this.base = 1991;
	this.sayHello = function()
	{
		console.log("hello "+this.name);
	}
}
Base.prototype.showName = function()
{
	console.log(this.name);
};

function Sub()
{
	this.name = "sub";
}

util.inherits(Sub,Base);
var objBase = new Base();

objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);
console.log("***************************");
console.log(util.inspect(Base,true));
//*/

//* OS 模块测试
var osModel = require('os');
console.log("hostname:"+osModel.hostname());
console.log("type: "+osModel.type())
console.log("tempdir: "+osModel.tmpdir());
console.log("arch: "+osModel.arch());
console.log("release: "+osModel.release());
console.log("uptime: "+osModel.uptime());
console.log("loadavg: "+osModel.loadavg());
var totalMem = osModel.totalmem();
console.log("totalmem: "+totalMem+" M: "+totalMem/8/1024 +" G: "+totalMem/8/1024/1024);
console.log("freemem: "+osModel.freemem()+" M: "+osModel.freemem()/8/1024 +" G: "+osModel.freemem()/8/1024/1024);
var interfaces = osModel.networkInterfaces();
console.log("networkInterfaces: "+ interfaces);
console.log("newworkInterfaces[0]" + interfaces[1]);



//*/