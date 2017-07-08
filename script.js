var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 15;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);

function keyDownHandler(event) {
	if(event.keyCode == 39) {
		rightPressed = true;
	}
	else if(event.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(event) {
	if(event.keyCode == 39) {
		rightPressed = false;
	}
	else if(event.keyCode == 37) {
		leftPressed = false;
	}
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x,y,ballRadius,0,Math.PI*2);
	ctx.fillStyle = "#0095DD";
    ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	// console.log(paddleX);
	// console.log(canvas.height-paddleHeight);
	// console.log(paddleWidth);
	// console.log(paddleHeight);
	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBall();
	drawPaddle();

	if (y + dy < 0 + ballRadius) {
		dy = -dy;
	}
	else if (y + dy > canvas.height - ballRadius) {
		alert("GAME OVER");
		document.location.reload();
	}

	if (x + dx >canvas.width - ballRadius || x + dx < 0 + ballRadius ) {
		dx = -dx;
	}

	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 3;
	}
	else if (leftPressed && paddleX > 0) {
		paddleX -=3;
	}

	x += dx;
	y += dy
}

setInterval(draw,10);