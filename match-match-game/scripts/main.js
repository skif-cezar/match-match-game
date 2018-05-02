document.getElementById('register').onclick = function() {
    document.getElementById('rules').style.display = 'none';
    document.getElementById('field-of-the-game').style.display = 'none';
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('top-players').style.display = 'none';
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('registration').style.display = 'block';
};
document.getElementById('form-button-sign-in').onclick = function() {
    document.getElementById('rules').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('field-of-the-game').style.display = 'none';
    document.getElementById('top-players').style.display = 'none';
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('sign-in').style.display = 'block';
};
document.getElementById('menu-top-players').onclick = function() {
    document.getElementById('rules').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('field-of-the-game').style.display = 'none';
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('top-players').style.display = 'block';
    funTopPlayer();
};
document.getElementById('description').onclick = function() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('field-of-the-game').style.display = 'none';
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('top-players').style.display = 'none';
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('rules').style.display = 'block';
};
document.getElementById('newGame').onclick = function() {
    document.getElementById('rules').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('field-of-the-game').style.display = 'none';
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('level-selection').style.display = 'block';
    document.getElementById('top-players').style.display = 'none';
};


let number_game;
let game1 = document.getElementById('game1');

game1.addEventListener("click", ()=>{
    number_game = 10;
    document.getElementById('deck').style.width = '1000px';
});
document.getElementById('game2').addEventListener("click", ()=>{
    number_game = 18;
    document.getElementById('deck').style.width = '1200px';
});
document.getElementById('game3').addEventListener("click", ()=>{
    number_game = 24;
    document.getElementById('deck').style.width = '1600px';
});

var back ='';
document.getElementById('back1').onclick = function() {
    back = 'url("images/background1.jpg")';
};

document.getElementById('back2').onclick = function() {
    back = 'url("images/background2.jpg")';
};

document.getElementById('play').addEventListener("click", ()=>{
    clearСlock();
    pause();
    if(number_game === undefined || back === '') {
        alert('Choose a Skirt type and Game Difficulty');
    } else {
        document.getElementById('rules').style.display = 'none';
        document.getElementById('registration').style.display = 'none';
        document.getElementById('level-selection').style.display = 'none';
        document.getElementById('top-players').style.display = 'none';
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('field-of-the-game').style.display = 'block';
        startGame(number_game, back);
    }
    });

document.getElementById('newGame').addEventListener("click", ()=>{newGame()});
function newGame() {
    [].forEach.call(document.querySelectorAll('.card'),function(e){
        e.parentNode.removeChild(e);
    });
}

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const buttonRegistration = document.getElementById('form-button-registration');
function dataСcollection(){
    let obj = JSON.parse(localStorage.getItem(`All User`));
    const arrayUsers = [];
    let boolOne = false;
    let boolTwo = false;
    let user = {
        FirstName: firstName.value,
        LastName: lastName.value,
        Email: email.value,
        TenLength: "00:20:00",
        EighteenLength: "00:20:00",
        TwentyFourLength: "00:20:00",
        CountGame: 0
    };
    let c = 0;
    let t = 0;
    let check = 0;
    for(let i=0; i<user.Email.length; i++){
        if(user.Email[i]==="@"){
            c=i;
            check++;
        }
        if(user.Email[i]==='.'){
            t=i;
            check++;
        }
    }
    if(check===2&& c<t){
        boolTwo = true;
    }
    if(user.FirstName != "" && user.LastName != ""&& user.Email != ""){
        if(obj == null){
            arrayUsers.push(user);
            obj = JSON.stringify( arrayUsers);
            localStorage.setItem(`All User`, obj);
        } else {
            for(let i = 0; i< obj.length; i++){
                if(obj[i].Email === user.Email){
                    alert("This Email is already taken! Select another Email!");
                    boolOne = true;
                    break;
                }
            }
            if(boolOne != true && boolTwo === true){
                for(let i = 0;i<obj.length;i++){
                    arrayUsers.push(obj[i]);
                }
                arrayUsers.push(user);
                obj = JSON.stringify( arrayUsers);
                localStorage.setItem(`All User`, obj);
                alert("You have successfully registered!");
                document.getElementById('registration').style.display = 'none';
                document.getElementById('field-of-the-game').style.display = 'none';
                document.getElementById('top-players').style.display = 'none';
                document.getElementById('rules').style.display = 'none';
                document.getElementById('level-selection').style.display = 'none';
                document.getElementById('sign-in').style.display = 'block';
            }
        }


    }else {
        alert("The data is not correct!");
    }
}

