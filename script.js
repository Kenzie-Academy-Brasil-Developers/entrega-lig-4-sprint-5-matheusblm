let tabuleiro = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
];
let travar;
let newDisk;
let currentPlayer = 1;
const buttonReset = document.getElementById("buttonReset");
const buttonPlayerOne = document.getElementById("buttonPlayerOne");
const buttonPlayerTwo = document.getElementById("buttonPlayerTwo");


const playerOneName = buttonPlayerOne.addEventListener("click", function () {
	let typedText = document.getElementById("inputNameOne").value;
	let hide = document.getElementById("inputNameOne");
	hide.classList.add("hidden")
	buttonPlayerOne.classList.add("hidden")
      });

const playerTwoName = buttonPlayerTwo.addEventListener("click", function () {
	let typedText = document.getElementById("inputNameTwo").value;
	let hide = document.getElementById("inputNameTwo");
	hide.classList.add("hidden")
	buttonPlayerTwo.classList.add("hidden")
      });

const resetGame = buttonReset.addEventListener("click", function () {
    let container = document.getElementById("container")
    container.innerText = ""
    tabuleiro = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    createBoard()
    travar = undefined
});
function startScreen() {
    let startContainer = document.createElement('div')
    startContainer.classList.add('startContainerDefault')
    startContainer.setAttribute('id', 'startContainer')

    let startBackground = document.createElement('div')
    startBackground.classList.add('startBackgroundDefault')

    let startButton = document.createElement('button')
    startButton.classList.add('startButtonDefault')
    startButton.innerText = 'Start Lig-4'

    let gameName = document.createElement('h2')
    gameName.classList.add('gameNameDefault')
    gameName.innerText = 'Lig-4'

    let gameDesc = document.createElement('span')
    gameDesc.classList.add('gameDescDefault')
    gameDesc.innerText = 'Jogo Lig-4 desenvolvido para Kenzie Academy por Matheus, Lucas, Natan e Wallace.'

    document.body.appendChild(startContainer)
    startContainer.appendChild(startBackground)
    startBackground.appendChild(gameName)
    startBackground.appendChild(gameDesc)
    startBackground.appendChild(startButton)

    startButton.addEventListener('click', createBoard)
}

startScreen()

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
            travarGame('travar')
            alertWin("Jogador 1")
        }

        if (countPlayer2 === 4) {
            travarGame('travar')
            alertWin("Jogador 2")
        }
    }

}



