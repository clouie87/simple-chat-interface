

/*
function myFacebook(){
	href="https://www.facebook.com/carol.louie"
};
document.write() */

/*<script> 
function chatbox(){
	var cb= document.getElementById("type here");

}*/
/*function(){

}*/

function join(){
	var join = prompt ("What is your First Name?");
}
console.log("scriptloader")
function mySubmit(){
	var message = document.getElementById("usermsg").value;
	console.log("message is "+message);
	document.getElementById("chatbox").appendChild(document.createTextNode(message));
	document.getElementById("usermsg").value="";
	return false;// this lets me submit with enter and not have to use to submit button (must create html onsubmit=mySubmit())
}
