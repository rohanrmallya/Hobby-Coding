//var colors = ["rgb(0, 0, 255)","rgb(0, 255, 0)","rgb(255, 0, 0)",
//			 "rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 0, 255)"];

var colors = genColor(6);
var square = document.querySelectorAll(".square");
var picked = colorPicker();
var colorDisp = document.querySelector("#color");
var msg = document.querySelector("#msg");
var neww = document.querySelector("#new");
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');

for(i=0;i<square.length;i++){
	square[i].style.opacity = 1;
}

easy.addEventListener("click",function(){
	colors = genColor(3);
	picked = colorPicker();
	for(i=0;i<square.length;i++){
		square[i].style.background = colors[i];
	};
	for(i=3;i<6;i++){
		square[i].style.opacity = 0;
	}
	colorDisp.textContent = picked;
});

hard.addEventListener("click",function(){
	colors = genColor(6);
	picked = colorPicker();
	for(i=0;i<square.length;i++){
		square[i].style.background = colors[i];
	};
	for(i=3;i<6;i++){
		square[i].style.opacity = 1;
	};
	colorDisp.textContent = picked;
	
});


colorDisp.textContent = picked;

neww.addEventListener("click",function(){
	if(square[3].style.opacity == 0){
		colors = genColor(3);
		picked = colorPicker();
		for(i=0;i<square.length;i++){
			square[i].style.background = colors[i];
		};
		for(i=3;i<6;i++){
			square[i].style.opactiy = 0;
		};
		colorDisp.textContent = picked;
	}
	else{
		colors = genColor(6);
		picked = colorPicker();
		for(i=0;i<square.length;i++){
			square[i].style.background = colors[i];
		};
		for(i=3;i<6;i++){
			square[i].style.opactiy = 1;
		};
		colorDisp.textContent = picked;

	}
	msg.textContent = null;
	
	
});



for(var i=0;i<square.length;i++){

	square[i].style.background=colors[i];
	square[i].addEventListener("click",function(){
		var clicked = this.style.background;
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

function gen(){
	var num = Math.floor(Math.random()*255);
	return num;
}

function genColor(size){
	var arr = [];
	for(i=0; i<size;i++){
	
	var col = String(("rgb("+String(gen())+", "+String(gen())+", "+String(gen())+")"));
	arr.push(col);
	}
	return arr;
	
}

