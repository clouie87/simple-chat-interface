

/*
function myFacebook(){
	href="https://www.facebook.com/carol.louie"
};
document.write() */

/*<script> 
function chatbox(){
	var cb= document.getElementById("type here");

}*/
//buttom
function join(){
	var join = prompt ("What is your First Name?");
}

console.log("scriptloader")
function mySubmit(){
	var message = document.getElementById("usermsg").value;
	console.log("message is "+message);
	document.getElementById("chatbox").appendChild(document.createTextNode(message));
}
