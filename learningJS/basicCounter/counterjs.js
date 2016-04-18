var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var count1 = document.getElementById("disp1");
var count2 = document.getElementById("disp2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");
var count = document.getElementById("count");
var p1counter = 0;
var p2counter = 0;
var max = 5;
var over = false;

player1.addEventListener("click",function(){
	if(!over){
		console.log(p1counter,max);
		p1counter++;
		if(p1counter === max){
			count1.classList.add("win");
			over = true;
			}
		count1.textContent = p1counter;
		}
	

});

player2.addEventListener("click",function(){
	if(!over){
		p2counter++;
		if(p2counter==max){
			count2.classList.add("win");
			over = true;
		}
		count2.textContent = p2counter;
	}
});

reset.addEventListener("click",function(){
	p1counter = 0;
	p2counter = 0;
	count1.textContent = p1counter;
	count2.textContent = p2counter;
	over = false;
	count1.classList.remove("win");
	count2.classList.remove("win");
});

input.addEventListener("change",function(){
	count.textContent = input.value;
	max = Number(input.value);
	re();

});

function re(){
	p1counter = 0;
	p2counter = 0;
	count1.textContent = p1counter;
	count2.textContent = p2counter;
	over = false;
	count1.classList.remove("win");
	count2.classList.remove("win");
}
