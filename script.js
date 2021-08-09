let tabuleiro = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

function createDisk(column, line) {
    let currentColumn = document.getElementById(`column__${column}`)
    let currentLine = currentColumn.getElementsByClassName(`line__${line}`)
    let newDisk = document.createElement('div')
    newDisk.classList.add('disk')
    currentLine.appendChild(newDisk)
}