
// Copyright (c) 2016 Rohan Mallya
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//    http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




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
var heading = document.querySelector("#heading");
var isHard = true;
colorDisp.textContent = picked;

hard.classList.add("selected");
easy.addEventListener("click",function(){
	colors = genColor(3);
	picked = colorPicker();
	hard.classList.remove("selected");
	easy.classList.add("selected");
	for(i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.background = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	};

	isHard = false;

	colorDisp.textContent = picked;
	console.log(colors);   
});

hard.addEventListener("click",function(){
	colors = genColor(6);
	picked = colorPicker();
	easy.classList.remove("selected");
	hard.classList.add("selected");
	for(i=0;i<square.length;i++){
		square[i].style.background = colors[i];
		square[i].style.display = "block";
	};
	isHard = true;
	colorDisp.textContent = picked;
	
});


colorDisp.textContent = picked;

neww.addEventListener("click",function(){
	neww.textContent = "New Colors";
	heading.style.background = "none";
	msg.textContent=" ";
	if(isHard){
		colors = genColor(6);
		picked = colorPicker();
		for(i=0;i<square.length;i++){
			square[i].style.background = colors[i];
			square[i].style.display = "block";
		};
		colorDisp.textContent = picked;
		isHard = true;
	}
	else{
		colors = genColor(3);
		picked = colorPicker();
		for(i=0; i<square.length;i++){
			if(colors[i]){
				square[i].style.background = colors[i];
			}
			else{
				square[i].style.display = "none";
			}
		};
		colorDisp.textContent = picked;
		isHard = false;
	}
	
});



for(var i=0;i<square.length;i++){
	square[i].style.background=colors[i];
	square[i].addEventListener("click",function(){
		var clicked = this.style.background;
		console.log(clicked,picked);
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
	heading.style.background= col;
	neww.textContent = "Play Again?"
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
	console.log(colors);
}

