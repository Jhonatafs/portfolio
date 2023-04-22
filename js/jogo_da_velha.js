var index = 0;
var notIndex = 1;
var endGame = false;
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
]

function move(b){
    if(endGame === false){
        if(document.querySelector(b).textContent === 'O' || document.querySelector(b).textContent === 'X'){
            alert(`Essa casa já foi preenchida pelo jogador '${document.querySelector(b).textContent}' escolha outra casa.`)
        } else {
            document.querySelector(b).innerHTML = change();
            this.index = (this.index === 0 ? 1 : 0);
            this.notIndex = (this.notIndex === 0 ? 1 : 0);
            document.getElementById('status').textContent = `Vez do '${notChange()}'.`;
            wins();
        }
    } else {
        alert('Esse jogo já acabou, comece uma nova partida.');
    }
    

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

function reset(){
    let r = ['#b0', '#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7', '#b8', ];
    if(confirm('Deseja reniciar o jogo?')){
        document.getElementById('status').textContent = `Jogo da Velha`;
    for(let i = 0; i < 9 ; i++){
        document.querySelector(r[i]).innerHTML = '';
    }
        this.endGame = false;
        del();
    }else{}
}

function wins(){
    for(let i = 0; i < 8; i++){
        if(
            document.querySelector(winningStreaks[i][0]).textContent === 'O' &&
            document.querySelector(winningStreaks[i][1]).textContent === 'O' &&
            document.querySelector(winningStreaks[i][2]).textContent === 'O'
        ){
            this.endGame = true;
            alert(`Vitória do Jogador 'O'.`);
            document.querySelector(winningStreaks[i][0]).classList.add('winner');
            document.querySelector(winningStreaks[i][1]).classList.add('winner');
            document.querySelector(winningStreaks[i][2]).classList.add('winner');
        } else if(
            document.querySelector(winningStreaks[i][0]).textContent === 'X' &&
            document.querySelector(winningStreaks[i][1]).textContent === 'X' &&
            document.querySelector(winningStreaks[i][2]).textContent === 'X'
        ){
            this.endGame = true;
            alert(`Vitória do Jogador 'X'.`);
            document.querySelector(winningStreaks[i][0]).classList.add('winner');
            document.querySelector(winningStreaks[i][1]).classList.add('winner');
            document.querySelector(winningStreaks[i][2]).classList.add('winner');
        }
    }
}

function del(){
    let r = ['#b0', '#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7', '#b8', ];
    for(let i = 0; i < 9 ; i++){
        document.querySelector(r[i]).classList.remove('winner');
    }
}

function pvsp(){
    reset();
    alert('Modo de Jogo humano vs humano ativado');
    /*Incrementar funcionalidades para pvp*/
}