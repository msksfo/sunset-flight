var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 0; 


var airplane = '\u2708';
var airplaneWidth = c.measureText(airplane).width;

var yMin = airplaneWidth;
var yMax = innerHeight - airplaneWidth;

var y = Math.floor(Math.random() * (yMax - yMin)) + yMin;

//var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

function animate(){
	requestAnimationFrame(animate); // this creates a loop

	c.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas

	c.font = '64px Arial'; // draw the airplane
	c.fillStyle = '#f0ffff';
	c.fillText(airplane, x, y);
	
	 x += 2;

	if ( x > innerWidth + airplaneWidth){
		x = 0;
		}
}

animate();



/* ----- smiley face as reference for creating emoji on html canvas ----
 c.font = '32px Arial';
 c.fillText('\ud83d\ude03', 400, 250);
 ---------------------------------------------------------------------*/






