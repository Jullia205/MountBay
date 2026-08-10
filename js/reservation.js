
const numberOfbuttons = document.querySelectorAll("button").length;
let pContent = document.querySelector(".description p");

const events = {
    janeiro: "Os primeiros meses do ano trazem temperaturas mais amenas e dias tranquilos, ideais para explorar a região com mais calma. Durante esse período, os visitantes podem aproveitar eventos culturais, exposições e festivais locais, além de passeios ao ar livre nos dias de clima agradável. É uma ótima época para quem prefere uma estadia mais tranquila e temperaturas confortáveis.",
    abril: "A primavera marca a chegada de dias mais ensolarados e temperaturas agradáveis, tornando esse período perfeito para atividades ao ar livre. A região ganha vida com feiras, eventos culturais, apresentações e festivais sazonais. É também uma excelente época para conhecer os pontos turísticos locais e aproveitar restaurantes e espaços ao ar livre.",
    julho: "O verão traz dias mais quentes e longos, ideais para aproveitar atividades ao ar livre e explorar as atrações da região. Durante esses meses, acontecem diversos eventos, festivais e atividades culturais que atraem moradores e visitantes. Recomendamos aproveitar as manhãs e o fim da tarde para passeios, quando as temperaturas costumam ser mais agradáveis.",
    outubro: "Com a chegada do outono, as temperaturas ficam mais amenas e a região entra em um período de celebrações e eventos especiais. Feiras, festivais culturais e atividades relacionadas às festas de fim de ano tornam os últimos meses do ano especialmente movimentados. É uma época agradável para explorar a cidade e aproveitar a atmosfera festiva antes de retornar ao conforto do hotel."
};

for(let i=0; i<numberOfbuttons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        let buttonInner = this.innerHTML;
        switch (buttonInner){
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
    });
}

