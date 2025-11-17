const userNameEl = document.getElementById("userName");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const userCardEl = document.getElementById("userCard");
const compCardEl = document.getElementById("compCard");
const roundEl = document.getElementById("round");
const generateBtn = document.getElementById("generate");
const resultEl = document.getElementById("result");


let playerName = prompt("Введіть ваше ім'я:");
if (!playerName) playerName = "User";
userNameEl.textContent = playerName;

const cards = [
    {img: "img/6.png", value: 6},
    {img: "img/7.png", value: 7},
    {img: "img/8.png", value: 8},
    {img: "img/9.png", value: 9},
    {img: "img/10.png", value: 10},
    {img: "img/jack.png", value: 2},
    {img: "img/queen.png", value: 3},
    {img: "img/king.png", value: 4},
    {img: "img/ace.png", value: 11}
];

let round = 1;
let userScore = 0;
let compScore = 0;

generateBtn.onclick = function () {


    let userCard = cards[Math.floor(Math.random() * cards.length)];
    let compCard = cards[Math.floor(Math.random() * cards.length)];


    userCardEl.src = userCard.img;
    compCardEl.src = compCard.img;


    userScore += userCard.value;
    compScore += compCard.value;

    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;

    if (userCard.value > compCard.value) {
        userScoreEl.style.background = "#b2ffb2";
        compScoreEl.style.background = "#ffb2b2";
    } else if (userCard.value < compCard.value) {
        compScoreEl.style.background = "#b2ffb2";
        userScoreEl.style.background = "#ffb2b2";
    } else {
        userScoreEl.style.background = "#ffffb2";
        compScoreEl.style.background = "#ffffb2";
    }


    roundEl.textContent = `Спроба ${round} з 3`;


    if (round === 3) {
        generateBtn.disabled = true;
        generateBtn.style.background = "gray";

        if (userScore > compScore) {
            resultEl.textContent = `${playerName} виграв! `;
        } else if (userScore < compScore) {
            resultEl.textContent = "Комп'ютер виграв";
        } else {
            resultEl.textContent = "Нічия!";
        }
    }

    round++;
};