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
let namePlayerOne = ""
let namePlayerTwo = ""
let versusContainer;
let versus;
let novoJogador = 'um';
let soundBackground = document.getElementById("backgroundSound")
let enableSom = true
const musicOff = document.getElementById("musicOff");
const buttonSandwich = document.getElementById("buttonSandwich");
let somSelectPlayerOne = document.getElementById("selectDisk")
let somSelectPlayerTwo = document.getElementById("selectDisk")
let somPlayerOneWin = document.getElementById("winSound")
let somPlayerTwoWin = document.getElementById("winSound")



const changeThemeUm = document.getElementById('temaDois').addEventListener('click', function() {
    let titleDefault = document.getElementById('title')
    let titleTwo = document.getElementById('titleTema2')
    titleDefault.classList.add('hidden')
    titleTwo.classList.remove('hidden')
    somSelectPlayerOne = document.getElementById("selectNaruto")
    somSelectPlayerTwo = document.getElementById("selectSasuke")
    somPlayerOneWin = document.getElementById("winNaruto")
    somPlayerTwoWin = document.getElementById("winSasuke")
    if(namePlayerOne === "PlayerOne"){
        namePlayerOne = "Naruto"
    }
    if(namePlayerTwo === "PlayerTwo"){
        namePlayerTwo = "Sasuke"
    }
    videoNaruto()
    versusContainer.innerHTML = "";
    container.innerText = ""
    createBoard()

})
const changeThemeDois = document.getElementById('temaUm').addEventListener('click', function() {
    let titleDefault = document.getElementById('title')
    let titleTwo = document.getElementById('titleTema2')
    titleDefault.classList.remove('hidden')
    titleTwo.classList.add('hidden')
    somSelectPlayerOne = document.getElementById("selectDisk")
    somSelectPlayerTwo = document.getElementById("selectDisk")
    somPlayerOneWin = document.getElementById("winSound")
    somPlayerTwoWin = document.getElementById("winSound")
    
})


const musicDisable = musicOff.addEventListener("click", function(){
    if(enableSom === true){
    soundBackground.pause()
    soundBackground.currentTime = 0
    enableSom = false
    musicOff.classList.toggle("sound-enable");
    musicOff.classList.toggle("sound-disable");

    }else{
    soundBackground.play()
    enableSom = true
    musicOff.classList.toggle("sound-enable");
    musicOff.classList.toggle("sound-disable");
    }

})

const sandwichButton = buttonSandwich.addEventListener('click', function() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
});

const resetGame = buttonReset.addEventListener("click", function() {
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
    currentPlayer = 1
    versusContainer.innerHTML = "";
    createBoard()
    travar = undefined
});



function createBoard() {

    let startContainer = document.getElementById('startContainer')
    let credits = document.querySelector('.gameCreditDefault')
    if (startContainer !== null && credits !== null) {
        credits.classList.remove("gameCreditDefault")
        startContainer.classList.add("getOut")
        startContainer.classList.remove("startContainerDefault")
        startContainer.classList.add("getOut")
    }
    let gameContainer = document.getElementById('container')
    let floatDisk = document.createElement('div')
    floatDisk.classList.add('hidden', 'disk')
    floatDisk.setAttribute('id', 'floatDisk')
    gameContainer.appendChild(floatDisk)

    for (let i = 0; i < 7; i++) {
        let boardColumn = document.createElement('div')
        boardColumn.setAttribute('id', `column__${i}`)
        boardColumn.classList.add('column')
        boardColumn.addEventListener('click', () => selectColumn(travarGame(`column__${i}`)))
        boardColumn.addEventListener('mouseenter', () => diskPremove(boardColumn.id))
        boardColumn.addEventListener('mouseleave', () => premoveRemove())
        gameContainer.appendChild(boardColumn)

        for (let j = 0; j < 6; j++) {
            let boardLine = document.createElement('div')
            boardLine.classList.add(`line__${i}x${j}`)
            boardLine.id = `line__${i}x${j}`
            boardLine.classList.add('line')
            boardColumn.appendChild(boardLine)
        }
    }
    showPlayerTurn();

}

