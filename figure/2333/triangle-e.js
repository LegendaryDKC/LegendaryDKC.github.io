"use strict";

var gl;
var points;

window.onload = function init(){
	var canvas = document.getElementById( "triangle-canvas" );
	gl = WebGLUtils.setupWebGL( canvas );
	if( !gl ){
		alert( "WebGL isn't available" );
	}

	// Three Vertices
	var vertices = [
		// 1.0, -1.0, 
		// 0.0,  1.0, 
		// -1.0, -1.0,初始三角形坐标 

		 0.0,  1.0,  
    	-1.0, -1.0,   
     	 1.0, -1.0, 


		/*  1.0, -1.0, 
		 1.0,  1.0, 
		-1.0, -1.0, 
		-1.0,  1.0,
		-1.0, -1.0,
		 1.0,  1.0,  正方形坐标*/

		/*0.0, -1.0,
		 1.0, -1.0,
		 1.0,  1.0,
		 0.0, -1.0,
		 1.0,  1.0,
		 0.0,  1.0*/
		 /*-0.5, -0.5,
		 0.0, 0.5,
		 0.5, -0.5*/
	];
	var vColor = 
	[
		1.0,  0.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  0.0,  1.0, 
	];

	/* // Configure WebGL
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vColor ), gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0 , 0 );
	gl.enableVertexAttribArray( vPosition );
	gl.vertexAttribPointer( vColor, 3, gl.FLOAT, false, 0 , 0 );
	gl.enableVertexAttribArray( vColor ); */

gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	if (!initShaders(gl, "vertex-shader", "fragment-shader")) {
		console.log('Failed to intialize shaders.');
		return;
	  }
	

	var a_position = gl.getAttribLocation(	program, 'a_position');
	if (a_position < 0) {
		console.log('Failed to get the storage location of a_Position');
		return -1;
	  }

	var a_color = gl.getAttribLocation(program, 'a_color');
	if(a_color < 0) {
		console.log('Failed to get the storage location of a_Color');
		return -1;
	  }

	initVertexBuffer(gl, a_position, a_color);

	function initVertexBuffer(gl, a_position, a_color) {
	var vertexs = new Float32Array([
		1.0, 0, 0.0, 1, 0, 0, 1, -1.0, 0, 0.0, 0, 1, 0, 1,
		0, 1.0, 0.0, 0, 0, 1, 1
	])

	//计算所占字节数
	var fsize = vertexs.BYTES_PER_ELEMENT;

	//创建缓冲区
	var vextexBuffer = gl.createBuffer();
	if (!vextexBuffer) {
		console.log("创建缓冲区失败")
		return;
	}
	//绑定到顶点缓冲区
	gl.bindBuffer(gl.ARRAY_BUFFER, vextexBuffer);
	//给顶点缓冲区传值,GL_STATIC_DRAW表示数据变得很少
	gl.bufferData(gl.ARRAY_BUFFER, vertexs, gl.STATIC_DRAW);
	//将顶点缓冲区的值给a_position变量
	gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, fsize * 7, 0);

	//开启顶点缓冲区中的Attribute类型变量a_position
	gl.enableVertexAttribArray(a_position)
		//将顶点缓冲区的值给a_color变量,7个一组，占四个数字，偏移3
	gl.vertexAttribPointer(a_color, 4, gl.FLOAT, false, fsize * 7, fsize * 3);
	gl.enableVertexAttribArray(a_color)
}


	render();
}

function render(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	/* gl.drawArrays( gl.TRIANGLES, 0, 3 ); */
	gl.drawArrays( gl.TRIANGLES, 0, 3 );
	//gl.drawArrays( gl.TRIANGLES, 0, 6 );矩形，用两个三角拼接
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}