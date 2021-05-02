const counter = el('counter');
const plusButton = el('plus');
const minusButton = el('minus');
const likesUl = document.querySelector("body > ul");
const likeBttn =  document.querySelector("button#heart") 
const likes = {}; 

let number = 0;
let timer = setInterval(updateNumber, 1000);

function updateNumber(){
    number += 1;
    counter.innerText = number;
}

plusButton.addEventListener('click', (evt) => {
    counter.innerText++;
});
minusButton.addEventListener('click', (evt) => {
    counter.innerText--;
});

likeBttn.addEventListener('click', incrementLike);

function incrementLike() {
    likes[number] = (likes[number] === undefined) ? 1 : likes[number] + 1;
    renderLikes();
}

function renderLikes() {
    const likeList = document.querySelector('.likes');
    likeList.innerHTML = '';

    Object.keys(likes).sort((a,b) => a-b).forEach(key => {
        const newLike = document.createElement('li');
        newLike.innerText = `Likes for ${key}: ${likes[key]}`;
        likeList.append(newLike);
    })
  }

  function el(id){
    return document.getElementById(id);
}














