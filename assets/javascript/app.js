//START READY
$(document).ready(function () {
	// TIMER COUNT
var count = 5
// CORRECT, WRONG AND UNANSWERED QUESTIONS
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
//HIDE MIDCONTAINER AND END CONTAINER
	$("#midGameContainer").hide();
	$("#endContainer").hide();
//CENTER THE PAGE
	window.scrollTo(0, 500);
//
	$("#startButton").on("click", function(){

		// HIDE START CONTAINER
		$("#startContainer").hide();

		// SHOW THE GAME CONTAINER
		$("#midGameContainer").show();

		startCountdown();
		return;

		// Counts down and displays the time to the user
	function countdown(){

		// Decrement the counter, down from 60 seconds
		count--;

		// Display the count to the user in the DOM
    	$('#timer').html(count + " Seconds");

    	//DONE IS PUSHED RUN THIS
			$("#completedButton").on("click", function(){

			// Stop the countdown and run the timeUp function
			//clearInterval(startCountdown); ???? DID NOT WORK
			count = 0;
			return;

			});

			//IF THEY RUN OUT OF TIME
			if(count == -1){

				// STORE THE ANSWERS
				timeUp();

				// HIDE QUESTIONS
				$("#midGameContainer").hide();

			}


	}


	// TIMER SHOWN
	function startCountdown(){

		setInterval(countdown, 1000);

	}



	function timeUp(){

		// STORING THE VALUES OF THE INPUTS
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		
		//IF ELSE FOR EACH QUESTION TO KEEP SCORE
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Blue"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Don Cherry"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "1504"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "1929"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		




		// DISPLAY ANSWER
		$('#correctAnswers').html(correctCount);
		$('#wrongAnswers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score Div
		$("#endContainer").show();


		// Set Scroll position so it looks good
		window.scrollTo(0, 550);

	}

	});
}); //END READY
