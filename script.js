

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
/*
function moveAbout(){
	document.scroll = "scroolBottom()"
} I havent figured out what the fuck i am doing here but i will! this will be sorted :)! 
*/
var name=""; // this is a global variable all my functions below gets it :)


function join(){
	var join = prompt ("Hey new friend! What's your name?");
}

console.log("scriptloader")
function mySubmit(){
	var message = document.getElementById("usermsg").value;
		//
	console.log("message is "+message);
	document.getElementById("chatbox").appendChild(document.createTextNode(message));
		//this goes to my 'Chatbox' on my html and will add (append) what is written in my messages to my chatbox
	document.getElementById("chatbox").appendChild(document.createElement("br"));
		//this goes adds a break below my message (it cannot append childs (or children) so we have to create the Break ourselve with a createElement)
	document.getElementById("usermsg").value=""; //this means that the message gets cleared after it is sent
	return false;// this lets me submit with enter and not have to use to submit button (must create html onsubmit=mySubmit())
}
