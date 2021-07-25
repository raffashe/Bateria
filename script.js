document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value; //pegar o valor das teclas pressionadas

    //caso tenha valor no input, cria uma lista com os valores
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
}); 

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    //seleciona o audio de acordo com a tecla pressionada
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`);
    //procura por uma div que tenha os atributos "key-data" + a tecla indicada

    if (audioElement){
        audioElement.currentTime = 0; // zera o delay da tecla S, para ritmos mais acelerados
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active'); //ele adiciona a classe do style

        setTimeout(()=>{
            keyElement.classList.remove('active') // ele temporiza em 300ms e remove a ação
        }, 300);

    }
}
//função para reproduzir em loop a lista definida pelo usuário no input
function playComposition(songArray){
    //frear o looping
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 200; //seta diferenças de tempo para cada som, aumentando 250ms em cada uma, para que não toquem tudo de uma vez

    }
}