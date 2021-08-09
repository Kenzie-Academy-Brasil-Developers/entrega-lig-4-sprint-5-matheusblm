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
        boardColumn.setAttribute('id', `column__${i+1}`)
        boardColumn.classList.add('column')
        gameContainer.appendChild(boardColumn)

        for (let j = 0; j < 6; j++) {
            let boardLine = document.createElement('div')
            boardLine.setAttribute('id', `line__${j+1}`)
            boardLine.classList.add('line')
            boardColumn.appendChild(boardLine)
        }
    }
}

createBoard() //inserir esta chamada em um botão de start
    [0, 0, 0, 0, 0, 0],

function createDisk(column, line) {
    let currentColumn = document.getElementById(`column__${column}`)
    let currentLine = currentColumn.getElementById(`line__${line}`)
    let newDisk = document.createElement('div')
    newDisk.classList.add('disk')
    currentLine.appendChild(newDisk)
}


//Checagem da vertical

function vertical(){
    let count1 = 0
    let count2 = 0
    for (let index in tabuleiro){
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
                alert('Vitoria!')
            }
        }
    }
}
