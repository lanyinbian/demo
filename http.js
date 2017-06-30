

var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
	var url=req.url;
	switch(url){
		case "/":
		fs.readFile("index.html","utf-8",function(err,data){
			if(err){
				
			}else{
				//设置响应头，发送出去
				res.writeHead(200,{"content-type":"text/html;charset=utf8"});
				res.end(data)
			}
		});
		break
		
		case "/index.css":
		fs.readFile("index.css","utf-8",function(err,data){
			if(err){
				
			}else{
				//设置响应头，发送出去
				res.writeHead(200,{"content-type":"text/css;charset=utf8"});
				res.end(data)
			}
		});
		break
		
		case "/index.js":
		fs.readFile("index.js","utf-8",function(err,data){
			if(err){
				
			}else{
				//设置响应头，发送出去
				res.writeHead(200,{"content-type":"text/jsvascript;charset=utf8"});
				res.end(data)
			}
		})
		break
		
		case "/1.jpg":
		fs.readFile("1.jpg",function(err,data){
			if(err){
				
			}else{
				//设置响应头，发送出去
				res.writeHead(200,{"content-type":"image/jpeg;charset=utf8"});
				res.end(data)
			}
		})
		break
		
		default:
		res.end("404 not find")
		         
	}
	
}).listen(3000,function(){
	console.log("server:start")
})



//http.createServer(function(req,res){
//	console.log(req.url)
//	if(req.url=="/"){
//		fs.readFile("index.html","utf-8",function(err,data){
//			if(err){
//				
//			}else{
//				//设置响应头，发送出去
//				res.writeHead(200,{"content-type":"text/html;charset=utf8"});
//				res.end(data)
//			}
//		})
//	}else if(req.url=="/index.js"){  //处理/index.js
//		fs.readFile("index.js","utf-8",function(err,data){
//			if(err){
//				
//			}else{
//				//设置响应头，发送出去
//				res.writeHead(200,{"content-type":"text/jsvascript;charset=utf8"});
//				res.end(data)
//			}
//		})
//	}else if(req.url=="/index.css"){  //处理/index.js
//		fs.readFile("index.css","utf-8",function(err,data){
//			if(err){
//				
//			}else{
//				//设置响应头，发送出去
//				res.writeHead(200,{"content-type":"text/css;charset=utf8"});
//				res.end(data)
//			}
//		})
//	}else if(req.url=="/1.jpg"){  //处理/index.js
//		fs.readFile("1.jpg",function(err,data){
//			if(err){
//				
//			}else{
//				//设置响应头，发送出去
//				res.writeHead(200,{"content-type":"image/jpeg;charset=utf8"});
//				res.end(data)
//			}
//		})
//	}
//	
//}).listen(3000,function(){
//	console.log("服务器启动了")
//})
