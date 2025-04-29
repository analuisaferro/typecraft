"use strict";
const input = document.querySelector("input");
const total2 = localStorage.getItem("total");
if (input && total2) {
    input.value = total2;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
// =====================================================
// adicionarTitulo("Exercício: 0203 - Union Types 2");
// let x: number | string = 1000;
// toNumber(x);
// function toNumber(value: string | number) {
// 	if(typeof value === "string") {
// 		return Number(value);
// 	} else if(typeof value === "number") {
// 		return value;
// 	} else {
// 		throw "value deve ser um número ou uma string!";
// 	}
// }
// =====================================================
adicionarTitulo("Type e Interface - 0204");
let total = "1000"; //---> Aceito
let preco = 1000; //  ---> Aceito
;
function preencherDados(dados) {
    let favorito = false;
    favorito = dados.genero === "Ritmo" ? true : false;
    document.body.innerHTML +=
        `<div>
		<h2>${dados.nome}</h2>
		<p>Gênero: ${dados.genero} ${favorito ? "💖" : "😊"}</p>
		<p>Free to play: ${dados.freeToPlay ? "sim" : "não"}</p>
		<p>Possui comprar internas: ${dados.comprasInternas ? "sim" : "não"}</p>
	</div>
	<hr/>`;
}
const arcaea = {
    nome: "Arcaea",
    genero: "Ritmo", //Com type Genero, não aceita MMORPG por exemplo
    freeToPlay: true,
    comprasInternas: true
};
const ff = {
    nome: "Final Fantasy VII - Rebirth",
    genero: "Mundo aberto",
    freeToPlay: false,
    comprasInternas: false
};
preencherDados(arcaea);
preencherDados(ff);
// =====================================================
adicionarTitulo("Exercício: 0205 - Arrays 2");
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    // mostrarCursos(data);
    console.log(data[0]);
}
fetchCursos();
// function mostrarCursos(cursos) {}
// =====================================================
function adicionarTitulo(titulo) {
    let body = document.querySelector('body');
    if (body) {
        let h1 = document.createElement('h1');
        h1.innerText = `${titulo}`;
        body.appendChild(h1);
    }
}