function createDisk(id, column, line) {
    let currentLine = document.getElementById(id)
    newDisk = document.createElement('div')
    newDisk.classList.add('disk')
    newDisk.classList.add(column + "x" + line)
    currentLine.appendChild(newDisk)
}

function selectColumn(id) {
    let elemento = document.getElementById(id)
    verificarTudo(elemento, novoJogador)
    if (currentPlayer == 1) {
        currentPlayer++;
        for (let i = 0; i < 6; i++) {
            if (elemento !== null) {
                novoJogador = 'dois'
                if (elemento.children[i].lastChild == null) {
                    let guardarClasse = elemento.children[i].id
                    let pegarPosicao = elemento.children[i].id.replace(/[^0-9]/gi, "");
                    createDisk(guardarClasse, pegarPosicao[0], pegarPosicao[1])
                    tabuleiro[pegarPosicao[0]][pegarPosicao[1]] = 1
                    newDisk.classList.add("playerOne");
                    columnsIsFull(pegarPosicao[0])
                    versus.classList.add("versus1Change")
                    audioSelectDisk(somSelectPlayerOne)
                    vertical()
                    checkHorizontal(pegarPosicao[0], pegarPosicao[1])
                    checkDiagonalTopToBottom()
                    checkDiagonalBottomToTop()
                    empate()
                    setTimeout(function() {
                        versus.classList.toggle("versus1Change")
                        versus.classList.toggle("versus2")
                        versus.classList.toggle("versus1")
                    }, 300)
                    break
                }
            }
        }
    } else {
        for (let i = 0; i < 6; i++) {
            if (elemento !== null) {
                novoJogador = 'um'
                if (elemento.children[i].lastChild == null) {
                    let guardarClasse = elemento.children[i].id
                    let pegarPosicao = elemento.children[i].id.replace(/[^0-9]/gi, "");
                    tabuleiro[pegarPosicao[0]][pegarPosicao[1]] = 2;
                    createDisk(guardarClasse, pegarPosicao[0], pegarPosicao[1])
                    newDisk.classList.add("playerTwo");
                    columnsIsFull(pegarPosicao[0])
                    versus.classList.add("versus2Change")
                    audioSelectDisk(somSelectPlayerTwo)
                    checkHorizontal(pegarPosicao[0], pegarPosicao[1])
                    checkDiagonalTopToBottom()
                    checkDiagonalBottomToTop()
                    vertical()
                    empate()
                    setTimeout(function() {
                        versus.classList.remove("versus2Change")
                        versus.classList.toggle("versus2")
                        versus.classList.toggle("versus1")
                    }, 300)
                    break
                }
            }
        }
        currentPlayer = 1;
    }
    document.getElementById('floatDisk').classList.remove('playerOne', 'playerTwo')
    diskPremove(id)
}


function startScreen() {
    let startContainer = document.createElement('div')
    startContainer.classList.add('startContainerDefault')
    startContainer.setAttribute('id', 'startContainer')

    let startBackground = document.createElement('div')
    startBackground.classList.add('startBackgroundDefault')

    let inputNameOne = document.createElement("input")
    inputNameOne.classList.add("inputNameOne")
    inputNameOne.placeholder = "Nome do jogador um";
    inputNameOne.classList.add("on")

    let inputNameTwo = document.createElement("input")
    inputNameTwo.classList.add("inputNameTwo")
    inputNameTwo.placeholder = "Nome do jogador dois";
    inputNameTwo.classList.add("on")

    let cpuButton = document.createElement('button')
    cpuButton.classList.add('cpuButtonDefault')
    cpuButton.innerText = 'Comecar o Jogo!'


    let gameName = document.createElement('h2')
    gameName.classList.add('gameNameDefault')
    gameName.innerText = 'Lig-4'

    let gameRules = document.createElement('span')
    gameRules.classList.add('gameRulesDefault')
    gameRules.innerText = 'Você deve ligar 4 discos na horizontal, vertical ou diagonal \n \n O Jogador 1 irá revezar turnos com o Jogador 2 \n \n Não deixe seu oponente fazer uma sequencia de 4!'

    let gameCredit = document.createElement('span')
    gameCredit.classList.add('gameCreditDefault')
    gameCredit.innerText = 'Jogo Lig-4 desenvolvido para Kenzie Academy por Matheus, Lucas, Natan e Wallace.'

    document.body.appendChild(startContainer)
    startContainer.appendChild(startBackground)
    startBackground.appendChild(gameName)
    startBackground.appendChild(gameRules)
    startBackground.appendChild(inputNameOne)
    startBackground.appendChild(inputNameTwo)
    startBackground.appendChild(cpuButton)
    startBackground.appendChild(gameCredit)

    cpuButton.addEventListener('click', function() {
        let typedTextOne = document.querySelector(".inputNameOne").value;
        let typedTextTwo = document.querySelector(".inputNameTwo").value;
        if (typedTextOne === "") {
                namePlayerOne = "PlayerOne"
        } else {
            namePlayerOne = typedTextOne
        }
        if (typedTextTwo === "") {
            namePlayerTwo = "PlayerTwo"
        } else {
            namePlayerTwo = typedTextTwo
        }
        audioBackGround()
        createBoard()

    });
}

