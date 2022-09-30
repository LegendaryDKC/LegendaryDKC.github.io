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

	
		 0.0, 0.0,
		-1.0,-1.0,
		 0.0,-1.0,
		 0.0, 0.0,
		-1.0,-1.0,
		-1.0, 0.0,
		 0.0, 1.0,
		 1.0, 0.0,
		 1.0, 1.0,

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
	var vertices1 = [
		 0.0, 1.0,
		 1.0, 0.0,
		 1.0, 1.0,

	];

	// Configure WebGL
	gl.viewport( 0, 0, canvas.width, canvas.height );
	

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );

	render();

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader1", "fragment-shader1" );
	gl.useProgram( program );

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices1 ), gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );

	render2();
	
}

function render(){
	
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	/* gl.drawArrays( gl.TRIANGLES, 0, 3 ); */
	gl.drawArrays( gl.TRIANGLES, 0, 6 );
	//gl.drawArrays( gl.TRIANGLES, 0, 6 );矩形，用两个三角拼接
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

function render2(){
	
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	/* gl.drawArrays( gl.TRIANGLES, 0, 3 ); */
	gl.drawArrays( gl.TRIANGLES, 0, 3 );
	//gl.drawArrays( gl.TRIANGLES, 0, 6 );矩形，用两个三角拼接
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}


