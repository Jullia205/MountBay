
const buttonSeason = document.querySelectorAll(".season").length;
let pContent = document.querySelector(".description p");

const events = {
    janeiro: "Os primeiros meses do ano trazem temperaturas mais amenas e dias tranquilos, ideais para explorar a região com mais calma. Durante esse período, os visitantes podem aproveitar eventos culturais, exposições e festivais locais, além de passeios ao ar livre nos dias de clima agradável. É uma ótima época para quem prefere uma estadia mais tranquila e temperaturas confortáveis.",
    abril: "A primavera marca a chegada de dias mais ensolarados e temperaturas agradáveis, tornando esse período perfeito para atividades ao ar livre. A região ganha vida com feiras, eventos culturais, apresentações e festivais sazonais. É também uma excelente época para conhecer os pontos turísticos locais e aproveitar restaurantes e espaços ao ar livre.",
    julho: "O verão traz dias mais quentes e longos, ideais para aproveitar atividades ao ar livre e explorar as atrações da região. Durante esses meses, acontecem diversos eventos, festivais e atividades culturais que atraem moradores e visitantes. Recomendamos aproveitar as manhãs e o fim da tarde para passeios, quando as temperaturas costumam ser mais agradáveis.",
    outubro: "Com a chegada do outono, as temperaturas ficam mais amenas e a região entra em um período de celebrações e eventos especiais. Feiras, festivais culturais e atividades relacionadas às festas de fim de ano tornam os últimos meses do ano especialmente movimentados. É uma época agradável para explorar a cidade e aproveitar a atmosfera festiva antes de retornar ao conforto do hotel."
};

const buttonAdd =  document.querySelectorAll(".add-btn").length;
let totalContent = document.querySelector("#final-price")
let price = 90;
const prices = {
    limpeza: 50,
    locomocao: 40,
    lanches: 100,
    reembolso: 126
}

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
        default: alert("Erro")
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
        buttonClick.classList.add(".add-pressed");
        buttonClick.innerHTML="-";
    }
    else{
        buttonClick.classList.remove(".add-pressed");
        buttonClick.innerHTML="+";
        type=true;
    }

}