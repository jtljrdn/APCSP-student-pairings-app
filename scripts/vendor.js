//Const Declarations
const inputText = document.getElementById('txt-input');
const btnAdd = document.getElementById('btn-add');
const btnPair = document.getElementById('btn-pair');
const btnClear = document.getElementById('btn-clear');

const resultsText = document.getElementById('txt-results');
const pairingsList = document.getElementById('list-pairings');

//Event Listeners
btnAdd.addEventListener('click', function() {funcAdd(inputText.value);});
btnPair.addEventListener('click', function() {funcPair(students);});
btnClear.addEventListener('click', function() {emptyList();});

//Declare Global Variables
let students = [];
