let tabuleiro = [
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
];

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