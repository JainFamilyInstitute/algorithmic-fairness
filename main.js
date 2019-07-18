var scroll_post = document.querySelector('.scroll-post');
var panels = document.querySelector('.scroll-post').childNodes;
var stage = document.querySelector('.links').childNodes;
var stage1 = document.querySelector('.links').childNodes[1];
var stage2 = document.querySelector('.links').childNodes[3];
var stage3 = document.querySelector('.links').childNodes[5];


// setup stage
function stage1() {
	var stage1 = document.querySelector('.links').childNodes[1];
	var stage2 = document.querySelector('.links').childNodes[3];
	var stage3 = document.querySelector('.links').childNodes[5];
	console.log("stage1")
	stage1.childNodes[0].style.visibility="visible";
	stage2.childNodes[0].style.visibility="hidden";
	stage3.childNodes[0].style.visiblity="hidden";
}
// prediction stage
function stage2() {
	var stage1 = document.querySelector('.links').childNodes[1];
	var stage2 = document.querySelector('.links').childNodes[3];
	var stage3 = document.querySelector('.links').childNodes[5];
	console.log("stage2")
	stage2.childNodes[0].style.visibility="visible";
	stage1.childNodes[0].style.visibility="hidden";
	stage3.childNodes[0].style.visiblity="hidden";

}
// results stage
function stage3() {
	var stage1 = document.querySelector('.links').childNodes[1];
	var stage2 = document.querySelector('.links').childNodes[3];
	var stage3 = document.querySelector('.links').childNodes[5];
	console.log("stage3")
	stage3.childNodes[0].style.visibility="visible";
	stage1.childNodes[0].style.visiblity="hidden";
	stage2.childNodes[0].style.visiblity="hidden";
}

stage1();

scroll_post.onscroll=function() {
	var w = scroll_post.scrollWidth;
	var w_loc = scroll_post.scrollLeft;
	var loc = w_loc/w

	if(loc < .15  ){
		stage1();
	} else if (loc > .15 & loc < .30) {
		stage2();
	} else if( loc > .30 & loc < .6) {
		stage3();
	}
} 
