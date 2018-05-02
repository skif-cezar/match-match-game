let count = 0;
function startGame(number_game, back){
    if(number_game === 24) {
        for (let i = 1; i < 25; i++) {
            let mainDiv = document.createElement('div');
            let deck = document.getElementById('deck');
            mainDiv.className = "card";
            if (i < 3) {
                mainDiv.setAttribute('type', '1');
            } else if (i > 2 && i < 5) {
                mainDiv.setAttribute('type', '2');
            } else if (i > 4 && i < 7) {
                mainDiv.setAttribute('type', '3');
            } else if (i > 6 && i < 9) {
                mainDiv.setAttribute('type', '4');
            } else if (i > 8 && i < 11) {
                mainDiv.setAttribute('type', '5');
            } else if (i > 10 && i < 13) {
                mainDiv.setAttribute('type', '6');
            } else if (i > 12 && i < 15) {
                mainDiv.setAttribute('type', '7');
            } else if (i > 14 && i < 17) {
                mainDiv.setAttribute('type', '8');
            } else if (i > 16 && i < 19) {
                mainDiv.setAttribute('type', '9');
            } else if (i > 18 && i < 21) {
                mainDiv.setAttribute('type', '10');
            } else if (i > 20 && i < 23) {
                mainDiv.setAttribute('type', '11');
            } else if (i > 22 && i < 25) {
                mainDiv.setAttribute('type', '12');
            }
            deck.appendChild(mainDiv);
        }
    } if(number_game === 18) {
        for (let i = 1; i < 19; i++) {
            let mainDiv = document.createElement('div');
            let deck = document.getElementById('deck');
            mainDiv.className = "card";
            if (i < 3) {
                mainDiv.setAttribute('type', '1');
            } else if (i > 2 && i < 5) {
                mainDiv.setAttribute('type', '2');
            } else if (i > 4 && i < 7) {
                mainDiv.setAttribute('type', '3');
            } else if (i > 6 && i < 9) {
                mainDiv.setAttribute('type', '4');
            } else if (i > 8 && i < 11) {
                mainDiv.setAttribute('type', '5');
            } else if (i > 10 && i < 13) {
                mainDiv.setAttribute('type', '6');
            } else if (i > 12 && i < 15) {
                mainDiv.setAttribute('type', '7');
            } else if (i > 14 && i < 17) {
                mainDiv.setAttribute('type', '8');
            } else if (i > 16 && i < 19) {
                mainDiv.setAttribute('type', '9');
            }
            deck.appendChild(mainDiv);
        }
    }
    if(number_game === 10) {
        for (let i = 1; i < 11; i++) {
            let mainDiv = document.createElement('div');
            let deck = document.getElementById('deck');
            mainDiv.className = "card";
            if (i < 3) {
                mainDiv.setAttribute('type', '1');
            } else if (i > 2 && i < 5) {
                mainDiv.setAttribute('type', '2');
            } else if (i > 4 && i < 7) {
                mainDiv.setAttribute('type', '3');
            } else if (i > 6 && i < 9) {
                mainDiv.setAttribute('type', '4');
            } else if (i > 8 && i < 11) {
                mainDiv.setAttribute('type', '5');
            }
            deck.appendChild(mainDiv);
        }
    }
    if(back === 'url("images/background1.jpg")') {
        let card = document.getElementsByClassName("card");
        let cards = [...card];
        for (var i = 0; i < cards.length; i++){
            cards[i].style.background='url(images/background1.jpg)';
        }
    }
    if(back === 'url("images/background2.jpg")') {
        let card = document.getElementsByClassName("card");
        let cards = [...card];
        for (var i = 0; i < cards.length; i++){
            cards[i].style.background='url(images/background2.jpg)';
        }
    }
    document.getElementById('play').addEventListener("click", ()=>{StartStop()});
    var openedCards = [];

    var displayCard = function (){
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
    };

    let card = document.getElementsByClassName("card");
    let cards = [...card];
    for (var i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", displayCard);
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const deck = document.querySelector(".deck");
    cards = shuffle(cards);
    //remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("disabled");
    }

    shuffle(cards);
    cards[0].onclick = (e) => {
        let num=0;
        cards[0].style.background = 'yellow';
        cardOpen(e.target);
    };
    cards[1].onclick = (e) => {
        let num=1;
        cards[1].style.background = 'yellow';
        cardOpen(e.target);
    };
    cards[2].onclick = (e) => {
        let num=2;
        cards[2].style.background = 'black';
        cardOpen(e.target);
    };
    cards[3].onclick = (e) => {
        let num=3;
        cards[3].style.background = 'black';
        cardOpen(e.target);
    };
    cards[4].onclick = (e) => {
        let num=4;
        cards[4].style.background = 'blue';
        cardOpen(e.target);

    };
    cards[5].onclick = (e) => {
        let num=5;
        cards[5].style.background = 'blue';
        cardOpen(e.target);
    };
    cards[6].onclick = (e) => {
        let num=6;
        cards[6].style.background = '#E486C8';
        cardOpen(e.target);
    };
    cards[7].onclick = (e) => {
        let num=7;
        cards[7].style.background = '#E486C8';
        cardOpen(e.target);
    };
    cards[8].onclick = (e) => {
        let num=8;
        cards[8].style.background = '#8AE499';
        cardOpen(e.target);
    };
    cards[9].onclick = (e) => {
        let num=9;
        cards[9].style.background = '#8AE499';
        cardOpen(e.target);
    };
    cards[10].onclick = (e) => {
        let num=10;
        cards[10].style.background = '#1CE4D3';
        cardOpen(e.target);
    };
    cards[11].onclick = (e) => {
        let num=11;
        cards[11].style.background = '#1CE4D3';
        cardOpen(e.target);
    };
    cards[12].onclick = (e) => {
        let num=12;
        cards[12].style.background = '#E48720';
        cardOpen(e.target);
    };
    cards[13].onclick = (e) => {
        let num=13;
        cards[13].style.background = '#E48720';
        cardOpen(e.target);
    };
    cards[14].onclick = (e) => {
        let num=14;
        cards[14].style.background = '#02E440';
        cardOpen(e.target);
    };
    cards[15].onclick = (e) => {
        let num=15;
        cards[15].style.background = '#02E440';
        cardOpen(e.target);
    };
    cards[16].onclick = (e) => {
        let num=16;
        cards[16].style.background = '#BA6600';
        cardOpen(e.target);
    };
    cards[17].onclick = (e) => {
        let num=17;
        cards[17].style.background = '#BA6600';
        cardOpen(e.target);
    };
    cards[18].onclick = (e) => {
        let num=18;
        cards[18].style.background = '#95E4D2';
        cardOpen(e.target);
    };
    cards[19].onclick = (e) => {
        let num=19;
        cards[19].style.background = '#95E4D2';
        cardOpen(e.target);
    };
    cards[20].onclick = (e) => {
        let num=20;
        cards[20].style.background = '#809DE4';
        cardOpen(e.target);
    };
    cards[21].onclick = (e) => {
        let num=21;
        cards[21].style.background = '#809DE4';
        cardOpen(e.target);
    };
    cards[22].onclick = (e) => {
        let num=22;
        cards[22].style.background = '#E4E5F0';
        cardOpen(e.target);
    };
    cards[23].onclick = (e) => {
        let num=23;
        cards[23].style.background = '#E4E5F0';
        cardOpen(e.target);
    };

    function cardOpen(cardElem) {
        openedCards.push(cardElem);
        var len = openedCards.length;
        let card = document.getElementsByClassName("card");
        let cards = [...card];
        if(len === 2) {
            for(let i =0; i < cards.length; i++) {
                cards[i].classList.add('disabled');
            }
        }

        setTimeout(function(){
            if(len === 2){

                if(openedCards[0].style.background === openedCards[1].style.background){
                    openedCards[0].classList.add("close");
                    openedCards[1].classList.add("close");
                    openedCards[0].classList.remove("show", "open");
                    openedCards[1].classList.remove("show", "open");
                    for(let i =0; i < cards.length; i++) {
                        cards[i].classList.remove('disabled');
                    }
                    openedCards=[];
                    count++;
                    if(count == number_game/2) {
                        pause();
                        count = 0;
                        alert('You are win!!!');

                            let obj = JSON.parse(localStorage.getItem(`All User`));
                            let arUsers = [];
                            for(let i=0;i<obj.length;i++){
                                arUsers.push(obj[i]);
                            }
                            for(let i =0;i<arUsers.length; i++){
                                if(arUsers[i].FirstName === firstNameLogin.value){
                                    if(arUsers[i].Email === emailLogin.value){
                                        if(number_game === 10){
                                            if(arUsers[i].TenLength === 0){
                                                arUsers[i].TenLength = readout;
                                            }
                                            if(arUsers[i].TenLength > readout){
                                                arUsers[i].TenLength = readout;
                                            }
                                        }
                                        if(number_game === 18){
                                            if(arUsers[i].EighteenLength === 0){
                                                arUsers[i].EighteenLength = readout;
                                            }
                                            if(arUsers[i].EighteenLength > readout){
                                                arUsers[i].EighteenLength = readout;
                                            }
                                        }
                                        if(number_game === 24){
                                            if(arUsers[i].TwentyFourLength === 0){
                                                arUsers[i].TwentyFourLength = readout;
                                            }
                                            if(arUsers[i].TwentyFourLength > readout){
                                                arUsers[i].TwentyFourLength = readout;
                                            }
                                        }
                                        obj = JSON.stringify(arUsers);
                                        localStorage.setItem(`All User`, obj)
                                    }
                                }
                            }
                    }
                } else {
                    if(back === 'url("images/background1.jpg")') {
                        openedCards[0].classList.value='card';
                        openedCards[0].style.background = 'url(images/background1.jpg)';
                        openedCards[1].classList.value='card';
                        openedCards[1].style.background = 'url(images/background1.jpg)';
                        for(let i =0; i < cards.length; i++) {
                            cards[i].classList.remove('disabled');
                        }
                        openedCards=[];
                    } else if (back === 'url("images/background2.jpg")') {
                        openedCards[0].classList.value='card';
                        openedCards[0].style.background = 'url(images/background2.jpg)';
                        openedCards[1].classList.value='card';
                        openedCards[1].style.background = 'url(images/background2.jpg)';
                        for(let i =0; i < cards.length; i++) {
                            cards[i].classList.remove('disabled');
                        }
                        openedCards=[];
                    }

                }

            }

        },400);
    }
}

