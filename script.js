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
    let currentLine = document.querySelector(`.line__${column}x${line}`)
    let newDisk = document.createElement('div')
    newDisk.classList.add('disk')
    currentLine.appendChild(newDisk)
}