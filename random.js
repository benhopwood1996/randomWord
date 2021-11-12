
function randomInt(num) {
    return Math.floor(Math.random() * num);
};

function genRandomWord(speech) {
    var wordIndex = randomInt(4);
    const adj = ['pretty', 'ugly', 'smart', 'stupid'];
    const noun = ['beach', 'friend', 'hotel', 'garbage'];
    const verb = ['run', 'walk', 'talk', 'think'];
    if (speech == 'adj') {
        var randWord = adj[wordIndex];
    };
    if (speech == 'noun') {
        var randWord = noun[wordIndex];
    };
    if (speech == 'verb') {
        var randWord = verb[wordIndex];
    }
    return randWord
};

const addWord = (ev)=>{
    ev.preventDefault();
    let word = document.getElementById('speech').value
    rand_word = genRandomWord(word);
    document.querySelector('form').reset();
    console.log(rand_word);
    window.alert('Here is your random word:' + ' ' + rand_word);
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addWord);
});

