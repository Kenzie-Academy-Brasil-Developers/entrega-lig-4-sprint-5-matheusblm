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
                let vitoria = count1 == 4? 'Jogador 1 Venceu!' : 'Jogador 2 Venceu!'
                alert(vitoria)
            }
        }
    }
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