function createBoard() {
    
    let startContainer = document.getElementById('startContainer')
    if(startContainer !==null){
    startContainer.remove()
    }
    let gameContainer = document.getElementById('container')

    for (let i = 0; i < 7; i++) {
        let boardColumn = document.createElement('div')
        boardColumn.setAttribute('id', `column__${i}`)
        boardColumn.classList.add('column')
        boardColumn.addEventListener('click', () => selectColumn(travarGame(`column__${i}`)))
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


function createDisk(id) {
	let currentLine = document.getElementById(id)
	newDisk = document.createElement('div')
	newDisk.classList.add('disk')
	currentLine.appendChild(newDisk)
}

function selectColumn(id) {
	let elemento = document.getElementById(id)
	if (currentPlayer == 1) {
		currentPlayer++;
		for (let i = 0; i < 6; i++) {
			if (elemento.children[i].lastChild == null) {
				let guardarClasse = elemento.children[i].id
				createDisk(guardarClasse)
				let pegarPosicao = elemento.children[i].id.replace(/[^0-9]/gi, "");
				tabuleiro[pegarPosicao[0]][pegarPosicao[1]] = 1
				newDisk.style.backgroundColor="blue";
                console.log(pegarPosicao[0])
                columnsIsFull(pegarPosicao[0])
                vertical()
				checkHorizontal(pegarPosicao[0], pegarPosicao[1])
                checkDiagonalTopToBottom()
	            checkDiagonalBottomToTop()
				break
			}
		}
	} else {
		for (let i = 0; i < 6; i++) {
			if (elemento.children[i].lastChild == null) {
				let guardarClasse = elemento.children[i].id
				createDisk(guardarClasse)
				let pegarPosicao = elemento.children[i].id.replace(/[^0-9]/gi, "");
				tabuleiro[pegarPosicao[0]][pegarPosicao[1]] = 2;
				newDisk.style.backgroundColor="red";
                columnsIsFull(pegarPosicao[0])
                checkHorizontal(pegarPosicao[0], pegarPosicao[1])
                checkDiagonalTopToBottom()
	            checkDiagonalBottomToTop()
				vertical()
				break
			}
		}
		currentPlayer--;
	}
}


function vertical() {
    for (let index in tabuleiro) {
        let count1 = 0
        let count2 = 0
        for (let i in tabuleiro[index]) {
            if (tabuleiro[index][i] == 1) {
                count1++
            } else {
                count1 = 0
            }

            if (tabuleiro[index][i] == 2) {
                count2++
            } else {
                count2 = 0
            }
            if(count1 === 4 || count2 === 4){
                let vitoria = count1 == 4? 'Jogador 1' : 'Jogador 2'
                travarGame('travar')
                alertWin(vitoria)
            }
        }
    }
}

function checkDiagonalTopToBottom() {
    for (let line = 0; line < 4; line++) {
        for (let column = 0; column < 4; column++) {
            let one = tabuleiro[line][column];
            let two = tabuleiro[line + 1][column + 1];
            let three = tabuleiro[line + 2][column + 2];
            let four = tabuleiro[line + 3][column + 3];
            if (one === 1 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                alertWin("Jogador 1")

            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                alertWin("Jogador 2")

            }
        }
    }
    for (let line = 0; line < 4; line++) {
        for (let column = 1; column < 4; column++) {
            let one = tabuleiro[line][column];
            let two = tabuleiro[line + 1][column + 1];
            let three = tabuleiro[line + 2][column + 2];
            let four = tabuleiro[line + 3][column + 3];
            if (one === 1 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                alertWin("Jogador 1")

            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                alertWin("Jogador 2")  
            }
        }
    }
    for (let line = 0; line < 4; line++) {
        for (let column = 2; column < 4; column++) {
            let one = tabuleiro[line][column];
            let two = tabuleiro[line + 1][column + 1];
            let three = tabuleiro[line + 2][column + 2];
            let four = tabuleiro[line + 3][column + 3];
            if (one === 1 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                alertWin("Jogador 1")
            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                alertWin("Jogador 2")
            }
        }
    }
    
}

function checkDiagonalBottomToTop() {
    for (let line = 6; line >= 3; line--) {
        for (let column = 0; column < 3; column++) {
            let one = tabuleiro[line][column];
            let two = tabuleiro[line - 1][column + 1];
            let three = tabuleiro[line - 2][column + 2];
            let four = tabuleiro[line - 3][column + 3];
            if (one === 1 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                return console.log("Player1 Win")


            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                return console.log("Player2 Win")

            }
        }
    }
    for (let line = 5; line >= 3; line--) {
        for (let column = 0; column < 4; column++) {
            let one = tabuleiro[line][column];
            let two = tabuleiro[line - 1][column + 1];
            let three = tabuleiro[line - 2][column + 2];
            let four = tabuleiro[line - 3][column + 3];
            if (one === 1 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                return console.log("Player1 Win")
            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                travarGame('travar')
                return console.log("Player2 Win")
            }
        }
    }

}

function alertWin(jogador) {
	let div = document.getElementById("container")
	let alert = document.createElement("span")
	alert.classList.add("alertWin")
	alert.append("Parabens " + jogador + " voce ganhou!")
	div.appendChild(alert)
	setTimeout(function () {
		alert.classList.add("hidden")
	}, 5000)
}

function alertErro(text) {
	let div = document.getElementById("container")
	let alert = document.createElement("span")
	alert.classList.add("alertErro")
	alert.append(text)
	div.appendChild(alert)
	setTimeout(function () {
		alert.classList.add("hidden")
	}, 2000)}


function travarGame(x){
    if(x == 'travar'){
        travar  = 'travado'
    }
    if(travar == undefined){
        return x
    }
}

function columnsIsFull(number){
    let count = 0
    for(let i = 0; i<tabuleiro[number].length; i++){
        if(tabuleiro[number][i] === 1 ||tabuleiro[number][i] === 2 ){
            count++
        }
    }
    if(count === 6){
        return alertErro("A coluna selecionada nao pode receber mais discos")
    }
}

