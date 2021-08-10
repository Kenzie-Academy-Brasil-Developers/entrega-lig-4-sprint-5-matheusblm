let tabuleiro = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function createBoard() {
    let gameContainer = document.getElementById('container')

    for (let i = 0; i < 7; i++) {
        let boardColumn = document.createElement('div')
        boardColumn.setAttribute('id', `column__${i}`)
        boardColumn.classList.add('column')
        gameContainer.appendChild(boardColumn)

        for (let j = 0; j < 6; j++) {
            let boardLine = document.createElement('div')
            boardLine.classList.add(`line__${i}x${j}`)
            boardLine.classList.add('line')
            boardColumn.appendChild(boardLine)
        }
    }
}

createBoard() //inserir esta chamada em um botão de start


function createDisk(column, line) {
    let currentLine = document.querySelector(`.line__${column}x${line}`)
    let newDisk = document.createElement('div')
    newDisk.classList.add('disk')
    currentLine.appendChild(newDisk)
}

//Checagem da vertical
function vertical(){
    for (let index in tabuleiro){
        let count1 = 0
        let count2 = 0
        for(let i in tabuleiro[index]){
            if(tabuleiro[index][i] == 1){
                count1++
            }else{
                count1 = 0
            }

            if(tabuleiro[index][i] == 2){
                count2++
            }else{
                count2 = 0
            }

            if(count1 === 4 || count2 === 4){
                let vitoria = count1 == 4? 'Jogador 1' : 'Jogador 2'
                alertWin(vitoria)
            }
        }
    }
}

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
	for(let line = 6; line >= 3; line--){
		for(let column = 0; column < 3 ; column++){
			let one = tabuleiro[line][column];
			let two = tabuleiro[line - 1][column + 1];
			let three = tabuleiro[line - 2][column + 2];
			let four = tabuleiro[line - 3][column + 3];
			if(one === 1 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player1 Win")
			}
			if(one === 2 && one !== 0 && one === two && one === three && one === four){
				return console.log("Player2 Win")
			}
		}
	}
	for(let line = 5; line >= 3; line--){
		for(let column = 0; column < 4 ; column++){
			let one = tabuleiro[line][column];
			let two = tabuleiro[line - 1][column + 1];
			let three = tabuleiro[line - 2][column + 2];
			let four = tabuleiro[line - 3][column + 3];
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

function alertWin(jogador){
	let div = document.getElementById("container")
	let alert = document.createElement("span")
	alert.classList.add("alertWin")
	alert.append("Parabens " + jogador + " voce ganhou!")
	div.appendChild(alert)
	setTimeout(function(){
		alert.classList.add("hidden")
		}, 5000)
}

function alertErro(){
	let div = document.getElementById("container")
	let alert = document.createElement("span")
	alert.classList.add("alertErro")
	alert.append("A coluna selecionada nao pode receber mais discos")
	div.appendChild(alert)
	setTimeout(function(){
		alert.classList.add("hidden")
		}, 6000)
}