buttonRegistration.addEventListener('click', ()=>{dataСcollection();});

const firstNameLogin = document.getElementById('sign-in-first-name');
const emailLogin = document.getElementById('sign-in-email');
const buttonLogin = document.getElementById('form-button');

function signIn(){
    let user = {
        FirstNameLogin: firstNameLogin.value,
        EmailLogin: emailLogin.value
    };
    let obj = JSON.parse(localStorage.getItem(`All User`));
    if(obj != null){
        for(let i =0;i<obj.length; i++){
            if(obj[i].FirstName === user.FirstNameLogin){
                if(obj[i].Email === user.EmailLogin){
                    return true;
                }
            }
        }
        return false;
    } else {
        return false;
    }

}

buttonLogin.addEventListener('click', ()=>{
    if(signIn()){
        document.getElementById('registration').style.display = 'none';
        document.getElementById('field-of-the-game').style.display = 'none';
        document.getElementById('top-players').style.display = 'none';
        document.getElementById('rules').style.display = 'none';
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('level-selection').style.display = 'block';
        newGame();
    } else {
        alert("Data entered incorrectly or you are not registered!");

    }
});

function funTopPlayer(){
    const tableResults = document.getElementsByClassName('table-results')[0];
    scorePlayers();
    let obj = JSON.parse(localStorage.getItem(`All User`));
    let arUsers =[];
    for(let i =0; i<obj.length;i++){
        arUsers.push(obj[i]);
    }

    arUsers.sort(function(obj1, obj2) {
        return obj1.CountGame-obj2.CountGame;
    });

    let arrTr = [];
    for(let i=0;i<10; i++){
        let tr = document.createElement('tr');
        tableResults.appendChild(tr);
        arrTr.push(tr);
        try {
            if(arUsers[i].FirstName != undefined){
                let td0 = document.createElement('td');
                td0.innerHTML = i+1;
                tr.appendChild(td0);
                let td1 = document.createElement('td');
                td1.innerHTML = arUsers[i].FirstName;
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerHTML = arUsers[i].Email;
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = arUsers[i].TenLength;
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = arUsers[i].EighteenLength;
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = arUsers[i].TwentyFourLength;
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = arUsers[i].CountGame;
                tr.appendChild(td6);
            }
        } catch (e) {}
    }
    return arrTr;
}

function scorePlayers(){
    let obj = JSON.parse(localStorage.getItem(`All User`));
    let arUsers = [];
    let count = 0;
    let str = "";
    for(let i =0; i<obj.length;i++){
        arUsers.push(obj[i]);
    }

    for(let i=0; i<arUsers.length; i++){
        if(arUsers[i].TenLength == 0 || arUsers[i].EighteenLength == 0 || arUsers[i].TwentyFourLength == 0 || arUsers[i].Count == 0){
        } else {
            countingTime(arUsers[i].TenLength);
            countingTime(arUsers[i].EighteenLength);
            countingTime(arUsers[i].TwentyFourLength);
            function countingTime(string){
                string= string.replace(/[:]/g, '');
                count += parseInt(string[0] + string[1]) * 3600;
                count += parseInt((string[2] + string[3])) * 60;
                count += parseInt(string[4] + string[5])
            }
            arUsers[i].CountGame = count;
            obj = JSON.stringify(arUsers);
            localStorage.setItem(`All User`, obj);
        }
        count=0;
    }
}
