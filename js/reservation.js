//Dados de cada cabana
class Room {
    constructor(img1, mainTitle, price,quartos) {
        this.img1 = img1;
        this.mainTitle = mainTitle;
        this.price = price;
        this.quartos = quartos;
        this.servicesP = {limpeza: 50,locomocao: 40,lanches: 100,reembolso: 126}
    }
}

let room1 = new Room("cabana_casal.jpg","Cabana de Casal", 90, "1 quarto - 1 cama");
let room2 = new Room("cabana_grupo.jpg","Cabana Compartilhada", 100,"1 quarto - 4 camas");
let room3 = new Room("cabana_familiar.jpg","Cabana Familiar", 110,"2 quartos - 4 camas");

//Funcionalidades gerais da página

// PARTE QUE COLOCA LIMITE NO CAMPO DE DATA 
const dataHoje = new Date;
let dataAnoSeg = new Date;
dataAnoSeg.setFullYear(dataHoje.getFullYear()+1);

let dataTexto = dataHoje.toISOString().split("T");
let dataTextoSeg = dataAnoSeg.toISOString().split("T"); //o T tá no meio da string, a data fica só na primeira parte
let dataCheckIn = document.querySelector("#check-in");
dataCheckIn.setAttribute("min", dataTexto[0]);
dataCheckIn.setAttribute("max", dataTextoSeg[0]);

let dataCheckOut = document.querySelector("#check-out");
dataCheckIn.addEventListener("change", function (){

    let dataAmanha = new Date(dataCheckIn.value);
    dataAmanha.setDate(dataAmanha.getDate()+1);

    let dataAnoSegAm = new Date()
    dataAnoSegAm.setFullYear(dataAmanha.getFullYear()+1)

    let dataTextoAm = dataAmanha.toISOString().split("T")
    let dataTextoSegAm = dataAnoSegAm.toISOString().split("T")

    dataCheckOut.setAttribute("min", dataTextoAm[0]);
    dataCheckOut.setAttribute("max", dataTextoSegAm[0]);
})

// BOTOES DE ÉPOCA
const buttonSeason = document.querySelectorAll(".season").length;
let pContent = document.querySelector(".description p");
const events = {
    janeiro: "Os primeiros meses do ano trazem temperaturas mais amenas e dias tranquilos, ideais para explorar a região com mais calma. Durante esse período, os visitantes podem aproveitar eventos culturais, exposições e festivais locais, além de passeios ao ar livre nos dias de clima agradável. É uma ótima época para quem prefere uma estadia mais tranquila e temperaturas confortáveis.",
    abril: "A primavera marca a chegada de dias mais ensolarados e temperaturas agradáveis, tornando esse período perfeito para atividades ao ar livre. A região ganha vida com feiras, eventos culturais, apresentações e festivais sazonais. É também uma excelente época para conhecer os pontos turísticos locais e aproveitar restaurantes e espaços ao ar livre.",
    julho: "O verão traz dias mais quentes e longos, ideais para aproveitar atividades ao ar livre e explorar as atrações da região. Durante esses meses, acontecem diversos eventos, festivais e atividades culturais que atraem moradores e visitantes. Recomendamos aproveitar as manhãs e o fim da tarde para passeios, quando as temperaturas costumam ser mais agradáveis.",
    outubro: "Com a chegada do outono, as temperaturas ficam mais amenas e a região entra em um período de celebrações e eventos especiais. Feiras, festivais culturais e atividades relacionadas às festas de fim de ano tornam os últimos meses do ano especialmente movimentados. É uma época agradável para explorar a cidade e aproveitar a atmosfera festiva antes de retornar ao conforto do hotel."
};

// BOTOES DE ADICIONAR SERVICOS
const buttonAdd =  document.querySelectorAll(".add-btn").length;
let totalContent = document.querySelector("#final-price");
let price = 90;

// FUNCOES DOS BOTOES 
for(let i=0; i<buttonSeason; i++){
    document.querySelectorAll(".season")[i].addEventListener("click", function (){
        let seasonInner = this.innerHTML;
        updateP(seasonInner);
        seasonButtonAnimation(this);
    });
}
function updateP(seasonInner){
    switch (seasonInner){
        case "Janeiro a Março":
            pContent.innerHTML = events.janeiro;
            break;
        case "Abril a Junho":
            pContent.innerHTML =events.abril;
            break;
        case "Julho a Setembro":
            pContent.innerHTML = events.julho;
            break;
        case "Outubro a Dezembro":
            pContent.innerHTML = events.outubro;
            break;
        default: alert("Erro!");
    }
}
function seasonButtonAnimation(buttonClick){
    document.querySelectorAll(".season").forEach(element => {
        element.classList.remove("pressed");
        element.removeAttribute("id");
    });
    buttonClick.classList.add("pressed");
}

for(let i=0; i<buttonAdd; i++){
    document.querySelectorAll(".add-btn")[i].addEventListener("click", function(){
        let addNumber = i;
        let type = this.innerHTML;
        priceButtonAnimation(this,type);
        updateTotal(addNumber,type);
    })
}

function updateTotal(addNumber,type){
    switch(addNumber){
        case 0:
            updatePrice(prices.limpeza,type);
            break
        case 1:
            updatePrice(prices.locomocao,type);
            break
        case 2:
            updatePrice(prices.lanches,type);
            break
        case 3:
            updatePrice(prices.reembolso,type);
            break
        default: alert("Erro");
    }
}
function updatePrice(value,type){
    if(type==="+"){
        price = price+value;
    }
    else{
        price = price-value;
    }
    let newText = "R$"+" "+price;
    totalContent.textContent=newText;
}
function priceButtonAnimation(buttonClick, type){
    if(type==="+"){
        type=false;
        buttonClick.classList.add("pressed");
        buttonClick.innerHTML="-";
    }
    else{
        buttonClick.classList.remove("pressed");
        buttonClick.innerHTML="+";
        type=true;
    }
}

//MUDANDO AS CABANAS
