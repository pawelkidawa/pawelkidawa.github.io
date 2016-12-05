$(document).ready(function(){

	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");
	
	var width = canvas.width;
	var height = canvas.height;
	
	var speed = 2;
	
	
	//var dx = 2;
	//var dy = -2;
	
	var tmp = "poludniowy-wschod";
	
	var config = {
		
		ball: {
			color: "#32CD32",
			r:20
		}
	}
	
	var x = Math.floor((Math.random() * (width-(config.ball.r/2))) + config.ball.r/2);//width/2;
	var y = Math.floor((Math.random() * (height-(config.ball.r/2))) + config.ball.r/2); //height/2;
	
	function draw(){
		context.clearRect(0,0,width,height);
		
		
		switch(tmp) {
			case "polnocny-zachod":
				x-=speed;
				y-=speed;
				break;
			case "poludniowy-zachod":
				x-=speed;
				y+=speed;
				break;
			case "poludniowy-wschod":
				x+=speed;
				y+=speed;
				break;
			case "polnocny-wschod":
				x+=speed;
				y-=speed;
				break;
		}
		
		//console.log('x: ' + x +'y: ' + y +' tmp: ' + tmp);
		context.beginPath();
		context.arc(x,y,config.ball.r,0,Math.PI*2);
		context.fillStyle = config.ball.color;
		context.fill();
		context.closePath();
		
		if(x >= width-(config.ball.r/2)){
			if(tmp=="poludniowy-wschod"){
				tmp="poludniowy-zachod";
			}
			else{
				tmp="polnocny-zachod";
			}
		}
		if(x <= config.ball.r/2){
			if(tmp=="polnocny-zachod"){
				tmp="polnocny-wschod";
			}
			else{
				tmp="poludniowy-wschod";
			}
		}
		if(y <= config.ball.r/2){
			if(tmp=="polnocny-wschod"){
				tmp="poludniowy-wschod";
			}
			else{
				tmp="poludniowy-zachod";
			}
		}
		if(y >= height-(config.ball.r/2)){
			if(tmp=="poludniowy-zachod"){
				tmp="polnocny-zachod";
			}
			else{
				tmp="polnocny-wschod";
			}
		}
	}
	
	setInterval(function(){ draw(); }, 10);
	
	

	
	

});
