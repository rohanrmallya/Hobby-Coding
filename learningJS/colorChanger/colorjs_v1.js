var colors = ["rgb(0, 0, 255)","rgb(0, 255, 0)","rgb(255, 0, 0)",
			  "rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 0, 255)"];

var square = document.querySelectorAll(".square");
var picked = colorPicker();
var colorDisp = document.querySelector("#color");
var msg = document.querySelector("#msg");

colorDisp.textContent = picked;

for(var i=0;i<square.length;i++){
	square[i].style.background=colors[i];
	square[i].addEventListener("click",function(){
		var clicked = this.style.background;
		//console.log(clicked,picked);
		if(clicked === picked){
			msg.textContent="Right";
			change(picked);

		}
		else{
			this.style.background="#252829";
			msg.textContent="Try Again"

		}
	});
}

function change(col){
	for(var i=0; i<square.length; i++){
		square[i].style.background = col;
	}
}

function colorPicker(){
	var num = Math.floor(Math.random()*colors.length);
	return colors[num];

}
