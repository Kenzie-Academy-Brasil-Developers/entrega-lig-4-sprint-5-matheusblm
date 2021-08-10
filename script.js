let tabuleiro = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

function checkHorizontal(x, y) {
    //check posições 1, 2, 3 e 4
    let countPlayer1 = 0
    let countPlayer2 = 0
    let currentPosition = Number(x)
    let yNumber = Number(y)
    for (let position = currentPosition; position > currentPosition - 4; position--) {
        countPlayer1 = 0
        countPlayer2 = 0
	
	if(position >= 0 && position <= 3){
		    
        for (let i = position; i < position + 4; i++) {
            if (tabuleiro[i][yNumber] === 1) {
                countPlayer1++
            }

            if (tabuleiro[i][yNumber] === 2) {
                countPlayer2++
            }
        }
	}
        if (countPlayer1 === 4) {
            console.log('Player One Wins!')
        }

        if (countPlayer2 === 4) {
            console.log('Player Two Wins!')
        }
    }
}



function createBoard() {
    let gameContainer = document.getElementById('container')

    for (let i = 0; i < 7; i++) {
        let boardColumn = document.createElement('div')
        boardColumn.setAttribute('id', `column__${i}`)
        boardColumn.classList.add('column')
        boardColumn.addEventListener('click', () => selectColumn(`column__${i}`))
        gameContainer.appendChild(boardColumn)

        for (let j = 0; j < 6; j++) {
            let boardLine = document.createElement('div')
            boardLine.classList.add(`line__${i}x${j}`)
            boardLine.id = `line__${i}x${j}`
            boardLine.classList.add('line')
            boardColumn.appendChild(boardLine)
        }
    }
}

createBoard() //inserir esta chamada em um botão de start

//Criar Disco
function createDisk(id) {
    let currentLine = document.getElementById(id)
    let newDisk = document.createElement('div')
    newDisk.classList.add('disk')
    currentLine.appendChild(newDisk)
}

//Selecionar coluna
function selectColumn(id){
    let elemento = document.getElementById(id)
    for(let i = 0; i < 6; i++){
        if(elemento.children[i].lastChild == null){
            let guardarClasse = elemento.children[i].id
            createDisk(guardarClasse)
            let pegarPosicao = elemento.children[i].id.replace(/[^0-9]/gi, "");
            tabuleiro[pegarPosicao[0]][pegarPosicao[1]] = 1
	    checkHorizontal(pegarPosicao[0], pegarPosicao[1])
            vertical()
	    checkDiagonalTopToBottom()
	    checkDiagonalBottomToTop()
            break
        }
    }

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


