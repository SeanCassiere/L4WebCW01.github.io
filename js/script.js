/*
//Button Scroller Function
function scrollToTop() {
	var position = document.body.scrollTop || document.documentElement.scrollTop;
	if (position){
		window.scrollBy(0,-Math.max(10, Math.floor(position / 10)));
		scrollAnimation=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(scrollAnimation);
}
//document.getElementById("scrollNow").onclick=function(){scrollToTop(); return false}; // Eased Scroll
*/

function increaseFontSize() {
    docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize + 2) + 'px';
}

function decreaseFontSize() {
	docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize - 2) + 'px';
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos<=25) {
        document.getElementById("scrollNow").style.visibility = "hidden";
        document.getElementById("scrollNow").style.opacity = "0" ;
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("scrollNow").style.visibility = "visible";
        document.getElementById("scrollNow").style.opacity = "1" ;
    } else {
        document.getElementById("scrollNow").style.visibility = "visible";
        document.getElementById("scrollNow").style.opacity = "1" ;
    }
    prevScrollpos = currentScrollPos;
}

function feedbackValidator(FeedBackForm){
    var feedbackName = FeedBackForm.feedbackname.value;
    var feedbackEmail = FeedBackForm.feedbackemail.value;
    var feedbackRating = FeedBackForm.feedbackrating.value;
    var feedbackComments = FeedBackForm.feedbackcomments.value;
    
    if (feedbackComments.length==0){
        feedbackComments = "blank";
    } else {
        feedbackComments = "'"+feedbackComments+"'";
    }
    
    if (feedbackName.length==0 || feedbackEmail.length==0) {
        alert('All compulsory fields must be filled.');
    } else {
        alert('Dear '+feedbackName+', Thank you very much for your feedback. You have rated our site as '+feedbackRating+' and the comment left was '+feedbackComments+'. In addition your email is '+feedbackEmail+'.');
    }
}

function musicquizValidator(MusicQuizForm){
    var question01 = MusicQuizForm.question01.value;
    var question02 = MusicQuizForm.question02.value;
    if (question01=="Carly Rae Jespsen"){question01 = "True"} else {question01 = "False"}
    if (question02=="Madonna"){question02 = "True"} else {question02 = "False"}
    alert(question01+" "+question02);
}

var timeOut;
var sec;

function myTimer(){
	if(sec>0){
		--sec;	
	} else {
		alert("Your Time Is Over!!");
		clearInterval(timeOut);
		submitted=false;
		check();
	}
	document.getElementById("quizTimer").innerHTML = sec;
}

document.getElementById("decreaseFont").addEventListener('click',function(){decreaseFontSize();});
document.getElementById("increaseFont").addEventListener('click',function(){increaseFontSize();});

// Feedback Form Validator Event
var FeedBackFormElement = document.getElementById("feedbackSubmit");
if (FeedBackFormElement) { FeedBackFormElement.addEventListener('click',function(){feedbackValidator(this.form)}); }

// Music Quiz Event Checker Listener
var MusicQuizFormElement = document.getElementById("quizSubmit");
if (MusicQuizFormElement) {
    MusicQuizFormElement.addEventListener('click',function(){musicquizValidator(this.form)});
}
var MusicQuizFormStartButton = document.getElementById("startTimer");
if (MusicQuizFormStartButton) {
    MusicQuizFormStartButton.addEventListener('click',function(){
        sec = 10;
        timeOut = setInterval(myTimer, sec*100);
    });
}