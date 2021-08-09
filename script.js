let tabuleiro = [
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
];

function checkDiagonalTopToBottom(){
	for(let line = 0; line < 4; line++){
		for(let column = 0; column < 4; column++){
			let one = tabuleiro[line][column];
			let two = tabuleiro[line + 1][column + 1];
			let three = tabuleiro[line + 2][column + 2];
			let four = tabuleiro[line + 3][column + 3];
			if(one === 1 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player1 Win")
			}
			if(one === 2 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player2 Win")
			}
		}
	}
	for(let line = 0; line < 4; line++){
		for(let column = 1; column < 4; column++){
			let one = tabuleiro[line][column];
			let two = tabuleiro[line + 1][column + 1];
			let three = tabuleiro[line + 2][column + 2];
			let four = tabuleiro[line + 3][column + 3];
			if(one === 1 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player1 Win")
			}
			if(one === 2 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player2 Win")
			}
		}
	}
	for(let line = 0; line < 4; line++){
		for(let column = 2; column < 4; column++){
			let one = tabuleiro[line][column];
			let two = tabuleiro[line + 1][column + 1];
			let three = tabuleiro[line + 2][column + 2];
			let four = tabuleiro[line + 3][column + 3];
			if(one === 1 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player1 Win")
			}
			if(one === 2 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player2 Win")
			}
		}
	}
	return console.log("continue jogando")
}

function checkDiagonalBottomToTop(){
	
}

