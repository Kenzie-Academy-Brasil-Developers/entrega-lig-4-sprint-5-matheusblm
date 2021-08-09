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
    let currentPosition = x
    for (let position = currentPosition; position > currentPosition - 4; position--) {
        countPlayer1 = 0
        countPlayer2 = 0
        for (let i = position; i < position + 4; i++) {
            if (tabuleiro[i][y] === 1) {
                countPlayer1++
            }

            if (tabuleiro[i][y] === 2) {
                countPlayer2++
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