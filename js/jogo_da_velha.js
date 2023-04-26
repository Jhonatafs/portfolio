var index = 0;
var notIndex = 1;
var endGame = false;
var modPve = false;
var status = document.querySelector('#status');
const winningStreaks = [
    /*************\
    |    0 1 2    |
    |    3 4 5    |
    |    6 7 8    |
    \*************/
    ['#b0','#b4','#b8'],
    ['#b2','#b4','#b6'],
    ['#b0','#b1','#b2'],
    ['#b3','#b4','#b5'],
    ['#b6','#b7','#b8'],
    ['#b0','#b3','#b6'],
    ['#b1','#b4','#b7'],
    ['#b2','#b5','#b8']
];

const boardSquares = ['#b4', '#b0', '#b2', '#b6', '#b8', '#b1', '#b3', '#b5', '#b7'];

const robotDatabase = [
    ['#b4', '#b0'], /*b8*/ ['#b4', '#b8'], /*b0*/ ['#b0', '#b8'], /*b4*/
    ['#b4', '#b1'], /*b7*/ ['#b4', '#b7'], /*b1*/ ['#b1', '#b7'], /*b4*/ 
    ['#b4', '#b2'], /*b6*/ ['#b4', '#b6'], /*b2*/ ['#b2', '#b6'], /*b4*/ 
    ['#b4', '#b3'], /*b5*/ ['#b4', '#b5'], /*b3*/ ['#b3', '#b5'], /*b4*/ 
    ['#b0', '#b1'], /*b2*/ ['#b0', '#b2'], /*b1*/ ['#b2', '#b1'], /*b0*/ 
    ['#b0', '#b3'], /*b6*/ ['#b0', '#b6'], /*b3*/ ['#b3', '#b6'], /*b0*/ 
    ['#b2', '#b5'], /*b8*/ ['#b2', '#b8'], /*b5*/ ['#b5', '#b8'], /*b2*/ 
    ['#b6', '#b7'], /*b8*/ ['#b6', '#b8'], /*b7*/ ['#b7', '#b8'], /*b6*/ 
]

function move(b){
    if(endGame === false){
        if(document.querySelector(b).textContent === 'O' || document.querySelector(b).textContent === 'X'){
            alert(`Essa casa já foi preenchida pelo jogador '${document.querySelector(b).textContent}' escolha outra casa.`)
        } else {
            document.querySelector(b).innerHTML = change();
            this.index = (this.index === 0 ? 1 : 0);
            this.notIndex = (this.notIndex === 0 ? 1 : 0);
            document.getElementById('status').textContent = `Vez do '${notChange()}'`;
            if(this.modPve){
                moveRobot();
                this.index = (this.index === 0 ? 1 : 0);
                this.notIndex = (this.notIndex === 0 ? 1 : 0);
                document.getElementById('status').textContent = `Vez do '${notChange()}'`;
            }
        }    
    } else {
        alert('Esse jogo já acabou, comece uma nova partida.');
    }
    wins();
}

function change(){
    if(this.index === 0){
        return 'O';
    } else {
        return 'X';
    }
}

function notChange(){
    if(this.notIndex === 0){
        return 'X';
    } else {
        return 'O';
    }
}

function checkSymbol(b){
    let d = document.querySelector(b).innerHTML
    if(d != ''){
        return true;
    } else {
        return false
    }
}

function reset(q){
    if(q){
        document.getElementById('status').textContent = `Jogo da Velha`;
    for(let i = 0; i < 9 ; i++){
        document.querySelector(boardSquares[i]).innerHTML = '';
    }
        this.endGame = false;
        del();
    }else{}
}

function questReset(){
    if(confirm('Deseja reniciar o jogo?')){
        return true;
    } else{
        return false;
    }
}

function wins(){
    for(let i = 0; i < 8; i++){
        if(
            document.querySelector(winningStreaks[i][0]).textContent === 'O' &&
            document.querySelector(winningStreaks[i][1]).textContent === 'O' &&
            document.querySelector(winningStreaks[i][2]).textContent === 'O'
        ){
            this.endGame = true;
            document.querySelector(winningStreaks[i][0]).classList.add('winner');
            document.querySelector(winningStreaks[i][1]).classList.add('winner');
            document.querySelector(winningStreaks[i][2]).classList.add('winner');
            document.getElementById('status').textContent = `Vitória do 'O'`;
        } else if(
            document.querySelector(winningStreaks[i][0]).textContent === 'X' &&
            document.querySelector(winningStreaks[i][1]).textContent === 'X' &&
            document.querySelector(winningStreaks[i][2]).textContent === 'X'
        ){
            this.endGame = true;
            document.querySelector(winningStreaks[i][0]).classList.add('winner');
            document.querySelector(winningStreaks[i][1]).classList.add('winner');
            document.querySelector(winningStreaks[i][2]).classList.add('winner');
            document.getElementById('status').textContent = `Vitória do 'X'`;
        }
    }
}

function del(){
    for(let i = 0; i < 9 ; i++){
        document.querySelector(boardSquares[i]).classList.remove('winner');
    }
}

function pvp(){
    if(modPve && questReset()){
        reset(true);
        this.modPve = false;
        activeMode('pve', 'pvp');
    } else {
        alert('Modo de jogo já está ativo.');
    }    
}

function pve(){
    if(modPve === false && questReset()){
        reset(true);
        this.modPve = true;
        activeMode('pvp', 'pve');
    } else {
        alert('Modo de jogo já está ativo.');
    }                  
}

function activeMode(a, b){
    document.getElementById(a).classList.remove('active-mode');
    document.getElementById(b).classList.add('active-mode');
}

function moveRobot(){
    let itPlayed = false;
    let x = ['#b8', '#b0', '#b4',
             '#b7', '#b1', '#b4',
             '#b6', '#b2', '#b4',
             '#b5', '#b3', '#b4',
             '#b2', '#b1', '#b0',
             '#b6', '#b3', '#b0',
             '#b8', '#b5', '#b2',
             '#b8', '#b7', '#b6'];

    for(i in robotDatabase){
        console.log(i + ' = ' + document.querySelector(robotDatabase[i][0]).textContent + ' ' + document.querySelector(robotDatabase[i][1]).textContent);
        if(document.querySelector(robotDatabase[i][0]).textContent === document.querySelector(robotDatabase[i][1]).textContent &&
           document.querySelector(robotDatabase[i][0]).textContent != ''
        ){
            if(document.querySelector(x[i]).textContent === ''){
                document.querySelector(x[i]).innerHTML = change();
                itPlayed = true;
                break;
            }
        }
    }

    if(itPlayed === false){
        document.querySelector(possibleMove()[0]).innerHTML = change();
    }
}

function possibleMove(){
    let p = [];
    for(let i = 0; i < 9; i++){
        if(document.querySelector(boardSquares[i]).textContent === ''){
                p.push(boardSquares[i]);
            }
    }
    return p;
}