startScreen()

function checkHorizontal(x, y) {
    let countPlayer1 = 0
    let countPlayer2 = 0
    let currentPosition = Number(x)
    let yNumber = Number(y)
    let arrayPlayerone = []
    let arrayPlayerTwo = []

    for (let position = currentPosition; position > currentPosition - 4; position--) {
        countPlayer1 = 0
        countPlayer2 = 0

        if (position >= 0 && position <= 3) {

            for (let i = position; i < position + 4; i++) {
                if (tabuleiro[i][yNumber] === 1) {
                    arrayPlayerone.push([i, yNumber])
                    countPlayer1++
                }

                if (tabuleiro[i][yNumber] === 2) {
                    arrayPlayerTwo.push([i, yNumber])
                    countPlayer2++
                }
            }
            if (countPlayer1 === 4) {
                let oneDisk = document.getElementsByClassName(arrayPlayerone[0][0] + "x" + arrayPlayerone[0][1])[0];
                let twoDisk = document.getElementsByClassName(arrayPlayerone[1][0] + "x" + arrayPlayerone[1][1])[0];
                let threeDisk = document.getElementsByClassName(arrayPlayerone[2][0] + "x" + arrayPlayerone[2][1])[0];
                let fourDisk = document.getElementsByClassName(arrayPlayerone[3][0] + "x" + arrayPlayerone[3][1])[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerOneWin)
                premoveRemove()
                travarGame('travar')
                alertWinOne(namePlayerOne)
            } else if (countPlayer2 === 4) {
                let oneDisk = document.getElementsByClassName(arrayPlayerTwo[0][0] + "x" + arrayPlayerTwo[0][1])[0];
                let twoDisk = document.getElementsByClassName(arrayPlayerTwo[1][0] + "x" + arrayPlayerTwo[1][1])[0];
                let threeDisk = document.getElementsByClassName(arrayPlayerTwo[2][0] + "x" + arrayPlayerTwo[2][1])[0];
                let fourDisk = document.getElementsByClassName(arrayPlayerTwo[3][0] + "x" + arrayPlayerTwo[3][1])[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerTwoWin)
                premoveRemove()
                travarGame('travar')
                alertWinTwo(namePlayerTwo)
            } else {
                arrayPlayerone = []
                arrayPlayerTwo = []
            }
        }
    }
}

