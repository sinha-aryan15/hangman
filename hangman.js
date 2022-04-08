const words=[
    "delhi","bombay","bhu","madras","mandi","hyderabad","kanpur","kharagpur","dhanbad","roorkee","guwahati","indore","ropar","patna","bhubaneswar"
    ,"jodhpur","tirupati","bhilai","goa","jammu","palakkad","dharwad"
];
// 3 to 11
let wordSplit="";
let guessed=[];
let word_guess=document.getElementById('guess').innerHTML='';
let word= words[Math.floor(Math.random()*9+3)-1];
function guessWord() {
wordSplit=word.split('').map(letter => (guessed.indexOf(letter)>=0 ? letter : " _ " )).join('');
document.getElementById('guess').innerHTML=wordSplit;
}
// alert(word);


document.getElementById('restart').addEventListener("click",reset);
function reset(){
    location.reload();
}



// let letter=document.getElementsByClassName('alpha')[0].textContent;
// document.getElementsByClassName('alpha')[0].addEventListener("click",checkWord(letter));


// function checkWord(letter){
// guessed.indexOf(letter)===-1?guessed.push(letter):null
// document.getElementById(letter).setAttribute('disabled',true);
// }
guessWord();

