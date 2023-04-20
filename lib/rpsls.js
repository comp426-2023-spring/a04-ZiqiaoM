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
    var opponent="null";
    const scenarios = Math.floor(Math.random()*5 +1);
    switch(scenarios){
        case 1:
            var opponent ="scissors"
            break;
        case 2:
            var opponent ="rock"
            break;
        case 3:
            var opponent="paper"
            break;
        case 4:
            var opponent="lizard"
            break;
        case 5:
            var opponent="spock"
            break;
        default:
            console.log(scenarios);
            return 0;
    }
    if(input=="none"){
        var output={player:opponent};
        return output;
    }
    let hand = input.toLowerCase();
    var res=rules(hand,opponent);
    var output ={player:hand, opponent:opponent, result:res};
    return output;
}
function rules(player, opponent){
    if(player == opponent) var res ="draw";

    if(player=="rock" && opponent=="scissors") var res="win";
    if(player=="rock" && opponent=="paper") var res="lose";
    if(player=="rock" && opponent=="lizard") var res="win";
    if(player=="rock" && opponent=="spock") var res="los";

    if(player=="scissors" && opponent=="rock") var res="lose";
    if(player=="scissors" && opponent=="paper") var res="win";
    if(player=="scissors" && opponent=="lizard") var res="win";
    if(player=="scissors" && opponent=="spock") var res="lose";

    if(player=="paper" && opponent=="scissors") var res="lose";
    if(player=="paper" && opponent=="rock") var res="win";
    if(player=="paper" && opponent=="lizard") var res="lose";
    if(player=="paper" && opponent=="spock") var res="win";

    if(player=="lizard" && opponent=="rock") var res="lose";
    if(player=="lizard" && opponent=="scissors") var res="lose";
    if(player=="lizard" && opponent=="paper") var res="win";
    if(player=="lizard" && opponent=="spock") var res="win";
    
    if(player=="spock" && opponent=="rock") var res="win";
    if(player=="spock" && opponent=="paper") var res="lose";
    if(player=="spock" && opponent=="scissors") var res="win";
    if(player=="spock" && opponent=="lizard") var res="lose";

    return res;
}