var strictModeIsOn = false; 
var isStarted = false; 
var isPlayerChance = false; 
var counter = 0;
var playerCounter = 0; 
var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
// Produce a random sequence  
var game_arr= createGameSequence(); 
console.log(game_arr); 
// Compare the game arr with the user arr
var user_arr =[]; 

$(document).ready(function(){

	// Buttons remain disable until start 
	$('#red_block').attr('style','pointer-events: none');
	$('#green_block').attr('style', 'pointer-events: none');
	$('#yellow_block').attr('style', 'pointer-events: none');
	$('#blue_block').attr('style', 'pointer-events: none');
}); 


// click listners for the 2 buttons 

$("#strict").click(function() {
	if(strictModeIsOn == false){
		strictModeIsOn = true; 
		$('#indicator').css('color', '#8BC34A');
	}else{
		strictModeIsOn = false; 
		$('#indicator').css('color', '#F44336');
	}
});



$('#start').click(function() {
	if(isStarted == false){
		isStarted = true; 
		$('#start').html('Stop');
		$('#start').attr('class', 'btn btn-danger');
			$('#red_block').attr('style','');
			$('#green_block').attr('style', '');
			$('#yellow_block').attr('style', '');
			$('#blue_block').attr('style', '');
		game(); 

	}else{
		isStarted = false; 
		counter = 0; 
		$('#counter').html('Counter: ' + counter); 
		$('#start').html('Start');
		$('#start').attr('class', 'btn btn-success'); 
		document.location.reload();  
	}
});

// click listner for each div 
// activates only if game has started 
$('#red_block').click(function() {
	if(isStarted == true && isPlayerChance == true){
		user_arr.push(0); 
		// This function compares after user hits the block
		setTimeout(function(){audio1.play();}, 20); 
		setTimeout(function(){
			compare(); 
		},1500); 
	}else{
		// can't click ;
	}
});

$('#green_block').click(function() {

	if(isStarted == true && isPlayerChance == true){
		user_arr.push(1);  
	// This function compares after user hits the block
		setTimeout(function(){audio2.play();}, 20); 
		setTimeout(function(){
			compare(); 
		},1500); 
	}else{
		// can't click; 
	}
});



$('#yellow_block').click(function() {
	if(isStarted == true && isPlayerChance == true){
		user_arr.push(2); 
		// This function compares after user hits the block
		setTimeout(function(){audio3.play();}, 20); 
		setTimeout(function(){
			compare(); 
		},1500); 

	}else{
		// can't click; 
	}
});

$('#blue_block').click(function() {
	if(isStarted == true && isPlayerChance == true){
		user_arr.push(3);
		// This function compares after user hits the block
		setTimeout(function(){audio4.play();}, 20); 
		setTimeout(function(){
		compare(); 
		},1500); 
	}else{
		// can't click; 
	}

});

function compare(){
	// Compare the values of user_arr with game_arr
	var isMatch = true; 

	if(game_arr[playerCounter] == user_arr[playerCounter] && playerCounter == 20){
		setTimeout(function(){
			$('#counter').html('Counter: ' + '<span style="color: #F44336; font-size: 20px">' + 
				'ಥ_ಥ<span>'); 
			document.location.reload(); 
			return; 
		}, 200);
	}
	// game Over condition
	if(game_arr[playerCounter] != user_arr[playerCounter]){
		isMatch = false; 
		isPlayerChance = false; 
		 
		setTimeout(function(){
			$('#counter').html('Counter: ' + '<span style="color: #F44336; font-size: 20px">' + 
				'ಥ_ಥ<span>'); 
		}, 500);

		setTimeout(function(){
			if(strictModeIsOn){
				counter = 0; 
				$('#counter').html('Counter: ' + counter);
			}else{
				counter--; 
			}
		}, 1200); 


		setTimeout(function(){
			game(); 
		}, 1600); 

	}

	// Call game function only after the playerMoveCount === computerMoveCount
	// and game is not over
	if(playerCounter == counter-1 && isMatch == true){
		setTimeout(function(){game();},1000); 
	}
	if(playerCounter < counter){
		playerCounter++; 
	}
}
function game(){
	// start the game 
	counter++; 


	$('#counter').html('Counter: ' + counter); 

	// Empty the game_arr; 
	if(strictModeIsOn == true){
		// Empty the whole arr in case of strict mode 
		// randomize a new sequence
		game_arr = createGameSequence();
	}



	// Play each block 
	for(var i = 0; i < counter; i++){

		(function(i,game_arr){
		    setTimeout(function () {
		    // Disable User Buttons 
		    $('#red_block').attr('style','pointer-events: none');
			$('#green_block').attr('style', 'pointer-events: none');
			$('#yellow_block').attr('style', 'pointer-events: none');
			$('#blue_block').attr('style', 'pointer-events: none');
		   switch (game_arr[i]) {
			case 0:
				// red_block
				console.log('red'); 
				setTimeout(function(){
					$('#red_block').css({
						'opacity': '1',
						'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' 
					});

					audio1.play();
				}, 500); 
				setTimeout(function(){
					$('#red_block').attr('style', '');
					$('#red_block').attr('style','pointer-events: none');

				},1000); 

				break; 
			case 1: 
				// green_block 
				console.log('green'); 
				setTimeout(function(){
					$('#green_block').css({
						'opacity': '1',
						'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' 
					});
					audio2.play();
				},500);

				setTimeout(function(){
					$('#green_block').attr('style', '');
					$('#green_block').attr('style', 'pointer-events: none');

				},1000); 

				break; 

			case 2: 
				// yellow block

				console.log('yellow'); 
				setTimeout(function(){
					$('#yellow_block').css({
						'opacity': '1',
					});
					audio3.play();

				}, 500); 
				setTimeout(function(){
					$('#yellow_block').attr('style', '');
					$('#yellow_block').attr('style', 'pointer-events: none');


				},1000 ); 

				break; 
				
			case 3:
				console.log('blue'); 
				setTimeout(function(){
					$('#blue_block').css({
						'opacity': '1',
						'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' 
					});
					audio4.play();
				}, 500); 
				setTimeout(function(){
					$('#blue_block').attr('style', '');
					$('#blue_block').attr('style', 'pointer-events: none');

				},1000); 
				break; 
			}
			// Player is given Chance after the loop
			if(i == counter-1){
				isPlayerChance = true;
				playerCounter = 0; 
				user_arr = [];
				setTimeout(function(){
						$('#red_block').attr('style','');
						$('#green_block').attr('style', '');
						$('#yellow_block').attr('style', '');
						$('#blue_block').attr('style', '');
				}, 1005);
			}else{
				isPlayerChance = false; 
			}
			console.log(isPlayerChance); 

		}, 1500*(i));
		}(i,game_arr));
	}
}

function createGameSequence(){
	arr = []
	for(var i = 0; i < 20; i++){
		var block_value = Math.floor(Math.random() * 4);  
		arr.push(block_value); 
	}

	return arr; 
}
