export function rps(input){

    let choices = ['rock', 'paper', 'scissors'];
    
    if (input == undefined) {
	let rand_choice = Math.floor(Math.random() * choices.length);
	if (rand_choice == 0) {
	    return {"player":"rock"};
	} else if (rand_choice == 1) {
	    return {"player":"paper"};
	} else {
	    return {"player":"scissors"};
	}
    }

    if (!choices.includes(input)) {
        throw new RangeError();
    }


    let opponent = Math.floor(Math.random() * choices.length);
    if (opponent== 0) {
        opponent = 'rock';
    } else if (opponent == 1) {
        opponent = 'paper';
    } else {
        opponent = 'scissors';
    }
    
    let result;
    input = input.toLowerCase();
    if (input == 'rock' && opponent == 'paper' || input == 'paper' && opponent == 'scissors' || input == 'scissors' && opponent == 'rock') {
	    result = "lose";
    } else if (input == 'rock' && opponent == 'scissors' || input == 'paper' && opponent == 'rock' || input == 'scissors' && opponent == 'paper') {
	    result = "win";
    } else {
	    result = "tie";
    }

    return { 
        player: input,
	    opponent: opponent,
	    result: result
    }
}

export function rpsls(input){
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    if (input == undefined) {
	let rand_choice = Math.floor(Math.random() * choices.length);
	if (rand_choice == 0) {
	    return {"player":"rock"};
	} else if (rand_choice == 1) {
	    return {"player":"paper"};
	} else if (rand_choice == 2) {
	    return {"player":"scissors"};
	} else if (rand_choice == 3) {
	    return {"player":"lizard"};
	} else {
	    return {"player":"spock"};
	}
    }

    if (!choices.includes(input)) {
        throw new RangeError();
    }



    let opponent = Math.floor(Math.random() * choices.length);
    if (opponent == 0) {
        opponent = 'rock';
    } else if (opponent == 1) {
        opponent = 'paper';
    } else if (opponent == 2) {
        opponent = 'scissors';
    } else if (opponent == 3) {
        opponent = 'lizard';
    } else {
        opponent = 'spock';
    }

    let result;
    input = input.toLowerCase();
    if (input == 'rock' && (opponent == 'paper' || opponent == 'spock') || input == 'paper' && (opponent == 'scissors' || opponent == 'lizard') || input == 'scissors' && (opponent == 'rock' || opponent == 'spock') || input == 'lizard' && (opponent == 'rock' || opponent == 'scissors') || input == 'spock' && (opponent == 'lizard' || opponent == 'paper')) {
	result = "lose";
    } else if (input == opponent) {
	result = "tie";
    } else {
	result = "win";
    }
    
    return {
	player: input,
	opponent: opponent,
	result: result
    }
}