function vertical() {
    for (let index in tabuleiro) {
        let count1 = 0
        let count2 = 0
        let arrayPlayerone = []
        let tearrayPlayerTwo = []
        for (let i in tabuleiro[index]) {
            if (tabuleiro[index][i] == 1) {
                arrayPlayerone.push([index, i])
                count1++
            } else {
                count1 = 0
            }

            if (tabuleiro[index][i] == 2) {
                tearrayPlayerTwo.push([index, i])
                count2++
            } else {
                count2 = 0
            }

            if (count1 === 4 || count2 === 4) {
                let vitoria = count1 == 4 ? namePlayerOne : namePlayerTwo
                if (arrayPlayerone.length === 4) {
                    let oneDisk = document.getElementsByClassName(arrayPlayerone[0][0] + "x" + arrayPlayerone[0][1])[0];
                    let twoDisk = document.getElementsByClassName(arrayPlayerone[1][0] + "x" + arrayPlayerone[1][1])[0];
                    let threeDisk = document.getElementsByClassName(arrayPlayerone[2][0] + "x" + arrayPlayerone[2][1])[0];
                    let fourDisk = document.getElementsByClassName(arrayPlayerone[3][0] + "x" + arrayPlayerone[3][1])[0];
                    oneDisk.classList.add("winAnimation")
                    twoDisk.classList.add("winAnimation")
                    threeDisk.classList.add("winAnimation")
                    fourDisk.classList.add("winAnimation")
                    audioWin(somPlayerOneWin)
                    alertWinOne(vitoria)
                    premoveRemove()
                } else {
                    let oneDisk = document.getElementsByClassName(tearrayPlayerTwo[0][0] + "x" + tearrayPlayerTwo[0][1])[0];
                    let twoDisk = document.getElementsByClassName(tearrayPlayerTwo[1][0] + "x" + tearrayPlayerTwo[1][1])[0];
                    let threeDisk = document.getElementsByClassName(tearrayPlayerTwo[2][0] + "x" + tearrayPlayerTwo[2][1])[0];
                    let fourDisk = document.getElementsByClassName(tearrayPlayerTwo[3][0] + "x" + tearrayPlayerTwo[3][1])[0];
                    oneDisk.classList.add("winAnimation")
                    twoDisk.classList.add("winAnimation")
                    threeDisk.classList.add("winAnimation")
                    fourDisk.classList.add("winAnimation")
                    audioWin(somPlayerTwoWin)
                    alertWinTwo(vitoria)
                    premoveRemove()
                }
                travarGame('travar')
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
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line + 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line + 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line + 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerOneWin)
                travarGame('travar')
                alertWinOne(namePlayerOne)

            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line + 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line + 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line + 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerTwoWin)
                travarGame('travar')
                alertWinTwo(namePlayerTwo)

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
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line + 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line + 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line + 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerOneWin)
                travarGame('travar')
                alertWinOne(namePlayerOne)

            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line + 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line + 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line + 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerTwoWin)
                travarGame('travar')
                alertWinTwo(namePlayerTwo)
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
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line + 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line + 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line + 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerOneWin)
                travarGame('travar')
                alertWinOne(namePlayerOne)
            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line + 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line + 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line + 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerTwoWin)
                travarGame('travar')
                alertWinTwo(namePlayerTwo)
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
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line - 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line - 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line - 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerOneWin)
                travarGame('travar')
                alertWinOne(namePlayerOne)


            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line - 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line - 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line - 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerTwoWin)
                travarGame('travar')
                alertWinTwo(namePlayerTwo)

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
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line - 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line - 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line - 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerOneWin)
                travarGame('travar')
                alertWinOne(namePlayerOne)
            }
            if (one === 2 && one !== 0 && one === two && one === three && one === four) {
                let oneDisk = document.getElementsByClassName(line + "x" + column)[0];
                let twoDisk = document.getElementsByClassName((line - 1) + "x" + (column + 1))[0];
                let threeDisk = document.getElementsByClassName((line - 2) + "x" + (column + 2))[0];
                let fourDisk = document.getElementsByClassName((line - 3) + "x" + (column + 3))[0];
                oneDisk.classList.add("winAnimation")
                twoDisk.classList.add("winAnimation")
                threeDisk.classList.add("winAnimation")
                fourDisk.classList.add("winAnimation")
                audioWin(somPlayerTwoWin)
                travarGame('travar')
                alertWinTwo(namePlayerTwo)
            }
        }
    }

}

function alertWinOne(jogador) {
    let div = document.getElementById("container")
    let alert = document.createElement("span")
    alert.classList.add("alertWinOne")
    alert.append("Parabens " + jogador + " voce ganhou!")
    div.appendChild(alert)
    setTimeout(function() {
        alert.classList.add("hidden")
    }, 5000)
}

function alertWinTwo(jogador) {
    let div = document.getElementById("container")
    let alert = document.createElement("span")
    alert.classList.add("alertWinTwo")
    alert.append("Parabens " + jogador + " voce ganhou!")
    div.appendChild(alert)
    setTimeout(function() {
        alert.classList.add("hidden")
    }, 5000)
}

