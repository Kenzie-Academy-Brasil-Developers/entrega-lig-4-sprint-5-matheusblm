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
            boardLine.classList.add(`line__${j}`)
            boardLine.classList.add('line')
            boardColumn.appendChild(boardLine)
        }
    }
}

createBoard() //inserir esta chamada em um botão de start
    [0, 0, 0, 0, 0, 0],
];

function createDisk(column, line) {
    let currentColumn = document.getElementById(`column__${column}`)
    let currentLine = currentColumn.getElementById(`line__${line}`)
    let newDisk = document.createElement('div')
    newDisk.classList.add('disk')
    currentLine.appendChild(newDisk)
}

