
//WHATSAPP
function comprarProduto(produto){

let telefone = "5551980315102";

let mensagem = "Olá! Vi no site da Vou de Musa e gostaria de comprar: " + produto;

let url = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(mensagem);

window.open(url, "_blank");

}

//DEPOIMENTOS

let depoimentos = [

'⭐⭐⭐⭐⭐ "Comprei e amei! As peças são lindas!"',
'⭐⭐⭐⭐⭐ "Qualidade incrível e chegou rápido!"',
'⭐⭐⭐⭐⭐ "Atendimento maravilhoso!"',
'⭐⭐⭐⭐⭐ "Peças lindas e confortáveis!"',
'⭐⭐⭐⭐⭐ "Entrega super rápida!"',
'⭐⭐⭐⭐⭐ "Peças de qualidade!"',
'⭐⭐⭐⭐⭐ "As roupas são muito lindas!"',
'⭐⭐⭐⭐⭐ "Apaixonada por essa loja 😍"'

];

let i = 0;

function trocarDepoimento(){

document.getElementById("depoimento1").textContent = depoimentos[i];
document.getElementById("depoimento2").textContent = depoimentos[i+1];


i+=2;

if(i >= depoimentos.length){
i = 0;
}

}

setInterval(trocarDepoimento,3000);

trocarDepoimento();

let slideAtual = 0;

let slides = document.querySelectorAll(".slide");


//SLIDER
function mostrarSlide(index){

slides.forEach(slide => slide.classList.remove("ativo"));

slides[index].classList.add("ativo");

}

function mudarSlide(direcao){

slideAtual += direcao;

if(slideAtual >= slides.length){
slideAtual = 0;
}

if(slideAtual < 0){
slideAtual = slides.length - 1;
}

mostrarSlide(slideAtual);

}

mostrarSlide(slideAtual);

setInterval(function(){

mudarSlide(1);

},4000);


//CONTADOR
let tempo = 3600;

function atualizarContador(){

let minutos = Math.floor(tempo / 60);
let segundos = tempo % 60;

document.getElementById("contador").textContent =
"Promoção acaba em: " + minutos + "m " + segundos + "s";

tempo--;

}

setInterval(atualizarContador,1000);

if(tempo <= 0){
tempo = 3600;
}