function alertErro(text) {
    let div = document.getElementById("container")
    let alert = document.createElement("span")
    alert.classList.add("alertErro")
    alert.append(text)
    div.appendChild(alert)
    setTimeout(function() {
        alert.classList.add("hidden")
    }, 2000)
}

function travarGame(x) {
    if (x == 'travar') {
        travar = 'travado'
    }
    if (travar == undefined) {
        return x
    }
}

function columnsIsFull(number) {
    let count = 0
    for (let i = 0; i < tabuleiro[number].length; i++) {
        if (tabuleiro[number][i] === 1 || tabuleiro[number][i] === 2) {
            count++
        }
    }
    if (count === 6) {
        return alertErro("A coluna nao pode receber mais discos")
    }
}

function showPlayerTurn() {
    versusContainer = document.getElementById("versusContainer");
    let player1Container = document.createElement("div");
    let player2Container = document.createElement("div");
    let diskP1 = document.createElement("div");
    let diskP2 = document.createElement("div");
    versus = document.createElement("div");

    player1Container.classList.add("playerContainer", "playerOneBackground")
    player2Container.classList.add("playerContainer", "playerTwoBackground")
    diskP1.classList.add("disk", "playerOne");
    diskP2.classList.add("disk", "playerTwo");
    versus.classList.add("versus1");

    versus.innerText = "Go!"
    player1Container.appendChild(diskP1);
    player1Container.append(namePlayerOne);
    player2Container.appendChild(diskP2);
    player2Container.append(namePlayerTwo);


    versusContainer.appendChild(player1Container);
    versusContainer.appendChild(versus);
    versusContainer.appendChild(player2Container);


}

//Eventlistener para identificar se mouse está sobre uma coluna e rodar diskPremove de acordo com a coluna

function diskPremove(currentColumn) {
    if (travar === "travado") {
        premoveRemove()
    } else {
        if (currentColumn != null) {
            let whoseTurn
            if (currentPlayer === 1) {
                whoseTurn = 'One'
            } else if (currentPlayer === 2) {
                whoseTurn = 'Two'
            }

            let columnPosition = document.getElementById(currentColumn).getBoundingClientRect()

            let floatDisk = document.getElementById('floatDisk')
            floatDisk.classList.remove('hidden')
            floatDisk.classList.add('disk', `player${whoseTurn}`, 'premove')

            floatDisk.style.position = 'fixed'
            floatDisk.style.top = columnPosition.top - 40 + 'px'
            floatDisk.style.left = columnPosition.left + 5 + 'px'
        }
    }
}

function premoveRemove() {
    if (travar === "travado") {
        let premoveDisk = document.getElementById('floatDisk')
        premoveDisk.classList.toggle('hidden')
    }
}

function verificarTudo(element, local) {
    if (element != null) {
        if ((element.children[5].lastChild == null) == false) {
            if (local == 'um') {
                currentPlayer = 2
                return alertErro("A coluna nao pode receber mais discos")
            } else {
                currentPlayer = 1
                return alertErro("A coluna nao pode receber mais discos")
            }
        }
    }
}

function audioBackGround() {
    if (enableSom == true) {
        soundBackground.loop = true
        soundBackground.play()
        soundBackground.volume = 0.1
    }
}

function audioSelectDisk(sound) {
    if (enableSom == true) {
        sound.pause()
        sound.currentTime = 0
        sound.play()
        sound.volume = 0.1
    }
}


function audioWin (sound){
    if(enableSom == true){
    sound.play()
    sound.volume = 0.09
    }
}

function empate() {
    let contandoEmpate = 0
    for (let i in tabuleiro) {
        if (tabuleiro[i][5] !== 0) {
            contandoEmpate++
        }
    }

    if (contandoEmpate == 7) {
        travarGame('travar')
        return alertErro("Empatou!")
    }
}

function videoNaruto() {
    let video = document.getElementById("backgroundVideo")
        video.pause()
        video.currentTime = 0
        video.play()
        video.volume = 0.1
}


