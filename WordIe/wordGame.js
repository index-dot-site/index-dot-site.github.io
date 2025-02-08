import { SOLUTION_WORDS, ALLOWED_WORDS } from "./WORDLIST.js";

function convertWordToArray(word) {
    let wordAsArray = [];
    for(pos = 0; pos < 5; pos++) {
        wordAsArray.push(word[pos]);
    }
    return wordAsArray;
}

function checkLetterQuantity(letter, word) {
    let quantity = 0;
    for (let pos = 0; pos < 5; pos++) {
        if (letter == word[pos]){
            quantity ++;
        }
    }
    return quantity;
}

function isLetterInWord(word1, pos, word2){
    for (let n = 0; n < 5; n++) {
        if (word1[pos] == word2[n]) {
            return true;
        }
    }
    return false;
}

function checkPlacementOfLetter(word1, word2, pos){
    if (word1[pos] == word2[pos]){
        return 'G';
    }
    else if (isLetterInWord){
        return 'Y';
    }
    else {
        return 'N';
    }
}

const ANSWER = convertWordToArray(SOLUTION_WORDS[floor(Math.random() * SOLUTION_WORDS.length)]);