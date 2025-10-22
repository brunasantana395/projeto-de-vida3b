const botoes = document.querySelectorAll("botao");
const textos = document.querySelectorAll(".aba- conteudo")
for(let i = 0;i <botoes.length;i++) {
botoes[i].onclick = function() {
for (let j = 0;j <botoes.lenght;j++) {
botoes[j].classlist.remove("ativo");
textos[j].classlist.add("ativo")
const botoes =document.querySelectorAll(".botao");
const textos =document.querySelectorAll(".aba-conteudo");
for (let i=0;i<botoes.length;i++) {
botoes[i].onclick=function(){
for (letj=0;J<botoes.length;j++){
botoes[j].classListremove("ativo");
textos[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}
}
const tempoObjetivo = new 